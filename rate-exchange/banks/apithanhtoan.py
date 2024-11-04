from banks.base_bank import BaseBank
from .dataclasses import Bank, ExchangeRate
import requests
import re
import json
import urllib.parse
from bs4 import BeautifulSoup
from requests.exceptions import RequestException
import random
import re

class APIThanhToan(BaseBank):
    User_Agent = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3', 
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15', 
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0', 
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1', 
        'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', 
        'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko', 
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36', 
        'Mozilla/5.0 (iPad; CPU OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1', 
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0', 
        'Mozilla/5.0 (Linux; U; Android 9; en-US; SM-J600G Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36'
    ]

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
        headers = {'User-Agent': random.choice(self.User_Agent)}    
        apithanhtoan_response = requests.get(self.url, headers=headers)
        apithanhtoan_response.raise_for_status()
    
        if apithanhtoan_response.status_code != 200:
            raise requests.exceptions.RequestException("Cannot connect to provider")
        

        url_soup = BeautifulSoup(apithanhtoan_response.text, 'html.parser') 
        script_tag = url_soup.select_one('#content > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4) > script').contents[0]
        if script_tag is None:
            raise ValueError("Data URL not found")

        data_url = re.search(r'window\.url_embed\s*=\s*"([^"]+)"', script_tag).group(1)
        if data_url is None:
            raise ValueError("Data URL not found")
        
        return data_url
        
    def get_exchange_rate(self):
        # Fetch the API
        response = requests.get(self.get_data_url())
        if response.status_code != 200:
            response.raise_for_status()
            raise RequestException("Connection fail")

        # Get the data
        soup = BeautifulSoup(response.text, 'html.parser')

        try:
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
        except (json.JSONDecodeError, AttributeError, KeyError, TypeError, re.error) as e:
            raise ValueError("Error parsing exchange rate data") from e

        #Extract bank data
        bank_data = Bank(
            bank_name=data_bank_rate_exchange['bankName'],
            bank_name_short=data_bank_rate_exchange['bankNameShort'],
            bank_code=data_bank_rate_exchange['bankCode'],
            swift_code=data_bank_rate_exchange['swiftCode'],
            rate_exchanges=exchange_rate_data
        )

        return bank_data