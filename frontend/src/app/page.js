import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-[#fff8f7] px-6 py-10 md:px-20 w-full">
          <p
            className={`${lusitana.className} text-xl text-[#3b080f] md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Health Endpoint.</strong> 
            <br></br>
            <span className="text-[#561d22]">Monitor your endpoints</span> and get notified when they are down.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-[#8f4a4e] px-6 py-3 text-sm font-medium text-[#ffffff] transition-colors hover:bg-[#3b080f] md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
