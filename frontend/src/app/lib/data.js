import axios from 'axios';


export async function fetchData() {
  const apiUrl = '/api/something/idk/'; // Replace with your actual API endpoint
  
  try {
    const response = await axios.get(apiUrl);
    
    // Assuming the response data is in the format you expect
    return response.data; // This should return the data in JSON format
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch data.');
  }
}

export async function fetchGoldPricesData() {
  const apiUrl = '/gold-price/getprices';
  try {
    const dummyData = [
        {success: true, company_code: "SJC", buy: 80500000, sell: 84000000},
        {success: false, company_code: "DOJI", buy: 80500000, sell: 84000000},
        {success: true, company_code: "PNJ", buy: 80800000, sell: 82400000},
      ]

    //return dummyData; 
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch gold prices data.');
  }
}

export async function fetchExchangeRatesData() {
  const apiUrl = '/rate-exchange/getexchangerates';
  try {


    const dummyData = [
      {
          "success": false,
          "bank_name": "Ng%C3%A2n%20h%C3%A0ng%20TMCP%20Ngo%E1%BA%A1i%20Th%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20Nam%20%28VIETCOMBANK%29",
          "bank_name_short": "Vietcombank",
          "bank_code": "BFTV",
          "swift_code": "BFTVVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "25095.00",
                  "rate_transfer": "25125.00",
                  "rate_sell": "25465.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "26828.55",
                  "rate_transfer": "27099.54",
                  "rate_sell": "28299.76",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "16272.65",
                  "rate_transfer": "16437.02",
                  "rate_sell": "16964.44",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "17723.79",
                  "rate_transfer": "17902.82",
                  "rate_sell": "18477.27",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "28472.68",
                  "rate_transfer": "28760.28",
                  "rate_sell": "29683.12",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                  "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                  "currency_code": "CNY",
                  "rate_buy": "3462.43",
                  "rate_transfer": "3497.40",
                  "rate_sell": "3609.63",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
              },
              {
                  "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                  "currency_code": "DKK",
                  "rate_buy": "",
                  "rate_transfer": "3623.62",
                  "rate_sell": "3762.40",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "31956.12",
                  "rate_transfer": "32278.91",
                  "rate_sell": "33314.65",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "3171.53",
                  "rate_transfer": "3203.56",
                  "rate_sell": "3306.35",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "INDIAN%20RUPEE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "",
                  "currency_code": "INR",
                  "rate_buy": "",
                  "rate_transfer": "300.16",
                  "rate_sell": "312.16",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/India.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "160.61",
                  "rate_transfer": "162.23",
                  "rate_sell": "169.94",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "15.96",
                  "rate_transfer": "17.74",
                  "rate_sell": "19.24",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "KUWAITI%20DINAR%20%20%20%20%20%20%20",
                  "currency_name_vi": "Kuwait%20Dinar",
                  "currency_code": "KWD",
                  "rate_buy": "",
                  "rate_transfer": "82341.84",
                  "rate_sell": "85634.28",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Kuwait.png"
              },
              {
                  "currency_name": "MALAYSIAN%20RINGGIT%20%20%20",
                  "currency_name_vi": "Ringgit%20Malaysia",
                  "currency_code": "MYR",
                  "rate_buy": "",
                  "rate_transfer": "5727.62",
                  "rate_sell": "5852.58",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Malaysia.png"
              },
              {
                  "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                  "currency_name_vi": "Krone%20Na%20Uy",
                  "currency_code": "NOK",
                  "rate_buy": "",
                  "rate_transfer": "2258.91",
                  "rate_sell": "2354.83",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
              },
              {
                  "currency_name": "RUSSIAN%20RUBLE%20%20%20%20%20%20%20",
                  "currency_name_vi": "Rub%20Nga",
                  "currency_code": "RUB",
                  "rate_buy": "",
                  "rate_transfer": "245.69",
                  "rate_sell": "271.98",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Russia.png"
              },
              {
                  "currency_name": "SAUDI%20RIAL%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Saudi%20Arabian%20Riyals",
                  "currency_code": "SAR",
                  "rate_buy": "",
                  "rate_transfer": "6718.02",
                  "rate_sell": "6986.64",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Saudi-Arabia.png"
              },
              {
                  "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                  "currency_code": "SEK",
                  "rate_buy": "",
                  "rate_transfer": "2320.35",
                  "rate_sell": "2418.88",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "18689.71",
                  "rate_transfer": "18878.50",
                  "rate_sell": "19484.26",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "661.23",
                  "rate_transfer": "734.70",
                  "rate_sell": "762.84",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              }
          ]
      },
      {
          "success": true,
          "bank_name": "KY%20THUONG%20VN%20%28TECHCOMBANK%29",
          "bank_name_short": "Techcombank",
          "bank_code": "VTCB",
          "swift_code": "VTCBVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "22810",
                  "rate_transfer": "22815",
                  "rate_sell": "23100",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "23614",
                  "rate_transfer": "23912",
                  "rate_sell": "24937",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "15724",
                  "rate_transfer": "15989",
                  "rate_sell": "16606",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "17255",
                  "rate_transfer": "17527",
                  "rate_sell": "18143",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "22609",
                  "rate_transfer": "22953",
                  "rate_sell": "23575",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                  "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                  "currency_code": "CNY",
                  "rate_buy": "",
                  "rate_transfer": "3340",
                  "rate_sell": "3670",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "27545",
                  "rate_transfer": "27908",
                  "rate_sell": "28838",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "",
                  "rate_transfer": "2793",
                  "rate_sell": "2996",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "169",
                  "rate_transfer": "172.21",
                  "rate_sell": "181.38",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "",
                  "rate_transfer": "",
                  "rate_sell": "25",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "MALAYSIAN%20RINGGIT%20%20%20",
                  "currency_name_vi": "Ringgit%20Malaysia",
                  "currency_code": "MYR",
                  "rate_buy": "",
                  "rate_transfer": "5080",
                  "rate_sell": "5430",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Malaysia.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "16041",
                  "rate_transfer": "16308",
                  "rate_sell": "16925",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "585",
                  "rate_transfer": "647",
                  "rate_sell": "700",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              }
          ]
      },
      {
          "success": true,
          "bank_name": "DAU%20TU%20VA%20PHAT%20TRIEN%20VN%20%28BIDV%29",
          "bank_name_short": "BIDV",
          "bank_code": "BIDV",
          "swift_code": "BIDVVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "24120",
                  "rate_transfer": "",
                  "rate_sell": "",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "27087",
                  "rate_transfer": "27131",
                  "rate_sell": "28310",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "16529",
                  "rate_transfer": "16554",
                  "rate_sell": "16954",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "18027",
                  "rate_transfer": "18052",
                  "rate_sell": "18492",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "28858",
                  "rate_transfer": "28887",
                  "rate_sell": "29671",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                  "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                  "currency_code": "CNY",
                  "rate_buy": "",
                  "rate_transfer": "3528",
                  "rate_sell": "3633",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
              },
              {
                  "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                  "currency_code": "DKK",
                  "rate_buy": "",
                  "rate_transfer": "3633",
                  "rate_sell": "3757",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "32433",
                  "rate_transfer": "32507",
                  "rate_sell": "33366",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "3200",
                  "rate_transfer": "3206",
                  "rate_sell": "3302",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "162.92",
                  "rate_transfer": "163.18",
                  "rate_sell": "170.14",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "16.16",
                  "rate_transfer": "17.85",
                  "rate_sell": "19.07",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "KUWAITI%20DINAR%20%20%20%20%20%20%20",
                  "currency_name_vi": "Kuwait%20Dinar",
                  "currency_code": "KWD",
                  "rate_buy": "",
                  "rate_transfer": "80359",
                  "rate_sell": "85436",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Kuwait.png"
              },
              {
                  "currency_name": "MALAYSIAN%20RINGGIT%20%20%20",
                  "currency_name_vi": "Ringgit%20Malaysia",
                  "currency_code": "MYR",
                  "rate_buy": "5414.79",
                  "rate_transfer": "",
                  "rate_sell": "6104.21",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Malaysia.png"
              },
              {
                  "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                  "currency_name_vi": "Krone%20Na%20Uy",
                  "currency_code": "NOK",
                  "rate_buy": "",
                  "rate_transfer": "2266",
                  "rate_sell": "2344",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
              },
              {
                  "currency_name": "RUSSIAN%20RUBLE%20%20%20%20%20%20%20",
                  "currency_name_vi": "Rub%20Nga",
                  "currency_code": "RUB",
                  "rate_buy": "",
                  "rate_transfer": "",
                  "rate_sell": "",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Russia.png"
              },
              {
                  "currency_name": "SAUDI%20RIAL%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Saudi%20Arabian%20Riyals",
                  "currency_code": "SAR",
                  "rate_buy": "",
                  "rate_transfer": "6623.07",
                  "rate_sell": "6968.7",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Saudi-Arabia.png"
              },
              {
                  "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                  "currency_code": "SEK",
                  "rate_buy": "",
                  "rate_transfer": "2330",
                  "rate_sell": "2411",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "18781",
                  "rate_transfer": "18858",
                  "rate_sell": "19510",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "688.69",
                  "rate_transfer": "722.96",
                  "rate_sell": "773.17",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              },
              {
                  "currency_name": "LAK",
                  "currency_name_vi": "Kip%20L%C3%A0o",
                  "currency_code": "LAK",
                  "rate_buy": "",
                  "rate_transfer": "0.88",
                  "rate_sell": "1.22",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Laos.png"
              },
              {
                  "currency_name": "TWD",
                  "currency_name_vi": "Dollar%20%C4%90%C3%A0i%20Loan",
                  "currency_code": "TWD",
                  "rate_buy": "717.28",
                  "rate_transfer": "",
                  "rate_sell": "867.99",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Taiwan.png"
              }
          ]
      },
      {
          "success": true,
          "bank_name": "NNO%26amp%3BPT%20NONG%20THON%20VN%20%28AGRIBANK%29",
          "bank_name_short": "AGRIBANK",
          "bank_code": "VBAA",
          "swift_code": "VBAAVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "25110.00",
                  "rate_transfer": "25120.00",
                  "rate_sell": "25460.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "26980.00",
                  "rate_transfer": "27088.00",
                  "rate_sell": "28219.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "16386.00",
                  "rate_transfer": "16452.00",
                  "rate_sell": "16963.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "17842.00",
                  "rate_transfer": "17914.00",
                  "rate_sell": "18446.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "28645.00",
                  "rate_transfer": "28760.00",
                  "rate_sell": "29651.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                  "currency_code": "DKK",
                  "rate_buy": "",
                  "rate_transfer": "3624.00",
                  "rate_sell": "3758.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "32168.00",
                  "rate_transfer": "32297.00",
                  "rate_sell": "33294.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "3187.00",
                  "rate_transfer": "3200.00",
                  "rate_sell": "3307.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "162.47",
                  "rate_transfer": "163.12",
                  "rate_sell": "170.42",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "",
                  "rate_transfer": "17.67",
                  "rate_sell": "19.46",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                  "currency_name_vi": "Krone%20Na%20Uy",
                  "currency_code": "NOK",
                  "rate_buy": "",
                  "rate_transfer": "2258.00",
                  "rate_sell": "2352.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
              },
              {
                  "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                  "currency_code": "SEK",
                  "rate_buy": "",
                  "rate_transfer": "2323.00",
                  "rate_sell": "2416.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "18819.00",
                  "rate_transfer": "18895.00",
                  "rate_sell": "19443.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "728.00",
                  "rate_transfer": "731.00",
                  "rate_sell": "763.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              },
              {
                  "currency_name": "LAK",
                  "currency_name_vi": "Kip%20L%C3%A0o",
                  "currency_code": "LAK",
                  "rate_buy": "",
                  "rate_transfer": "0.91",
                  "rate_sell": "1.31",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Laos.png"
              },
              {
                  "currency_name": "NZD",
                  "currency_name_vi": "Dollar%20New%20Zealand",
                  "currency_code": "NZD",
                  "rate_buy": "",
                  "rate_transfer": "14920.00",
                  "rate_sell": "15427.00",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/New-Zealand.png"
              }
          ]
      },
      {
          "success": true,
          "bank_name": "CONG%20THUONG%20VN%20%28VIETINBANK%29",
          "bank_name_short": "VIETINBANK",
          "bank_code": "ICBV",
          "swift_code": "ICBVVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "",
                  "rate_transfer": "23600",
                  "rate_sell": "24020",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "",
                  "rate_transfer": "24403",
                  "rate_sell": "25693",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "16822",
                  "rate_transfer": "16842",
                  "rate_sell": "17442",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "18307",
                  "rate_transfer": "18317",
                  "rate_sell": "19017",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "27818",
                  "rate_transfer": "27838",
                  "rate_sell": "28788",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                  "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                  "currency_code": "CNY",
                  "rate_buy": "",
                  "rate_transfer": "3424",
                  "rate_sell": "3564",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
              },
              {
                  "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                  "currency_code": "DKK",
                  "rate_buy": "",
                  "rate_transfer": "3601",
                  "rate_sell": "3771",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "31971",
                  "rate_transfer": "31981",
                  "rate_sell": "33151",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "3120",
                  "rate_transfer": "3130",
                  "rate_sell": "3325",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "153.79",
                  "rate_transfer": "153.94",
                  "rate_sell": "163.49",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "16.24",
                  "rate_transfer": "16.44",
                  "rate_sell": "20.24",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                  "currency_name_vi": "Krone%20Na%20Uy",
                  "currency_code": "NOK",
                  "rate_buy": "",
                  "rate_transfer": "2324",
                  "rate_sell": "2444",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
              },
              {
                  "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                  "currency_code": "SEK",
                  "rate_buy": "",
                  "rate_transfer": "2348",
                  "rate_sell": "2483",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "18271",
                  "rate_transfer": "18281",
                  "rate_sell": "19081",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "643.52",
                  "rate_transfer": "683.52",
                  "rate_sell": "711.52",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              },
              {
                  "currency_name": "LAK",
                  "currency_name_vi": "Kip%20L%C3%A0o",
                  "currency_code": "LAK",
                  "rate_buy": "",
                  "rate_transfer": "0.66",
                  "rate_sell": "1.36",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Laos.png"
              },
              {
                  "currency_name": "NZD",
                  "currency_name_vi": "Dollar%20New%20Zealand",
                  "currency_code": "NZD",
                  "rate_buy": "15347",
                  "rate_transfer": "15357",
                  "rate_sell": "15937",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/New-Zealand.png"
              }
          ]
      },
      {
          "success": true,
          "bank_name": "TIEN%20PHONG%20%28TIEN%20PHONG%20BANK%29",
          "bank_name_short": "TIEN%20PHONG",
          "bank_code": "TPBV",
          "swift_code": "TPBVVNVX",
          "rate_exchanges": [
              {
                  "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20M%E1%BB%B9",
                  "currency_code": "USD",
                  "rate_buy": "25190",
                  "rate_transfer": "25184",
                  "rate_sell": "25484",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
              },
              {
                  "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Euro",
                  "currency_code": "EUR",
                  "rate_buy": "26924",
                  "rate_transfer": "26978",
                  "rate_sell": "28276",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
              },
              {
                  "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                  "currency_name_vi": "Dollar%20Australia",
                  "currency_code": "AUD",
                  "rate_buy": "16386",
                  "rate_transfer": "16532",
                  "rate_sell": "17300",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
              },
              {
                  "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20Canada",
                  "currency_code": "CAD",
                  "rate_buy": "18180",
                  "rate_transfer": "18294",
                  "rate_sell": "19072",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
              },
              {
                  "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                  "currency_code": "CHF",
                  "rate_buy": "28219",
                  "rate_transfer": "27761",
                  "rate_sell": "29008",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
              },
              {
                  "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                  "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                  "currency_code": "CNY",
                  "rate_buy": "2982",
                  "rate_transfer": "3481",
                  "rate_sell": "3636",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
              },
              {
                  "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                  "currency_code": "DKK",
                  "rate_buy": "3628",
                  "rate_transfer": "3678",
                  "rate_sell": "3782",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
              },
              {
                  "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                  "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                  "currency_code": "GBP",
                  "rate_buy": "31301",
                  "rate_transfer": "31353",
                  "rate_sell": "32627",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
              },
              {
                  "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                  "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                  "currency_code": "HKD",
                  "rate_buy": "3056",
                  "rate_transfer": "3189",
                  "rate_sell": "3360",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
              },
              {
                  "currency_name": "INDIAN%20RUPEE%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "",
                  "currency_code": "INR",
                  "rate_buy": "294",
                  "rate_transfer": "304",
                  "rate_sell": "315",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/India.png"
              },
              {
                  "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                  "currency_code": "JPY",
                  "rate_buy": "157.90",
                  "rate_transfer": "160.01",
                  "rate_sell": "169.03",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
              },
              {
                  "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                  "currency_code": "KRW",
                  "rate_buy": "17.70",
                  "rate_transfer": "17.45",
                  "rate_sell": "19.22",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
              },
              {
                  "currency_name": "KUWAITI%20DINAR%20%20%20%20%20%20%20",
                  "currency_name_vi": "Kuwait%20Dinar",
                  "currency_code": "KWD",
                  "rate_buy": "84827",
                  "rate_transfer": "84027",
                  "rate_sell": "85666",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Kuwait.png"
              },
              {
                  "currency_name": "MALAYSIAN%20RINGGIT%20%20%20",
                  "currency_name_vi": "Ringgit%20Malaysia",
                  "currency_code": "MYR",
                  "rate_buy": "5403",
                  "rate_transfer": "5403",
                  "rate_sell": "5610",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Malaysia.png"
              },
              {
                  "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                  "currency_name_vi": "Krone%20Na%20Uy",
                  "currency_code": "NOK",
                  "rate_buy": "2217",
                  "rate_transfer": "2337",
                  "rate_sell": "2419",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
              },
              {
                  "currency_name": "RUSSIAN%20RUBLE%20%20%20%20%20%20%20",
                  "currency_name_vi": "Rub%20Nga",
                  "currency_code": "RUB",
                  "rate_buy": "252",
                  "rate_transfer": "302",
                  "rate_sell": "322",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Russia.png"
              },
              {
                  "currency_name": "SAUDI%20RIAL%20%20%20%20%20%20%20%20%20%20",
                  "currency_name_vi": "Saudi%20Arabian%20Riyals",
                  "currency_code": "SAR",
                  "rate_buy": "6791",
                  "rate_transfer": "6911",
                  "rate_sell": "7001",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Saudi-Arabia.png"
              },
              {
                  "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                  "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                  "currency_code": "SEK",
                  "rate_buy": "2216",
                  "rate_transfer": "2336",
                  "rate_sell": "2418",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
              },
              {
                  "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                  "currency_name_vi": "Dollar%20Singapore",
                  "currency_code": "SGD",
                  "rate_buy": "18289",
                  "rate_transfer": "18504",
                  "rate_sell": "19181",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
              },
              {
                  "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                  "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                  "currency_code": "THB",
                  "rate_buy": "673.71",
                  "rate_transfer": "672.23",
                  "rate_sell": "714.31",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
              },
              {
                  "currency_name": "ZAR",
                  "currency_name_vi": "",
                  "currency_code": "ZAR",
                  "rate_buy": "1417",
                  "rate_transfer": "1367",
                  "rate_sell": "1419",
                  "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Africa.png"
              }
          ]
      }
  ]

    //return dummyData; 
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch all exchange rates data.');
  }
}

