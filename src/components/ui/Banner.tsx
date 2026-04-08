import React from 'react';

type Variant = 'solid' | 'subtle' | 'light-outlined';
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'information';

interface BannerProps {
  variant?: Variant;
  color?: Color;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const solidBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary     text-color-text-inverse',
  secondary:   'bg-color-bg-secondary   text-color-text-inverse',
  success:     'bg-color-bg-success     text-color-text-inverse',
  warning:     'bg-color-bg-warning     text-color-text-inverse',
  error:       'bg-color-bg-error       text-color-text-inverse',
  information: 'bg-color-bg-information text-color-text-inverse',
};

const subtleBg: Record<Color, string> = {
  primary:     'bg-color-bg-primary-soft    text-color-text-default',
  secondary:   'bg-color-bg-secondary-soft  text-color-text-default',
  success:     'bg-color-bg-success-soft    text-color-text-default',
  warning:     'bg-color-bg-warning-soft    text-color-text-default',
  error:       'bg-color-bg-error-soft      text-color-text-default',
  information: 'bg-color-bg-information-soft text-color-text-default',
};

export function Banner({
  variant = 'subtle',
  color = 'primary',
  icon,
  action,
  onClose,
  children,
  className = '',
}: BannerProps) {
  const style = variant === 'solid' ? solidBg[color] : subtleBg[color];

  return (
    <div
      className={`
        flex items-center gap-3 font-serif
        px-3 py-6 md:px-3 md:py-6
        ${style} ${className}
      `.trim().replace(/\s+/g, ' ')}
      role="alert"
    >
      {icon && (
        <span className="flex-shrink-0 w-6 h-6">{icon}</span>
      )}
      <div className="flex-1 text-desktop-body-md">{children}</div>
      {action && <div className="flex-shrink-0">{action}</div>}
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
