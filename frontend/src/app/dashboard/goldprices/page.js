import StatusTable from '@/app/ui/goldprices/status-table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import GoldPricesTable from '@/app/ui/goldprices/table';

export const metadata = {
  title: 'Gold Prices',
};

export default async function Page(props) {
  const query = 'gold';
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl text-[#3b080f]`}>Gold Prices</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense>
        <StatusTable query={query} />
      </Suspense> 
        <Suspense>
          <GoldPricesTable />
        </Suspense> 
      </div>
    </div>
  );
}