import os
import time
from dataclasses import asdict
from fastapi import FastAPI, status, HTTPException
from contextlib import asynccontextmanager
from apscheduler.schedulers.background import BackgroundScheduler
from fastapi.responses import JSONResponse
import psycopg2
import sources.sjc
import sources.doji
import sources.pnj
from health_check import HealthCheck

# Database configuration
db_config = {
    "DB_HOST": os.getenv("DB_HOST"),
    "DB_PORT": os.getenv("DB_PORT"),
    "DB_NAME": os.getenv("DB_NAME"),
    "DB_USER": os.getenv("DB_USER"),
    "DB_PASSWORD": os.getenv("DB_PASSWORD")
}

# Initialize companies
sjc = sources.sjc.SJC()
doji = sources.doji.DOJI()
pnj = sources.pnj.PNJ()
companies = {
    "SJC": sjc,
    "DOJI": doji,
    "PNJ": pnj
}


# Create a global database connection variable
db_connection = None


def create_db_connection():
    global db_connection
    try:
        db_connection = psycopg2.connect(
            host=db_config["DB_HOST"],
            port=db_config["DB_PORT"],
            dbname=db_config["DB_NAME"],
            user=db_config["DB_USER"],
            password=db_config["DB_PASSWORD"]
        )
    except Exception as e:
        print(f"Error creating database connection: {e}")

def log_prices_to_db():
    global db_connection
    if db_connection is None:
        return

    prices = get_prices()
    cursor = db_connection.cursor()

    for price in prices:
        # Check if the company exists
        cursor.execute("""
            SELECT id FROM company WHERE company_code = %s;
        """, (price["company_code"],))

        result = cursor.fetchone()

        if result:
            company_id = result[0]
        else:
            # Insert the company if it doesn't exist
            cursor.execute("""
                INSERT INTO company (company_code)
                VALUES (%s)
                RETURNING id;
            """, (price["company_code"],))
            company_id = cursor.fetchone()[0]

        # Insert the price into the gold_price table
        cursor.execute("""
            INSERT INTO gold_price (company_id, buy_price, sell_price)
            VALUES (%s, %s, %s)
        """, (company_id, price["buy"], price["sell"]))

    db_connection.commit()
    cursor.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    global db_connection
    # Startup code: database connection and scheduler setup
    attempt = 10
    while attempt > 0:
        print("Attempt ", 11 - attempt, ": ", end="")
        try:
            create_db_connection()
            attempt = 0
        except Exception as e:
            print("Waiting for database ...")
            time.sleep(5)
            attempt -= 1

    if db_connection is None:
        print("Failed to connect to the database. Starting app without database tasks.")
        db_connection = None
    else:
        print("Database connected")
        # Schedule task
        scheduler = BackgroundScheduler()
        scheduler.add_job(log_prices_to_db, 'interval', seconds=30)
        scheduler.start()

    # Yield to allow the app to run
    yield
    print("Alicesss")
    # Shutdown code: stop the scheduler and close the database connection
    if db_connection is not None:
        db_connection.close()
    scheduler.shutdown()


app = FastAPI(lifespan=lifespan)


@app.get("/companies", status_code = status.HTTP_200_OK)
def get_companies():
    return list(companies.keys())

@app.get("/getprice/{company_code}")
def get_price(company_code: str):
    if company_code not in companies:
        raise HTTPException(status_code=404, detail="Not Found")
    try:
        price = companies[company_code].get_price()
        return price
    except Exception as e:
        raise HTTPException(status_code=500, detail={
            "company_code": company_code,
            "error": "Internal Server Error"
        })

@app.get("/getprices")
def get_prices():
    companies_price = []
    for company in companies:
        print(company)
        try:
            response_data = {
                "success": True,
                **asdict(get_price(company))
            }
            companies_price.append(response_data)
        except Exception as e:
            print(f"Error fetching price for {company}: {e}")
            companies_price.append({
                "success": False,
                "company_code": company
            })

    return companies_price

@app.get("/status/apis")
async def get_apis_status():
    status = []
    for company in companies:
        status.append(HealthCheck.source_check_status(companies[company]))
    return status

@app.get("/status/containers")
async def get_container_status():
    status = {}
    status["system"] = []
    status["system"].append(HealthCheck.get_kernel_info())
    status["system"].append(HealthCheck.get_system_uptime())
    status["cpu"] = HealthCheck.get_cpu_info()
    status["memory"] = HealthCheck.get_memory_info()
    status["disk"] = HealthCheck.get_disk_info()
    status["network"] = HealthCheck.get_network_info()
    return status

@app.get("/status/containers/processes")
async def get_container_processes():
    return HealthCheck.get_process_info()
