'use client';

import { timeAgo } from '@/app/lib/utils';
import React, { useEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { fetchExchangeRateByBankName } from '@/app/lib/data';
import { fetchExchangeRatesData } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import Image from 'next/image';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function RateDetailsTable({bank_name_short}) {
  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);  
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);  
    setHasError(false);
    console.log("fetching data");
    try {
      const exchangeRatesData = await fetchExchangeRatesData();
      const foundBank = exchangeRatesData.find(item => item.bank_name_short == bank_name_short);
      if (!foundBank.success) {
        setHasError(true);
        setLastUpdated(new Date()); 
        return;
      }
      const fetchedData =  await fetchExchangeRateByBankName(bank_name_short);
      setData(fetchedData.rate_exchanges);  
      setLastUpdated(new Date()); 
    } catch (error) {
      console.error("Failed to fetch exchange rates", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
        setTimeSinceUpdate(Math.floor((Date.now() - lastUpdated) / 1000));
      }, 1000);

      return () => clearInterval(interval);
  }, [lastUpdated]);

  return (
    <div className="w-full md:col-span-full">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-[#fff8f7] p-2 md:pt-0 mx-auto">
          {hasError ? (
            <main className="flex h-full flex-col items-center justify-center gap-2 pt-6">
              <FaceFrownIcon className="w-10 text-gray-400" />
              <h2 className="text-xl font-semibold">404 Not Found</h2>
              <p>Could not find the requested bank.</p>
              <Link
                href="/dashboard/exchangerates"
                className="mt-4 rounded-md px-4 py-2 text-sm transition-colors bg-[#fceae9] hover:bg-[#ffdada] hover:text-[#561d22]"
              >
                Go Back
              </Link>
            </main>
          ) : (
            <>
              <div className="md:hidden">
                {data?.map((data) => (
                  <div
                    key={data.currency_code}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="mb-2 flex items-center text-xl text-[#3b080f]">
                        <div className="flex items-center gap-3">
                          <Image
                            src={data.logo}
                            className="rounded-full"
                            alt={`${data.currency_name}'s logo`}
                            width={28}
                            height={28}
                          />
                          <p>{decodeURIComponent(data.currency_name)}</p>
                        </div>
                      </div>
                      <p className="text-xl text-[#765657]">
                        {data.currency_code}
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex flex-col">
                        <p className="text-md text-[#765657]">Buy Price</p>
                        <p className="text-xl font-medium text-[#3b080f]">
                          {formatCurrency(data.rate_buy)}
                        </p>
                      </div>
                      <div className="flex flex-col text-center">
                        <p className="text-md text-[#765657]">Transfer Price</p>
                        <p className="text-xl font-medium text-[#3b080f]">
                          {formatCurrency(data.rate_transfer)}
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p className="text-md text-[#765657]">Sell Price</p>
                        <p className="text-xl font-medium text-[#3b080f]">
                          {formatCurrency(data.rate_sell)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <table className="hidden min-w-full max-w-3xl mx-auto text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-9 text-[#3b080f]">
                      Currency Name
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-center text-[#3b080f]">
                      Currency Code
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-center text-[#3b080f]">
                      Rate Buy
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-center text-[#3b080f]">
                      Rate Transfer
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pr-6 text-center text-[#3b080f]">
                      Rate Sell
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data?.map((data) => (
                    <tr
                      key={data.currency_code}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3 ">
                        <div className="flex items-center gap-3 text-[#3b080f]">
                          <Image
                            src={data.logo}
                            className="rounded-full"
                            alt={`${data.currency_name}'s logo`}
                            width={28}
                            height={28}
                          />
                          <p>{decodeURIComponent(data.currency_name)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center ">
                        <div className="flex items-center gap-3 text-[#3b080f] justify-center">
                          <p>{decodeURIComponent(data.currency_code)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center ">
                        <div className="flex items-center gap-3 text-[#3b080f] justify-center">
                          <p>{formatCurrency(data.rate_buy)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-center ">
                        <div className="flex items-center gap-3 text-[#3b080f] justify-center">
                          <p>{formatCurrency(data.rate_transfer)}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 pl-3 pr-6 text-center">
                        <div className="flex items-center gap-3 text-[#3b080f] justify-center">
                          <p>{formatCurrency(data.rate_sell)}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <div className="flex items-center pt-5 pb-2 px-3 cursor-pointer" onClick={fetchData}>
            <ArrowPathIcon className="h-5 w-5 text-[#765657]" />
            <h3 className="ml-2 text-sm text-[#765657]">
              {isLoading ? 'Updating...' : timeAgo(lastUpdated)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}