import React from 'react';

type Size = 'sm' | 'md';
type Status = 'success' | 'error' | 'warning' | 'information' | 'neutral';

interface TagProps {
  size?: Size;
  status?: Status;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const statusStyles: Record<Status, { bg: string; text: string; icon: string }> = {
  success:     { bg: 'bg-color-bg-success-soft',     text: 'text-color-bg-success-dark',      icon: 'text-color-bg-success-dark' },
  error:       { bg: 'bg-color-bg-error-soft',       text: 'text-color-bg-error-dark',        icon: 'text-color-bg-error-dark' },
  warning:     { bg: 'bg-yellow-100',                text: 'text-yellow-600',                  icon: 'text-yellow-600' },
  information: { bg: 'bg-color-bg-information-soft', text: 'text-color-bg-information-dark',  icon: 'text-color-bg-information-dark' },
  neutral:     { bg: 'bg-grey-200',                  text: 'text-grey-700',                    icon: 'text-grey-700' },
};

const sizeStyles: Record<Size, { padding: string; text: string; icon: string; gap: string }> = {
  sm: { padding: 'px-2 py-0.5', text: 'text-desktop-caption-md', icon: 'w-3 h-3', gap: 'gap-1' },
  md: { padding: 'px-3 py-1',   text: 'text-desktop-caption-lg', icon: 'w-3.5 h-3.5', gap: 'gap-1.5' },
};

export function Tag({
  size = 'md',
  status = 'neutral',
  leftIcon,
  children,
  className = '',
}: TagProps) {
  const { bg, text, icon: iconColor } = statusStyles[status];
  const { padding, text: textSize, icon: iconSize, gap } = sizeStyles[size];

  return (
    <span
      className={`
        inline-flex items-center rounded font-serif font-bold
        ${bg} ${text} ${padding} ${textSize} ${gap} ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {leftIcon && <span className={`${iconSize} ${iconColor}`}>{leftIcon}</span>}
      {children}
    </span>
  );
}
