from banks.base_bank import BaseBank
from .dataclasses import ExchangeRate
import requests
import re
import json
import urllib.parse
from bs4 import BeautifulSoup

import re

class APIThanhToan(BaseBank):
    def __init__(self, name, url):
        if not name:
            raise ValueError("Name is required")
        
        if not re.match(r'^https://apithanhtoan\.com/ty-gia/[^/]+/$', url):
            raise ValueError("Invalid URL")
        
        self.__name = name
        self.__url = url

    @property
    def name(self):
        return self.__name

    @property
    def url(self):
        return self.__url
    
    def get_data_url(self):
        try:
            apithanhtoan_response = requests.get(self.url)
            url_soup = BeautifulSoup(apithanhtoan_response.text, 'html.parser') 
            script_tag = url_soup.select_one('#content > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4) > script').contents[0]
            if script_tag is None:
                raise ValueError("Data URL not found")

            data_url = re.search(r'window\.url_embed\s*=\s*"([^"]+)"', script_tag).group(1)
            if data_url is None:
                raise ValueError("Data URL not found")
            
            return data_url

        except Exception as e:
            return None
        
    def get_exchange_rate(self):
        try:
            # Fetch the API
            response = requests.get(self.get_data_url())
            if response.status_code != 200:
                response.raise_for_status()

            # Get the data
            soup = BeautifulSoup(response.text, 'html.parser')

            data_bank_rate_exchange = json.loads(
                urllib.parse.unquote(
                    re.search(r'var\s+_dataBankRateExchange\s*=\s*`([^`]+)`', 
                        soup.select_one('body > script:nth-child(2)'
                    ).contents[0]).group(1)
                )
            )

            # Extract exchange rate data
            exchange_rate_data = {}
            for rate_exchange in data_bank_rate_exchange['rateExchanges']:
                exchange_rate_data[rate_exchange['index']] = ExchangeRate(
                        currency_name=rate_exchange['currencyName'],
                        currency_name_vi=rate_exchange['currencyNameVi'],
                        currency_code=rate_exchange['currencyCode'],
                        rate_buy=rate_exchange['rateBuy'],
                        rate_transfer=rate_exchange['rateTransfer'],
                        rate_sell=rate_exchange['rateSell'],
                        logo="https://apithanhtoan.com/assets-iframe/images/flags/32/" + rate_exchange['logo']
                    )
                
            exchange_rate_data = list(
                dict(
                    sorted(exchange_rate_data.items())
                ).values()
            )

            #Extract bank data
            bank_data = {
                'bank_name': data_bank_rate_exchange['bankName'],
                'bank_name_short': data_bank_rate_exchange['bankNameShort'],
                'bank_code': data_bank_rate_exchange['bankCode'],
                'swift_code': data_bank_rate_exchange['swiftCode'],
                'rate_exchanges': exchange_rate_data
            }


            return bank_data
        except requests.exceptions.RequestException as e:
            print("Error while fetching data", e)