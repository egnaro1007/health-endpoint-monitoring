import StatusTable from '@/app/ui/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

export const metadata = {
  title: 'Metrics',
};

export default async function Page(props) {
  const query = 'metrics';
  return (
    <div className="w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl text-[#3b080f]`}>Metrics</h1>
      </div>
      <div className="w-full h-full">
        <iframe 
          src="/grafana/d/EgnaroDAS/host-and-docker-monitoring?kiosk" 
          title="Metrics Dashboard"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}