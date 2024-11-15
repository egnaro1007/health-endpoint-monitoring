'use client';

import StatusIcon from '@/app/ui/status';
import { timeAgo } from '@/app/lib/utils';
import React, { useEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { fetchGoldEndpointsData } from '@/app/lib/data';

export default function StatusTable({ query }) {
  //const invoices = await fetchFilteredInvoicesData(query, currentPage);

  var dummyData = {
    rows: [
      {id: 1, name: "SJC", status: true},
      {id: 2, name: "DOJI", status: false},
      {id: 3, name: "PNJ", status: true},
    ],
  }

  const [data, setData] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);  
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);  
    try {
      const fetchedData =  await fetchGoldEndpointsData();
      setData(fetchedData);  
      setLastUpdated(new Date()); 
    } catch (error) {
      console.error("Failed to fetch gold prices", error);
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



  //const data = dummyData.rows;

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-3">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-[#fff8f7] p-2 md:pt-0 mx-auto">
          <div className="md:hidden">
            {data?.map((data) => (
              <div
                key={data.company_code}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                    <div className="mb-2 flex items-center">
                      <p>{data.company_code}</p>
                    </div>

                  <StatusIcon status={data.provider_connection && data.parse_data && data.endpoint_response} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full max-w-3xl mx-auto text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-[#3b080f]">
                  Endpoint Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pr-6 text-right text-[#3b080f]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((data) => (
                <tr
                  key={data.company_code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3 text-[#3b080f]">
                      <p>{data.company_code}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 pl-3 pr-6 text-right">
                    <StatusIcon status={data.provider_connection && data.parse_data && data.endpoint_response} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center pt-5 pb-2 px-3 cursor-pointer"  onClick={fetchData}>
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
