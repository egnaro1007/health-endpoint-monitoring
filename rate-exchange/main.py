from banks import apithanhtoan
from fastapi import FastAPI, HTTPException
from banks.dataclasses import Bank, ExchangeRate

app = FastAPI()

banks = {
    "vietcombank": apithanhtoan.APIThanhToan("Vietcombank", "https://apithanhtoan.com/ty-gia/vietcombank/"),
    "techcombank": apithanhtoan.APIThanhToan("Techcombank", "https://apithanhtoan.com/ty-gia/techcombank/"),
    "bidv": apithanhtoan.APIThanhToan("BIDV", "https://apithanhtoan.com/ty-gia/bidv/"),
    "agribank": apithanhtoan.APIThanhToan("Agribank", "https://apithanhtoan.com/ty-gia/agribank/"),
    "vietinbank": apithanhtoan.APIThanhToan("Vietinbank", "https://apithanhtoan.com/ty-gia/vietinbank/"),
    "tpbank": apithanhtoan.APIThanhToan("TPBank", "https://apithanhtoan.com/ty-gia/tien-phong/"),
}

@app.get("/banks")
def get_banks():
    return list(banks.keys())

@app.get("/getexchangerate/{bank_short_name}")
def get_exchange_rate(bank_short_name: str):
    if bank_short_name not in banks:
        raise HTTPException(status_code=404, detail="Not Found")
    try:
        return banks[bank_short_name].get_exchange_rate()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/getexchangerates")
def get_exchange_rates():
    result = []
    for bank in banks:
        try:
            result.append({
                "success": True,
                **banks[bank].get_exchange_rate()
            })
        except Exception as e:
            result.append({
                "success": False, 
                "bank_name_short": bank,
                "error": str(e)
            })
    return result
