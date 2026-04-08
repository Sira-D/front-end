'use client';

import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface PaginationProps {
  size?: Size;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const sizeStyles: Record<Size, { box: string; text: string; padding: string; gap: string }> = {
  sm: { box: 'w-8 h-8',   text: 'text-desktop-caption-lg', padding: 'px-3 py-3', gap: 'gap-1' },
  md: { box: 'w-8 h-8',   text: 'text-desktop-body-md',    padding: 'px-4 py-4', gap: 'gap-2' },
  lg: { box: 'w-8 h-8',   text: 'text-desktop-body-lg',    padding: 'px-6 py-6', gap: 'gap-2' },
};

export function Pagination({ size = 'md', currentPage, totalPages, onPageChange }: PaginationProps) {
  const { box, text, gap } = sizeStyles[size];

  const getPages = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className={`flex items-center ${gap}`}>
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${box} flex items-center justify-center rounded-sm text-blue-900 disabled:text-grey-600 disabled:cursor-not-allowed hover:bg-color-bg-subtler transition-colors`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Pages */}
      {getPages().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className={`${box} flex items-center justify-center ${text} text-grey-600`}>
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`
              ${box} flex items-center justify-center rounded-sm font-serif ${text} transition-colors
              ${currentPage === page
                ? 'bg-color-bg-primary text-color-text-inverse font-bold'
                : 'text-blue-900 hover:bg-color-bg-subtler'
              }
            `.trim().replace(/\s+/g, ' ')}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${box} flex items-center justify-center rounded-sm text-blue-900 disabled:text-grey-600 disabled:cursor-not-allowed hover:bg-color-bg-subtler transition-colors`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
