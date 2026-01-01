import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { ScrollProgressBar } from './ScrollProgressBar';
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
      style={isDark ? { backgroundColor: '#1e1e1e' } : {}}
    >
      <ScrollProgressBar />
      <Navigation />
      {children}
    </div>
  );
};
