import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Youtube, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { getBorderColor, getTextColor } from '../../theme';

export const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isOnBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SocialLinks = () => (
    <>
      <a
        href="https://github.com/LachPawel"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-50"
        style={{ color: getTextColor(isDark, 'primary') }}
      >
        <Github size={18} />
      </a>
      <a
        href="https://youtube.com/@arplearn"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-50"
        style={{ color: getTextColor(isDark, 'primary') }}
      >
        <Youtube size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/pawelach/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-50"
        style={{ color: getTextColor(isDark, 'primary') }}
      >
        <Linkedin size={18} />
      </a>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm border-b py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: `1px solid ${getBorderColor(isDark)}`,
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="text-sm font-light tracking-wide">
          Pawel Lach
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {!isOnBlogPage && (
            <Link
              to="/blog"
              className="text-sm font-light transition-opacity hover:opacity-50"
              style={{ color: getTextColor(isDark, 'primary') }}
            >
              Blog
            </Link>
          )}
          
          <SocialLinks />

          <button
            onClick={toggleTheme}
            className="transition-opacity hover:opacity-50"
            style={{ color: getTextColor(isDark, 'primary') }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="transition-opacity hover:opacity-50"
            style={{ color: getTextColor(isDark, 'primary') }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="transition-opacity hover:opacity-50"
            style={{ color: getTextColor(isDark, 'primary') }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-sm border-t"
            style={{
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderTop: `1px solid ${getBorderColor(isDark)}`,
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {!isOnBlogPage && (
                <Link
                  to="/blog"
                  className="block text-center text-sm font-light"
                  style={{ color: getTextColor(isDark, 'primary') }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              )}
              <div className="flex items-center justify-center space-x-6">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
