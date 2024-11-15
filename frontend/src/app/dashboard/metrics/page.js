
import { lusitana } from '@/app/ui/fonts';


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
      <div className="w-full h-full mt-6">
        <iframe 
          src="/grafana/d/EgnaroDAS/host-and-docker-monitoring?kiosk" 
          title="Metrics Dashboard"
          className="w-full h-full border-none rounded-lg"
        />
      </div>
    </div>
  );
}