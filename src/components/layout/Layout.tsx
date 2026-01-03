import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? 'text-white' : 'bg-white text-black'
      }`}
      style={isDark ? { backgroundColor: '#040404' } : {}}
    >
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
