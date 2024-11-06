import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCardData } from '@/app/lib/data';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    //const cardData = await fetchCardData();

    const numberOfInvoices = 0
    const numberOfCustomers = 0
    const totalPaidInvoices = 0
    const totalPendingInvoices = 0
  
    return (
      <>
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </>
    );
  }
  
  export function Card({ title, value, type }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-[#fff8f7] p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-[#3b080f]" /> : null}
          <h3 className="ml-2 text-sm font-medium text-[#3b080f]">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-[#ffffff] px-4 py-8 text-center text-2xl text-[#3b080f]`}
        >
          {value}
        </p>
      </div>
    );
  }
  