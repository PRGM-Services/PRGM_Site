import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-wider text-xs font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-white text-black border-white hover:bg-transparent hover:text-white",
    secondary: "bg-prgm-surface text-white border-prgm-border hover:border-white",
    outline: "bg-transparent text-prgm-muted border-prgm-border hover:text-white hover:border-white",
    ghost: "text-prgm-muted border-transparent hover:text-white hover:bg-prgm-surface",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <span className="w-2 h-2 bg-current animate-pulse mr-2"></span>
          PROCESSING_
        </span>
      ) : children}
    </button>
  );
};