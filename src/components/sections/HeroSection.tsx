import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { getTextColor, getBrandColor } from '../../theme';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const advantages = [
    'Software Engineer | Educator | Content Creator',
    'Won world\'s largest hackathon (10,000+ projects)',
    'Former university lecturer',
  ];

  const links = [
    { to: '#projects', label: 'Projects' },
    { to: '/blog', label: 'Writing' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 py-16 sm:py-20">
      <div></div>
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
            Pawel Lach
          </h1>

          <p
            className="text-xl sm:text-2xl font-light italic"
            style={{ color: getTextColor(isDark, 'secondary') }}
          >
            "Act, Reflect, Persist, Learn"
          </p>

          <div className="space-y-3">
            {advantages.map((advantage, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="text-base sm:text-lg font-light"
                style={{ color: getTextColor(isDark, 'secondary') }}
              >
                {advantage}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-8 text-base sm:text-lg"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="font-light transition-opacity hover:opacity-50"
              style={{ color: getBrandColor(isDark) }}
              onClick={(e) => {
                if (link.to.startsWith('#')) {
                  e.preventDefault();
                  const element = document.querySelector(link.to);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      </div>
      
      <motion.button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="cursor-pointer transition-opacity hover:opacity-50"
        style={{ color: getTextColor(isDark, 'secondary') }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
};
