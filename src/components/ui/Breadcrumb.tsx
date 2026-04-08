import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isError?: boolean;
}

interface BreadcrumbProps {
  size?: Size;
  items: BreadcrumbItem[];
}

const sizeStyles: Record<Size, { padding: string; text: string; icon: string; gap: string }> = {
  sm: { padding: 'px-3 py-3', text: 'text-desktop-caption-lg', icon: 'w-1 h-2', gap: 'gap-1' },
  md: { padding: 'px-4 py-4', text: 'text-desktop-body-md',    icon: 'w-1 h-2', gap: 'gap-2' },
  lg: { padding: 'px-6 py-6', text: 'text-desktop-body-lg',    icon: 'w-1 h-2', gap: 'gap-2' },
};

export function Breadcrumb({ size = 'md', items }: BreadcrumbProps) {
  const { text, gap } = sizeStyles[size];

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex items-center flex-wrap ${gap}`}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={`font-serif text-color-text-subtler hover:text-color-text-default transition-colors ${text} ${item.isError ? 'text-color-text-error' : ''}`}
                >
                  {item.label}
                </a>
              ) : (
                <span className={`font-serif ${text} ${item.isError ? 'text-color-text-error' : 'text-color-text-default font-bold'}`}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <svg className="w-1 h-2 mx-1 text-color-text-subtler" viewBox="0 0 4 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l2 3-2 3" />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
