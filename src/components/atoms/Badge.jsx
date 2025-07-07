import React from 'react';
import { cn } from '@/utils/cn';

const Badge = React.forwardRef(({ 
  className, 
  variant = 'default',
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    outline: 'border-2 border-primary text-primary bg-transparent'
  };
  
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export default Badge;