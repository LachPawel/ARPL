import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, getBackground, getBorderColor } from '../../theme';

interface CardProps {
  children: ReactNode;
  isDark?: boolean;
  className?: string;
  hoverEffect?: boolean;
  image?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  isDark = true,
  className = '',
  hoverEffect = true,
  image,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`border transition-colors overflow-hidden ${className}`}
      style={{
        backgroundColor: getBackground(isDark, 'primary'),
        borderColor: getBorderColor(isDark),
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.borderColor = colors.brand.primary;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.borderColor = getBorderColor(isDark);
        }
      }}
      onClick={onClick}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt="Card image"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      {children}
    </motion.div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-4 sm:p-6 ${className}`}>{children}</div>;
};
