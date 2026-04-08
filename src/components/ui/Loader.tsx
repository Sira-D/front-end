import React from 'react';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'inverse' | 'subtle';

interface LoaderProps {
  size?: Size;
  variant?: Variant;
  className?: string;
}

const sizeStyles: Record<Size, string> = {
  sm: 'w-5 h-5  border-2',
  md: 'w-10 h-10 border-[3px]',
  lg: 'w-16 h-16 border-4',
};

const variantStyles: Record<Variant, { indicator: string; track: string }> = {
  primary: { indicator: 'border-color-bg-primary',  track: 'border-color-bg-subtle' },
  inverse: { indicator: 'border-color-bg-primary-dark', track: 'border-white/30' },
  subtle:  { indicator: 'border-grey-400',          track: 'border-color-bg-subtle' },
};

export function Loader({ size = 'md', variant = 'primary', className = '' }: LoaderProps) {
  const { indicator, track } = variantStyles[variant];

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`
        rounded-full animate-spin
        ${sizeStyles[size]}
        ${track}
        border-t-[currentColor]
        ${indicator.replace('border-', 'border-t-')}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={{ borderTopColor: 'currentColor' }}
    >
      {/* Using inline style override to get the spinner effect cleanly */}
    </div>
  );
}

// Convenience: full-page loading overlay
export function LoaderOverlay({ variant = 'primary' }: { variant?: Variant }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-black/20">
      <Loader size="lg" variant={variant} />
    </div>
  );
}
