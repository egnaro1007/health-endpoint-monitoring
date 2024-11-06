import StatusTable from '@/app/ui/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export const metadata = {
  title: 'Exchange Rates',
};

export default async function Page(props) {

  const query = 'exchange';
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl text-[#3b080f]`}>Exchange Rates</h1>
      </div>
      <Suspense>
        <StatusTable query={query} />
      </Suspense> 
    </div>
  );
}

