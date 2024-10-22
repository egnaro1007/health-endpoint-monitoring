from abc import ABC, abstractmethod
from collections import namedtuple

ExchangeRate = namedtuple('ExchangeRate', ['rateBuy', 'rateTransfer', 'rateSell'])

class BaseBank(ABC):
    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @property
    @abstractmethod
    def url(self) -> str:
        pass

    @abstractmethod
    def get_exchange_rate(self) -> ExchangeRate:
        pass
    