from dataclasses import dataclass
from sources.base_source import BaseSource, Price
from requests.exceptions import RequestException


@dataclass
class Status:
    company_code: str
    provider_connection: bool
    parse_data: bool
    endpoint_response: bool

class HealthCheck:
    @staticmethod
    def source_check_status(obj: BaseSource) -> Status:
        code = obj.company_code
        provider_connection = True
        parse_data = True
        data_response = True

        try:
            price = obj.get_price()
            if price is None or not isinstance(price, Price):
                data_response = False
        except RequestException:
            provider_connection = False
            parse_data = False
        except ValueError:
            parse_data = False

        return Status(code, provider_connection, parse_data, data_response)