import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getBackground } from '../../theme';

interface SectionProps {
  id?: string;
  children: ReactNode;
  isDark?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  isDark = true,
  variant = 'primary',
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 ${className}`}
      style={{
        backgroundColor: variant === 'secondary' ? getBackground(isDark, 'secondary') : undefined,
      }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  isDark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  description,
  isDark = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 sm:mb-12 text-center sm:text-left ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-3">
        {icon && <span className={`${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{icon}</span>}
        {title}
      </h2>
      {description && (
        <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
