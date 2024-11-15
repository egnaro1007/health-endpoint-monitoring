import StatusTable from '@/app/ui/exchangerates/status-table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export const metadata = {
  title: 'Exchange Rates',
};

export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl text-[#3b080f]`}>Exchange Rates</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense>
        <StatusTable />
      </Suspense> 
      </div>
      
    </div>
  );
}

