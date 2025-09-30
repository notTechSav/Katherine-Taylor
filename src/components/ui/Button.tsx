import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full border border-transparent text-sm font-light uppercase tracking-uppercase transition-all duration-luxury-fast ease-luxury-in focus:outline-none focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-40';

  const variantClasses = {
    primary: 'bg-luxury-black text-luxury-white hover:opacity-80',
    secondary: 'bg-secondary text-gray-900 border border-gray-200 hover:border-gray-300 hover:opacity-70',
    outline: 'border border-gray-300 text-gray-900 hover:border-gray-400 hover:opacity-60',
  } as const;

  const sizeClasses = {
    sm: 'px-5 py-3',
    md: 'px-8 py-4',
    lg: 'px-12 py-5',
  } as const;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
