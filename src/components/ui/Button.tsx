import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { getBrandColor, getBorderColor } from '../../theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isDark?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isDark = true,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 text-sm font-light transition-opacity hover:opacity-70";
  
  const getStyles = () => {
    const brandColor = getBrandColor(isDark);
    const borderColor = getBorderColor(isDark);
    
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: brandColor,
          color: isDark ? '#000000' : '#ffffff',
        };
      case 'secondary':
      case 'outline':
        return {
          border: `1px solid ${borderColor}`,
          color: brandColor,
          backgroundColor: 'transparent',
        };
      default:
        return {};
    }
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target, rel } : {};

  return (
    <Component
      {...linkProps}
      {...(props as any)}
      className={`${baseStyles} ${className}`}
      style={getStyles()}
    >
      {children}
    </Component>
  );
};
