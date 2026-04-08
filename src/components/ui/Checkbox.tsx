import React from 'react';

type Size = 'sm' | 'md' | 'lg';
type State = 'default' | 'warning' | 'success';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: Size;
  state?: State;
  label?: string;
}

const sizeStyles: Record<Size, { box: string; icon: string; padding: string; gap: string; text: string }> = {
  sm: { box: 'w-4 h-4',   icon: 'w-3 h-3',   padding: 'p-2', gap: 'gap-2', text: 'text-desktop-caption-lg' },
  md: { box: 'w-5 h-5',   icon: 'w-3 h-3',   padding: 'p-3', gap: 'gap-2', text: 'text-desktop-body-md' },
  lg: { box: 'w-6 h-6',   icon: 'w-4 h-4',   padding: 'p-4', gap: 'gap-2', text: 'text-desktop-body-lg' },
};

const stateStyles: Record<State, string> = {
  default: 'border-color-border-default hover:border-color-border-strong checked:bg-color-bg-primary checked:border-color-border-primary',
  warning: 'border-color-border-warning hover:border-color-bg-warning-dark',
  success: 'border-color-border-success checked:bg-color-bg-success checked:border-color-border-success',
};

export function Checkbox({
  size = 'md',
  state = 'default',
  label,
  disabled,
  className = '',
  ...props
}: CheckboxProps) {
  const { box, padding, gap, text } = sizeStyles[size];

  return (
    <label
      className={`
        inline-flex items-center cursor-pointer select-none
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        ${padding} ${gap} ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className={`
          appearance-none flex-shrink-0 rounded border-1 transition-colors duration-150
          bg-color-bg-default
          hover:bg-color-bg-subtler
          disabled:bg-color-bg-subtle disabled:border-color-border-subtle
          ${stateStyles[state]}
          ${box}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
      {label && (
        <span className={`font-serif text-color-text-default ${text}`}>
          {label}
        </span>
      )}
    </label>
  );
}
