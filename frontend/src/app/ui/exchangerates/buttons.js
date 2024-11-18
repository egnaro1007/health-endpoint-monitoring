import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline'; 

export function RateDetails({ bank_name_short = '' , success}) {
  const targetUrl = `/dashboard/exchangerates/${bank_name_short}`
  return (
    <Link
      href={targetUrl}
      className="rounded-md p-2 hover:bg-gray-100"
    >
      <ChevronRightIcon className="w-5 h-5" />
    </Link>
  );
}
