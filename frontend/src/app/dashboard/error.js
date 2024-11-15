'use client';

// //import { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';


// export default function Error({ error, reset }) {
//   useEffect(() => {
//     // Optionally log the error to an error reporting service
//     console.error("Error caught:", error);
//   }, [error]);

//   return (
//     <main className="flex h-full flex-col items-center justify-center">
//       <h2 className="text-center text-red-600">Something went wrong!</h2>
//       <p className="text-center text-sm text-gray-600">
//         {error?.message || "An unexpected error occurred."}
//       </p>
//       <button
//         className="mt-4 rounded-md bg-[#8f4a4e] px-4 py-2 text-sm text-[#ffffff] transition-colors hover:bg-[#3b080f]"
//         onClick={reset} // Attempt to recover by trying to re-render the route
//       >
//         Try again
//       </button>
//     </main>
//   );
// }
