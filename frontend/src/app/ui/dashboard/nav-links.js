'use client';

import {
  HomeIcon,
  BanknotesIcon,
  CircleStackIcon,
  ChartBarIcon,
  PlusCircleIcon,
  ClockIcon,
  BellAlertIcon,
  MinusCircleIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Gold Prices',
    href: '/dashboard/goldprices',
    icon: CircleStackIcon,
  },
  { name: 'Exchange Rates', href: '/dashboard/exchangerates', icon: BanknotesIcon },
  {
    name: 'Monitor',
    //href: '/dashboard/monitor',
    icon: PlusCircleIcon,
    isGroup: true, 
    children: [
      { name: 'Metrics', href: '/dashboard/monitor/metrics', icon: ChartBarIcon },
      { name: 'Alert', href: '/dashboard/monitor/alert', icon: BellAlertIcon },
      { name: 'API response time', href: '/dashboard/monitor/api-response-time', icon: ClockIcon }
    ]
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isMonitorOpen, setIsMonitorOpen] = useState(false);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        if (link.isGroup) {
          return (
            <div key={link.name} className= 'flex flex-row grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:grow-0'>
              <button
                onClick={() => setIsMonitorOpen(!isMonitorOpen)} 
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#fceae9] p-3 text-sm font-medium hover:bg-[#ffdada] hover:text-[#561d22] md:flex-none md:justify-start md:p-2 md:px-3',
                )}
              >
                {isMonitorOpen ? (
                  <MinusCircleIcon className="w-6" />
                ) : (
                  <PlusCircleIcon className="w-6" />
                )}
                <p className="hidden md:block">{link.name}</p>
              </button>

              {isMonitorOpen && link.children.map((child) => {
                return (
                  <Link
                    key={child.name}
                    href={child.href}
                    className={clsx(
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#fceae9] p-3 text-sm font-medium hover:bg-[#ffdada] hover:text-[#561d22] md:flex-none md:justify-start md:p-2 md:px-3',
                      {
                        'bg-[#ffdada] text-[#3b080f]': pathname === child.href,
                      }
                    )}
                  >
                    <child.icon className="w-6" />
                    <p className="hidden md:block">{child.name}</p>
                  </Link>
                );
              })}
            </div>
          );
        }

        // Render normal links
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#fceae9] p-3 text-sm font-medium hover:bg-[#ffdada] hover:text-[#561d22] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#ffdada] text-[#3b080f]': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}