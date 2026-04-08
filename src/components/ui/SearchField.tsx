import React, { useState } from 'react';

type Size = 'sm' | 'md' | 'lg';

interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  onClear?: () => void;
}

const sizeStyles: Record<Size, { padding: string; text: string; icon: string; border: string }> = {
  sm: { padding: 'px-3 py-3', text: 'text-desktop-body-md',    icon: 'w-4 h-4', border: 'border-1' },
  md: { padding: 'px-4 py-4', text: 'text-desktop-body-lg',    icon: 'w-5 h-5', border: 'border-3' },
  lg: { padding: 'px-6 py-6', text: 'text-desktop-body-xl',    icon: 'w-5 h-5', border: 'border-3' },
};

export function SearchField({
  size = 'md',
  onClear,
  value,
  onChange,
  className = '',
  ...props
}: SearchFieldProps) {
  const [internalValue, setInternalValue] = useState('');
  const controlled = value !== undefined;
  const currentValue = controlled ? value : internalValue;
  const { padding, text, icon, border } = sizeStyles[size];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!controlled) setInternalValue('');
    onClear?.();
  };

  return (
    <div
      className={`
        flex items-center gap-2 rounded-full bg-color-bg-default
        transition-colors duration-150
        border-color-border-default hover:bg-color-bg-subtler focus-within:border-color-border-strong
        ${border} ${padding} ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Search Icon */}
      <span className={`flex-shrink-0 text-color-text-subtler ${icon}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        value={currentValue}
        onChange={handleChange}
        className={`
          flex-1 bg-transparent outline-none font-serif
          text-color-text-default placeholder:text-color-text-subtler
          ${text}
        `}
        {...props}
      />

      {/* Clear button */}
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          className={`flex-shrink-0 text-color-text-subtle hover:text-color-text-default transition-colors ${icon}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
