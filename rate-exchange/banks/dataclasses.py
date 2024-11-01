from dataclasses import dataclass

@dataclass
class ExchangeRate:
    currency_name: str
    currency_name_vi: str
    currency_code: str
    rate_buy: float
    rate_transfer: float
    rate_sell: float
    logo: str

@dataclass
class Bank:
    bank_name: str
    bank_name_short: str
    bank_code: str
    swift_code: str
    rate_exchanges: dict[int, ExchangeRate]