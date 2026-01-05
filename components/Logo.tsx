import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="10" />
      <rect x="52" y="52" width="14" height="14" fill="currentColor" />
      <path d="M66 66L84 84" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
    </svg>
  );
};