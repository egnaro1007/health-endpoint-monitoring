CREATE DATABASE statistic_log;
-- Connect to the newly created database (this is important)
\c statistic_log;

-- Create tables for statistic_log database
CREATE TABLE IF NOT EXISTS company (
    id SERIAL PRIMARY KEY,
    company_code VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS gold_price (
    id SERIAL PRIMARY KEY,
    company_id INT,
    buy_price DECIMAL(10,2) NOT NULL,
    sell_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS bank (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_short VARCHAR(255),
    code VARCHAR(50) NOT NULL,
    swift_code VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS exchange_rate (
    id SERIAL PRIMARY KEY,
    currency_name VARCHAR(255),
    currency_name_vi VARCHAR(255),
    currency_code VARCHAR(10),
    rate_buy DECIMAL(10,4),
    rate_transfer DECIMAL(10,4),
    rate_sell DECIMAL(10,4),
    logo VARCHAR(255),
    bank_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bank_id) REFERENCES bank(id) ON DELETE CASCADE
);