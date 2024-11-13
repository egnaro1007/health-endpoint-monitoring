'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-[#8f4a4e] px-4 py-2 text-sm text-[#ffffff] transition-colors hover:bg-[#3b080f]"
        onClick={reset} // Attempt to recover by trying to re-render the invoices route
      >
        Try again
      </button>
    </main>
  );
}
