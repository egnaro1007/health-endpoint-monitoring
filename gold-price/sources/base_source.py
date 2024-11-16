
from abc import ABC, abstractmethod
from collections import namedtuple
from sources.dataclasses import Price

class BaseSource(ABC):
    @property
    @abstractmethod
    def company_code(self):
        pass

    @property
    @abstractmethod
    def url(self):
        pass

    @abstractmethod
    def get_price(self) -> Price:
        pass
