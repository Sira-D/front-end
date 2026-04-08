import React from 'react';

type Size = 'sm' | 'md' | 'lg';
type State = 'default' | 'error';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: Size;
  state?: State;
  label?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-2 text-desktop-caption-lg',
  md: 'px-4 py-2 text-desktop-body-md',
  lg: 'px-4 py-3 text-desktop-body-lg',
};

const stateStyles: Record<State, string> = {
  default: 'border-color-border-default hover:border-color-border-strong focus:border-color-border-information',
  error:   'border-color-border-error   hover:border-color-bg-error-dark',
};

export function Select({
  size = 'md',
  state = 'default',
  label,
  helperText,
  options,
  placeholder,
  disabled,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-desktop-caption-lg font-bold text-color-text-subtle">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          disabled={disabled}
          className={`
            w-full appearance-none rounded-md border-2 font-serif outline-none
            transition-colors duration-150 bg-color-bg-default cursor-pointer
            text-color-text-default placeholder:text-color-text-subtler
            disabled:bg-grey-25 disabled:cursor-not-allowed
            ${stateStyles[state]} ${sizeStyles[size]} ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-color-text-subtle">
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      {helperText && (
        <p className={`text-desktop-caption-md ${state === 'error' ? 'text-color-text-error' : 'text-color-text-subtle'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
