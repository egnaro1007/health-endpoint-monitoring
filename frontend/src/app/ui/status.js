import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function StatusIcon({ status }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-[#ffdad6] text-[#410002]': status === 'down',
          'bg-green-500 text-white': status === 'up',
        },
      )}
    >
      {status === 'down' ? (
        <>
          Down
          <XMarkIcon className="ml-1 w-4 text-[#410002]" />
        </>
      ) : null}
      {status === 'up' ? (
        <>
          Up
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
