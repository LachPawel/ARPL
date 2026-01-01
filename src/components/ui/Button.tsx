import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { colors, transitions } from '../../theme';

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
  const baseStyles = "px-4 sm:px-6 py-3 text-center font-medium transition-colors text-sm sm:text-base";
  
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.brand.primary,
          color: isDark ? colors.background.dark : '#ffffff',
        };
      case 'secondary':
        return {
          backgroundColor: isDark ? colors.background.darkSecondary : colors.background.lightSecondary,
          borderColor: colors.brand.primary,
          color: colors.brand.primary,
          border: `1px solid ${colors.brand.primary}`,
        };
      case 'outline':
        return {
          border: `1px solid ${colors.brand.primary}`,
          color: colors.brand.primary,
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={(e: any) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = colors.brand.primary;
          e.currentTarget.style.color = isDark ? colors.background.dark : '#ffffff';
        }
      }}
      onMouseLeave={(e: any) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = colors.brand.primary;
        }
      }}
    >
      {children}
    </Component>
  );
};
