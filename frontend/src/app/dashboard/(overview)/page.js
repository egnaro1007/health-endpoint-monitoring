import { lusitana } from '@/app/ui/fonts';
import InfoIframe from '@/app/ui/info-iframe';

export default async function Page() {
  return (
    <main className='h-full w-full'>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl md:text-2xl text-[#3b080f]`}>Dashboard</h1>
      </div>
      <InfoIframe link="/grafana/d/nginxdas/request-count?kiosk&theme=light"/>
    </main>
  );
}