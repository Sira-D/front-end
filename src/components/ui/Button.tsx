import React from 'react';

type Variant = 'default' | 'soft';
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'information';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const defaultBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary     hover:bg-color-bg-primary-dark',
  secondary:   'bg-color-bg-secondary   hover:bg-color-bg-secondary-dark',
  success:     'bg-color-bg-success     hover:bg-color-bg-success-dark',
  warning:     'bg-color-bg-warning     hover:bg-color-bg-warning-dark',
  error:       'bg-color-bg-error       hover:bg-color-bg-error-dark',
  information: 'bg-color-bg-information hover:bg-color-bg-information-dark',
};

const softBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary-soft     hover:bg-color-bg-primary',
  secondary:   'bg-color-bg-secondary-soft   hover:bg-color-bg-secondary',
  success:     'bg-color-bg-success-soft     hover:bg-color-bg-success',
  warning:     'bg-color-bg-warning-soft     hover:bg-color-bg-warning',
  error:       'bg-color-bg-error-soft       hover:bg-color-bg-error',
  information: 'bg-color-bg-information-soft hover:bg-color-bg-information',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-3 gap-1 text-desktop-caption-lg',
  md: 'px-4 py-4 gap-2 text-desktop-body-md',
  lg: 'px-6 py-5 gap-2 text-desktop-body-lg',
};

const iconSize: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export function Button({
  variant = 'default',
  color = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const bgStyle = variant === 'default' ? defaultBg[color] : softBg[color];
  const textStyle = variant === 'default'
    ? 'text-color-text-inverse hover:text-color-text-inverse'
    : 'text-color-text-default hover:text-color-text-inverse';

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-bold font-serif rounded-md
        transition-colors duration-150 cursor-pointer
        disabled:bg-color-bg-subtle disabled:text-color-text-subtle disabled:cursor-not-allowed
        ${bgStyle} ${textStyle} ${sizeStyles[size]} ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {leftIcon && <span className={iconSize[size]}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={iconSize[size]}>{rightIcon}</span>}
    </button>
  );
}