export async function fetchExchangeRateByBankName(query) {
    const bank_short_name = query.bank_name_short.toLowerCase(); 
    const apiUrl = `/rate-exchange/getexchangerate/${bank_short_name}`;
  try {
    

    const dummyData = {
        "bank_name": "Ng%C3%A2n%20h%C3%A0ng%20TMCP%20Ngo%E1%BA%A1i%20Th%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20Nam%20%28VIETCOMBANK%29",
        "bank_name_short": "Vietcombank",
        "bank_code": "BFTV",
        "swift_code": "BFTVVNVX",
        "rate_exchanges": [
            {
                "currency_name": "US%20DOLLAR%20%20%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Dollar%20M%E1%BB%B9",
                "currency_code": "USD",
                "rate_buy": "25160.00",
                "rate_transfer": "25190.00",
                "rate_sell": "25512.00",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-States.png"
            },
            {
                "currency_name": "EURO%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Euro",
                "currency_code": "EUR",
                "rate_buy": "26070.92",
                "rate_transfer": "26334.26",
                "rate_sell": "27500.42",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/European-Union.png"
            },
            {
                "currency_name": "AUSTRALIAN%20DOLLAR%20%20%20",
                "currency_name_vi": "Dollar%20Australia",
                "currency_code": "AUD",
                "rate_buy": "15965.78",
                "rate_transfer": "16127.05",
                "rate_sell": "16644.42",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Australia.png"
            },
            {
                "currency_name": "CANADIAN%20DOLLAR%20%20%20%20%20",
                "currency_name_vi": "Dollar%20Canada",
                "currency_code": "CAD",
                "rate_buy": "17607.85",
                "rate_transfer": "17785.71",
                "rate_sell": "18356.29",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Canada.png"
            },
            {
                "currency_name": "SWISS%20FRANC%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Franc%20Th%E1%BB%A5y%20S%E1%BB%B9",
                "currency_code": "CHF",
                "rate_buy": "27830.10",
                "rate_transfer": "28111.22",
                "rate_sell": "29013.05",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Switzerland.png"
            },
            {
                "currency_name": "YUAN%20RENMINBI%20%20%20%20%20%20%20",
                "currency_name_vi": "Nh%C3%A2n%20D%C3%A2n%20T%E1%BB%87",
                "currency_code": "CNY",
                "rate_buy": "3425.24",
                "rate_transfer": "3459.84",
                "rate_sell": "3570.83",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/China.png"
            },
            {
                "currency_name": "DANISH%20KRONE%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Krone%20%C4%90an%20M%E1%BA%A1ch",
                "currency_code": "DKK",
                "rate_buy": "",
                "rate_transfer": "3521.01",
                "rate_sell": "3655.85",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Denmark.png"
            },
            {
                "currency_name": "POUND%20STERLING%20%20%20%20%20%20",
                "currency_name_vi": "B%E1%BA%A3ng%20Anh",
                "currency_code": "GBP",
                "rate_buy": "31340.05",
                "rate_transfer": "31656.61",
                "rate_sell": "32672.19",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/United-Kingdom.png"
            },
            {
                "currency_name": "HONGKONG%20DOLLAR%20%20%20%20%20",
                "currency_name_vi": "Dollar%20H%E1%BB%93ng%20K%C3%B4ng",
                "currency_code": "HKD",
                "rate_buy": "3180.68",
                "rate_transfer": "3212.80",
                "rate_sell": "3315.87",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Hong-Kong.png"
            },
            {
                "currency_name": "INDIAN%20RUPEE%20%20%20%20%20%20%20%20",
                "currency_name_vi": "",
                "currency_code": "INR",
                "rate_buy": "",
                "rate_transfer": "299.93",
                "rate_sell": "311.92",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/India.png"
            },
            {
                "currency_name": "YEN%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Y%C3%AAn%20Nh%E1%BA%ADt",
                "currency_code": "JPY",
                "rate_buy": "156.74",
                "rate_transfer": "158.32",
                "rate_sell": "165.85",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Japan.png"
            },
            {
                "currency_name": "KOREAN%20WON%20%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Won%20H%C3%A0n%20Qu%E1%BB%91c",
                "currency_code": "KRW",
                "rate_buy": "15.62",
                "rate_transfer": "17.36",
                "rate_sell": "18.84",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/South-Korea.png"
            },
            {
                "currency_name": "KUWAITI%20DINAR%20%20%20%20%20%20%20",
                "currency_name_vi": "Kuwait%20Dinar",
                "currency_code": "KWD",
                "rate_buy": "",
                "rate_transfer": "82452.28",
                "rate_sell": "85748.60",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Kuwait.png"
            },
            {
                "currency_name": "MALAYSIAN%20RINGGIT%20%20%20",
                "currency_name_vi": "Ringgit%20Malaysia",
                "currency_code": "MYR",
                "rate_buy": "",
                "rate_transfer": "5601.59",
                "rate_sell": "5723.76",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Malaysia.png"
            },
            {
                "currency_name": "NORWEGIAN%20KRONER%20%20%20%20",
                "currency_name_vi": "Krone%20Na%20Uy",
                "currency_code": "NOK",
                "rate_buy": "",
                "rate_transfer": "2233.34",
                "rate_sell": "2328.16",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Norway.png"
            },
            {
                "currency_name": "RUSSIAN%20RUBLE%20%20%20%20%20%20%20",
                "currency_name_vi": "Rub%20Nga",
                "currency_code": "RUB",
                "rate_buy": "",
                "rate_transfer": "242.93",
                "rate_sell": "268.92",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Russia.png"
            },
            {
                "currency_name": "SAUDI%20RIAL%20%20%20%20%20%20%20%20%20%20",
                "currency_name_vi": "Saudi%20Arabian%20Riyals",
                "currency_code": "SAR",
                "rate_buy": "",
                "rate_transfer": "6748.19",
                "rate_sell": "6996.23",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Saudi-Arabia.png"
            },
            {
                "currency_name": "SWEDISH%20KRONA%20%20%20%20%20%20%20",
                "currency_name_vi": "Krone%20Th%E1%BB%A5y%20%C4%90i%E1%BB%83n",
                "currency_code": "SEK",
                "rate_buy": "",
                "rate_transfer": "2264.05",
                "rate_sell": "2360.17",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Sweden.png"
            },
            {
                "currency_name": "SINGAPORE%20DOLLAR%20%20%20%20",
                "currency_name_vi": "Dollar%20Singapore",
                "currency_code": "SGD",
                "rate_buy": "18402.38",
                "rate_transfer": "18588.26",
                "rate_sell": "19184.59",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Singapore.png"
            },
            {
                "currency_name": "THAILAND%20BAHT%20%20%20%20%20%20%20",
                "currency_name_vi": "Baht%20Th%C3%A1i%20Lan",
                "currency_code": "THB",
                "rate_buy": "642.56",
                "rate_transfer": "713.95",
                "rate_sell": "741.29",
                "logo": "https://apithanhtoan.com/assets-iframe/images/flags/32/Thailand.png"
            }
        ]
    }

    //return dummyData; 
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch exchange rate by bank name data.');
  }
}
