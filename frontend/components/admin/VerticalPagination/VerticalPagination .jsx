'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure you're using next/navigation

const VerticalPagination = ({ totalPages = 100 }) => {
  const router = useRouter();

  // Ensure that `router.query` is defined before accessing `page`
  const currentPage = parseInt(router.query?.page) || 1;

  const [start, setStart] = useState(1); // Always starts at 1 initially

  const handlePageChange = page => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  const handleArrowUp = () => {
    if (start > 1) setStart(start - 1);
  };

  const handleArrowDown = () => {
    if (start + 10 <= totalPages) setStart(start + 1);
  };

  const visiblePages = Array.from(
    { length: Math.min(10, totalPages - start + 1) },
    (_, i) => start + i
  );

  return (
    <div className="flex flex-col items-center gap-2 py-4 w-20">
      {/* Up Arrow */}
      <button
        onClick={handleArrowUp}
        disabled={start === 1}
        className="text-xl hover:text-gray-600 disabled:opacity-30"
      >
        ↑
      </button>

      {/* Page Numbers */}
      {visiblePages.map(page => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-6 h-6 text-sm rounded-full flex items-center justify-center 
            ${
              currentPage === page
                ? 'bg-blue-900 text-white'
                : 'text-black hover:text-blue-700'
            }`}
        >
          {page}
        </button>
      ))}

      {/* Down Arrow */}
      <button
        onClick={handleArrowDown}
        disabled={start + 10 > totalPages}
        className="text-xl hover:text-gray-600 disabled:opacity-30"
      >
        ↓
      </button>
    </div>
  );
};

export default VerticalPagination;
