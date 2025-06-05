import React from 'react';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 uppercase tracking-wider';
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-gold-500 text-black hover:bg-gold-600 active:bg-gold-700',
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 active:bg-zinc-600',
    outline: 'bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10',
    text: 'bg-transparent text-gold-500 hover:text-gold-400 hover:bg-gold-500/5',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-3 px-5',
    lg: 'text-base py-4 px-8',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;