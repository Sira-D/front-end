import React from 'react';

type Variant = 'default' | 'soft';
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'information';
type Size = 'sm' | 'md' | 'lg';
type Radius = 'md' | 'full';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  radius?: Radius;
  icon: React.ReactNode;
  'aria-label': string;
}

const defaultBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary     hover:bg-color-bg-primary-dark     active:bg-color-bg-primary-soft',
  secondary:   'bg-color-bg-secondary   hover:bg-color-bg-secondary-dark   active:bg-color-bg-secondary-soft',
  success:     'bg-color-bg-success     hover:bg-color-bg-success-dark     active:bg-color-bg-success-soft',
  warning:     'bg-color-bg-warning     hover:bg-color-bg-warning-dark     active:bg-color-bg-warning-soft',
  error:       'bg-color-bg-error       hover:bg-color-bg-error-dark       active:bg-color-bg-error-soft',
  information: 'bg-color-bg-information hover:bg-color-bg-information-dark active:bg-color-bg-information-soft',
};

const softBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary-soft     hover:bg-color-bg-primary',
  secondary:   'bg-color-bg-secondary-soft   hover:bg-color-bg-secondary',
  success:     'bg-color-bg-success-soft     hover:bg-color-bg-success',
  warning:     'bg-color-bg-warning-soft     hover:bg-color-bg-warning',
  error:       'bg-color-bg-error-soft       hover:bg-color-bg-error',
  information: 'bg-color-bg-information-soft hover:bg-color-bg-information',
};

const sizeStyles: Record<Size, { button: string; icon: string; padding: string }> = {
  sm: { button: 'w-8 h-8',   icon: 'w-4 h-4', padding: 'p-2' },
  md: { button: 'w-10 h-10', icon: 'w-5 h-5', padding: 'p-3' },
  lg: { button: 'w-12 h-12', icon: 'w-6 h-6', padding: 'p-3' },
};

export function IconButton({
  variant = 'default',
  color = 'primary',
  size = 'md',
  radius = 'md',
  icon,
  disabled,
  className = '',
  ...props
}: IconButtonProps) {
  const bgStyle = variant === 'default' ? defaultBg[color] : softBg[color];
  const textStyle = variant === 'default'
    ? 'text-color-text-inverse active:text-color-text-default'
    : 'text-color-text-default hover:text-color-text-inverse';
  const radiusStyle = radius === 'full' ? 'rounded-full' : 'rounded-md';
  const { button, icon: iconCls, padding } = sizeStyles[size];

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center justify-center transition-colors duration-150 cursor-pointer
        border border-transparent
        disabled:bg-color-bg-subtle disabled:text-color-text-subtle disabled:cursor-not-allowed
        ${bgStyle} ${textStyle} ${radiusStyle} ${button} ${padding} ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <span className={iconCls}>{icon}</span>
    </button>
  );
}
