import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useTheme } from '../../context/ThemeContext';
import { sound, toggleSound } from '../../lib/sound';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toggleTheme } = useTheme();
  const { pathname, hash } = useLocation();

  // Keyboard shortcuts: T toggles theme, S toggles sound
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key.toLowerCase();
      if (key === 't') {
        sound.swap();
        toggleTheme();
      } else if (key === 's') {
        toggleSound();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleTheme]);

  // Scroll to the anchor (e.g. /#work) or to the top on navigation
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8">{children}</main>
      <Footer />
    </div>
  );
};
