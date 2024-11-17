import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested bank.</p>
      <Link
        href="/dashboard/exchangerates"
        className="mt-4 rounded-md px-4 py-2 text-sm transition-colors bg-[#fceae9] hover:bg-[#ffdada] hover:text-[#561d22]"
      >
        Go Back
      </Link>
    </main>
  );
}