import React from 'react';
import { cn } from '@/utils/cn';

const Label = React.forwardRef(({ 
  className, 
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        'block text-sm font-medium leading-6 text-gray-900 mb-2',
        className
      )}
      {...props}
    />
  );
});

Label.displayName = 'Label';

export default Label;