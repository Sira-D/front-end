import React from 'react';

type Size = 'sm' | 'md' | 'lg';
type State = 'default' | 'error';

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: Size;
  state?: State;
  label?: string;
  helperText?: string;
}

const sizeStyles: Record<Size, { padding: string; text: string; gap: string; border: string }> = {
  sm: { padding: 'p-2', text: 'text-desktop-caption-lg', gap: 'gap-2', border: 'border-2' },
  md: { padding: 'p-3', text: 'text-desktop-body-md',    gap: 'gap-2', border: 'border-2' },
  lg: { padding: 'p-4', text: 'text-desktop-body-lg',    gap: 'gap-2', border: 'border-3' },
};

const stateStyles: Record<State, string> = {
  default: 'border-color-border-subtle hover:border-color-border-strong focus-within:border-color-border-strong',
  error:   'border-color-border-error   hover:border-color-bg-error-dark',
};

export function Textarea({
  size = 'md',
  state = 'default',
  label,
  helperText,
  disabled,
  className = '',
  ...props
}: TextareaProps) {
  const { padding, text, gap, border } = sizeStyles[size];

  return (
    <div className={`flex flex-col ${gap} w-full`}>
      {label && (
        <label className="text-desktop-caption-lg font-bold text-color-text-subtle">
          {label}
        </label>
      )}
      <textarea
        disabled={disabled}
        className={`
          w-full rounded-md font-serif transition-colors duration-150 outline-none resize-y
          bg-color-bg-default placeholder:text-color-text-subtler text-color-text-default
          disabled:bg-grey-25 disabled:cursor-not-allowed
          ${stateStyles[state]} ${border} ${padding} ${text} ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
      {helperText && (
        <p className={`text-desktop-caption-md mt-1 ${state === 'error' ? 'text-color-text-error' : 'text-color-text-subtle'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
