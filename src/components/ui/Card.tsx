import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getBackground, getBorderColor } from '../../theme';

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
      className={`border transition-all overflow-hidden ${hoverEffect && onClick ? 'hover:border-opacity-70 cursor-pointer' : ''} ${className}`}
      style={{
        backgroundColor: getBackground(isDark, 'primary'),
        borderColor: getBorderColor(isDark),
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.borderColor = isDark ? '#555' : '#999';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = getBorderColor(isDark);
      }}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt="Card image"
            className="w-full h-full object-cover"
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
