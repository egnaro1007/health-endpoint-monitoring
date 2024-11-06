import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoicesData } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoicesData();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-[#3b080f]`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-[#fff8f7] p-4 ">
        <div className="bg-[#ffffff] px-6 rounded-md">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base text-[#3b080f]">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block text-[#44292a]">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base text-[#3b080f]`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-[#765657]" />
          <h3 className="ml-2 text-sm text-[#765657] ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}