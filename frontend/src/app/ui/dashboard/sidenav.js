import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon, HeartIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-[#fceae9] p-4 md:h-20"
        href="/dashboard"
      >
        {/* <div className="w-32 md:w-40">
          <HeartIcon/>
        </div> */}
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#fff8f7] md:block"></div>
      </div>
    </div>
  );
}