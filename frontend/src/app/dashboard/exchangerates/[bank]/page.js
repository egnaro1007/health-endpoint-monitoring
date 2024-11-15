import Breadcrumbs from '@/app/ui/exchangerates/breadcrumbs';
import { lusitana } from '@/app/ui/fonts';
import RateDetailsTable from '@/app/ui/exchangerates/table';
import { Suspense } from 'react';


export const metadata = {
    title: 'Bank | Exchange Rate',
  };

export default async function Page(props) {
  const params = await props.params;
  const bank_name_short = params.bank;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Exchange Rates', href: '/dashboard/exchangerates' },
          {
            label: 'Rate Details',
            href: `/dashboard/exchangerates/${bank_name_short}`,
            active: true,
          },
        ]}
      />
      <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h3 className={`${lusitana.className} text-xl text-[#3b080f]`}>{decodeURIComponent(bank_name_short)} Exchange Rates</h3>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        
      <Suspense>
        <RateDetailsTable bank_name_short={bank_name_short} />
      </Suspense> 
      </div>
      
    </div>
    </main>
  );
}