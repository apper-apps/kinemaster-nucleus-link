import React from 'react';
import { cn } from '@/utils/cn';

const Card = React.forwardRef(({ 
  className, 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'card p-6',
        className
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export default Card;