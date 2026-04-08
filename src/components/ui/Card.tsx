import React from 'react';

type Variant = 'primary' | 'secondary';

interface CardProps {
  variant?: Variant;
  heading?: string;
  body?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:   'bg-color-bg-default   border-color-border-subtle',
  secondary: 'bg-color-bg-subtle    border-color-border-subtle',
};

export function Card({
  variant = 'primary',
  heading,
  body,
  footer,
  children,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        rounded-md md:rounded-xl border-2 md:border-3 overflow-hidden transition-colors duration-150
        p-3 md:p-14 
        ${variantStyles[variant]} ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {heading && (
        <h3 className="font-serif font-bold text-desktop-heading-md md:text-desktop-heading-lg text-color-text-default mb-2">
          {heading}
        </h3>
      )}
      {body && (
        <p className="font-serif text-desktop-body-md md:text-desktop-body-lg text-color-text-subtle">
          {body}
        </p>
      )}
      {children}
      {footer && (
        <div className="mt-4 md:mt-6">{footer}</div>
      )}
    </div>
  );
}
