import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Youtube, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { colors, getBackground, getBorderColor } from '../../theme';

export const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
      >
        <Github size={20} />
      </a>
      <a
        href="https://youtube.com/@arplearn"
        target="_blank"
        rel="noopener noreferrer"
        className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
      >
        <Youtube size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/pawelach/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
      >
        <Linkedin size={20} />
      </a>
    </>
  );

  const ContactButton = () => (
    <a
      href="mailto:pawel@arpl.dev"
      className="px-3 lg:px-4 py-2 text-sm font-medium transition-all"
      style={{
        border: `1px solid ${colors.brand.primary}`,
        color: colors.brand.primary,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors.brand.primary;
        e.currentTarget.style.color = isDark ? colors.background.dark : '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = colors.brand.primary;
      }}
    >
      Contact
    </a>
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
              backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderBottom: `1px solid ${getBorderColor(isDark)}`,
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold">ARPL</span>
            <span
              className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} hidden sm:inline`}
            >
              / Pawel Lach
            </span>
          </Link>
          <Link
            to="/blog"
            className={`text-sm ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
          >
            Blog
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <SocialLinks />

          <button
            onClick={toggleTheme}
            className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <ContactButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
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
              backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderTop: `1px solid ${getBorderColor(isDark)}`,
            }}
          >
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center justify-center space-x-6">
                <SocialLinks />
              </div>
              <div className="text-center">
                <ContactButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
