from sources.base_source import BaseSource
from sources.dataclasses import Price
import requests
import random
from bs4 import BeautifulSoup

class PNJ(BaseSource):
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

    @property
    def company_code(self):
        return 'PNJ'

    @property
    def url(self):
        return 'https://www.pnj.com.vn/blog/gia-vang/'

    def get_price(self) -> Price:
        headers = {'User-Agent': random.choice(self.User_Agent)}
        response = requests.get(self.url, headers=headers)
        response.raise_for_status()

        if response.status_code != 200:
            raise requests.exceptions.RequestException("Cannot connect to provider")

        soup = BeautifulSoup(response.text, 'html.parser')
        
        buy_price_element = soup.select_one("#content-price > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1)")
        sell_price_element = soup.select_one("#content-price > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)")

        if buy_price_element is None and sell_price_element is None:
            raise ValueError("Cannot fetch buy and sell price")
        elif buy_price_element is None:
            raise ValueError("Cannot fetch buy price")
        elif sell_price_element is None:
            raise ValueError("Cannot fetch sell price")
        
        buy_price = int(buy_price_element.text.strip().replace(',', '')) * 1000 * 10
        sell_price = int(sell_price_element.text.strip().replace(',', '')) * 1000 * 10

        return Price(company_code="pnj", buy=buy_price, sell=sell_price)