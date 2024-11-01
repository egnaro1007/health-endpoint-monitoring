from dataclasses import dataclass
from banks.base_bank import BaseBank
from banks.dataclasses import Bank, ExchangeRate
from requests.exceptions import RequestException


@dataclass
class Status:
    company_code: str
    provider_connection: bool
    parse_data: bool
    endpoint_response: bool

class HealthCheck:
    @staticmethod
    def source_check_status(obj: BaseBank) -> Status:
        bank_name = obj.name
        provider_connection = True
        parse_data = True
        data_response = True

        try:
            bank_data = obj.get_exchange_rate()
            if bank_data is None or not isinstance(bank_data, Bank):
                data_response = False
        except RequestException:
            provider_connection = False
            parse_data = False
        except ValueError:
            parse_data = False

        return Status(bank_name, provider_connection, parse_data, data_response)
