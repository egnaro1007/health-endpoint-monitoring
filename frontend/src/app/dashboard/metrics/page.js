import { lusitana } from '@/app/ui/fonts';
import InfoIframe from '@/app/ui/info-iframe';

export const metadata = {
  title: 'Metrics',
};

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl md:text-2xl text-[#3b080f]`}>Metrics</h1>
      </div>
      <InfoIframe link="/grafana/d/EgnaroDAS/host-and-docker-monitoring?kiosk&theme=light"/>
    </div>
  );
}
