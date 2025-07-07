import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';

const NavigationLink = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary',
          isActive 
            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
            : 'text-gray-700 hover:text-primary',
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;