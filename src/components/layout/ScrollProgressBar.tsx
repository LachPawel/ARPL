import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { colors } from '../../theme';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ backgroundColor: colors.brand.primary, scaleX: scrollYProgress }}
    />
  );
};
