from dataclasses import dataclass

@dataclass
class Price:
    company_code: str
    buy: float
    sell: float
