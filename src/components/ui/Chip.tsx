import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  selected?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const sizeStyles: Record<Size, { height: string; padding: string; text: string; icon: string; gap: string }> = {
  sm: { height: 'h-6',  padding: 'px-2', text: 'text-desktop-caption-md', icon: 'w-3 h-3', gap: 'gap-1' },
  md: { height: 'h-8',  padding: 'px-3', text: 'text-desktop-caption-lg', icon: 'w-4 h-4', gap: 'gap-1' },
  lg: { height: 'h-10', padding: 'px-4', text: 'text-desktop-body-md',    icon: 'w-4 h-4', gap: 'gap-1' },
};

export function Chip({
  size = 'md',
  selected = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ChipProps) {
  const { height, padding, text, icon, gap } = sizeStyles[size];

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center rounded-full font-serif transition-colors duration-150 cursor-pointer
        ${selected
          ? 'bg-color-bg-primary text-color-text-inverse'
          : 'bg-color-bg-subtle text-color-text-subtle hover:bg-grey-100 hover:text-color-text-default'
        }
        disabled:bg-color-bg-subtle disabled:text-color-text-inverse disabled:cursor-not-allowed
        ${height} ${padding} ${text} ${gap} ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {leftIcon && <span className={icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={icon}>{rightIcon}</span>}
    </button>
  );
}
