import Link from 'next/link'; // Đảm bảo bạn đã import Link nếu chưa có
import { ChevronRightIcon } from '@heroicons/react/24/outline'; // Đảm bảo bạn import đúng PencilIcon

export function RateDetails({ bank_name_short = '' , success}) {
  const targetUrl = success ? `/dashboard/exchangerates/${bank_name_short}` : `/dashboard/exchangerates/notfound`;
  return (
    <Link
      href={targetUrl}
      className="rounded-md p-2 hover:bg-gray-100"
    >
      <ChevronRightIcon className="w-5 h-5" />
    </Link>
  );
}
