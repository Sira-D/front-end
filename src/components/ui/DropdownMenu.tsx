'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  align?: 'left' | 'right';
}

export function DropdownMenu({ trigger, items, onSelect, align = 'left' }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen((o) => !o)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div
          className={`
            absolute z-50 mt-1 min-w-[160px] rounded-md border-1 border-color-border-default
            bg-color-bg-default shadow-lg
            ${align === 'right' ? 'right-0' : 'left-0'}
          `.trim().replace(/\s+/g, ' ')}
        >
          <ul className="flex flex-col gap-1 py-1">
            {items.map((item) => (
              <li key={item.value}>
                <button
                  disabled={item.disabled}
                  onClick={() => {
                    onSelect?.(item.value);
                    setOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-2 text-left
                    px-5 py-2 font-serif text-desktop-body-md
                    text-color-text-default
                    hover:bg-color-bg-information-soft
                    disabled:text-color-text-subtler disabled:cursor-not-allowed
                    transition-colors duration-100
                  `.trim().replace(/\s+/g, ' ')}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
