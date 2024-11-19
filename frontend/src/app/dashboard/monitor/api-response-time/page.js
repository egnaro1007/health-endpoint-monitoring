import { lusitana } from '@/app/ui/fonts';
import InfoIframe from '@/app/ui/info-iframe';

export const metadata = {
  title: 'API Response Time',
};

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl md:text-2xl text-[#3b080f]`}>API Response Time</h1>
      </div>
      <InfoIframe link=""/>
    </div>
  );
}
