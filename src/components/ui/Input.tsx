import React from 'react';

type Size = 'sm' | 'md' | 'lg';
type State = 'default' | 'warning';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  state?: State;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<Size, { padding: string; text: string; icon: string }> = {
  sm: { padding: 'px-3 py-2', text: 'text-desktop-caption-lg', icon: 'w-4 h-4' },
  md: { padding: 'px-4 py-2', text: 'text-desktop-body-md',    icon: 'w-5 h-5' },
  lg: { padding: 'px-4 py-3', text: 'text-desktop-body-lg',    icon: 'w-6 h-6' },
};

const stateStyles: Record<State, string> = {
  default: `
    border-color-border-subtle bg-color-bg-default
    hover:border-color-border-strong
    focus-within:border-color-border-primary
  `,
  warning: `
    border-color-border-warning bg-color-bg-default
    hover:border-color-bg-warning-dark
  `,
};

export function Input({
  size = 'md',
  state = 'default',
  label,
  helperText,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}: InputProps) {
  const { padding, text, icon } = sizeStyles[size];

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-desktop-caption-lg font-bold text-color-text-subtle">
          {label}
        </label>
      )}
      <div
        className={`
          flex items-center gap-2 rounded-md border transition-colors duration-150
          ${disabled ? 'bg-grey-25 border-color-border-subtle cursor-not-allowed' : stateStyles[state]}
          ${padding} ${className}
        `.trim().replace(/\s+/g, ' ')}
      >
        {leftIcon && (
          <span className={`flex-shrink-0 ${icon} ${disabled ? 'text-color-border-subtle' : 'text-color-border-default'}`}>
            {leftIcon}
          </span>
        )}
        <input
          disabled={disabled}
          className={`
            flex-1 bg-transparent outline-none font-serif
            placeholder:text-color-text-subtler
            disabled:cursor-not-allowed
            ${text}
            ${state === 'warning' ? 'text-color-text-warning' : 'text-color-text-default'}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
        {rightIcon && (
          <span className={`flex-shrink-0 ${icon} ${disabled ? 'text-color-border-subtle' : 'text-color-border-default'}`}>
            {rightIcon}
          </span>
        )}
      </div>
      {helperText && (
        <p className={`text-desktop-caption-md ${state === 'warning' ? 'text-color-text-warning' : 'text-color-text-subtle'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
