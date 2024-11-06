import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export default async function Page() {
  // not yet add fallback skeleton
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-[#3b080f]`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense> 
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense>
          <RevenueChart />
        </Suspense>
        <Suspense>
          <LatestInvoices />
        </Suspense> 
      </div>
    </main>
  );
}