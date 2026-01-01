import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Briefcase, Trophy } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui';
import { techStack } from '../../data/portfolio';
import { colors, getTextColor, getBackground } from '../../theme';

export const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Pawel Lach
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-lg sm:text-xl`}
                style={{ color: getTextColor(isDark, 'secondary') }}
              >
                Software Engineer | Educator | Content Creator
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="leading-relaxed text-sm sm:text-base"
              style={{ color: getTextColor(isDark, 'secondary') }}
            >
              Software Engineer, Educator, Content Creator, and former University Lecturer. Coding
              and programming enthusiast with a primary focus on Web Development and technologies
              that hold significant potential for positive impact. 15+ hackathon victories including
              the world's largest hackathon (hackathon.dev).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm`}
              style={{ color: getTextColor(isDark, 'secondary') }}
            >
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Warsaw, Poland
              </span>
              <span className="flex items-center gap-2">
                <Briefcase size={14} />
                Senior Software Engineer @ ING
              </span>
              <span className="flex items-center gap-2">
                <Trophy size={14} />
                15+ Hackathon Winner
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button variant="primary" isDark={isDark} href="#hackathons">
                View Achievements
              </Button>
              <Button
                variant="secondary"
                isDark={isDark}
                href="https://github.com/LachPawel"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-12 mt-8 lg:mt-0"
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                >
                  Philosophy
                </h3>
                <blockquote
                  className={`text-base sm:text-lg italic border-l-4 pl-4 mb-4`}
                  style={{
                    borderColor: colors.brand.primary,
                    color: getTextColor(isDark, 'tertiary'),
                  }}
                >
                  "Act, Reflect, Persist, Learn"
                </blockquote>
                <p className="text-sm sm:text-base" style={{ color: getTextColor(isDark, 'secondary') }}>
                  Education is the foundational step to solving nearly any conceivable problem.
                  Learning is my greatest passion, as it stands as one of the most gratifying
                  aspects of life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                >
                  Tech Stack
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {techStack.frontend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: getBackground(isDark, 'secondary'),
                          color: colors.brand.primary,
                          border: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.backend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded"
                        style={{
                          backgroundColor: getBackground(isDark, 'secondary'),
                          color: colors.brand.primary,
                          border: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                >
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex flex-col">
                    <span style={{ color: getTextColor(isDark, 'secondary') }}>
                      Hackathon Victories
                    </span>
                    <span className="font-semibold">15+</span>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ color: getTextColor(isDark, 'secondary') }}>Content Views</span>
                    <span className="font-semibold">100k+</span>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ color: getTextColor(isDark, 'secondary') }}>
                      GitHub Contributions
                    </span>
                    <span className="font-semibold">1000+</span>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ color: getTextColor(isDark, 'secondary') }}>
                      Community Impact
                    </span>
                    <span className="font-semibold">1000+ devs</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 sm:mt-16 mb-8 sm:mb-12 text-xs sm:text-sm text-center px-4"
          style={{ color: getTextColor(isDark, 'secondary') }}
        >
          Beyond professional pursuits: Amateur guitarist • Motorcyclist • Rally enthusiast
        </motion.p>
      </div>

      <motion.button
        onClick={() => document.getElementById('hackathons')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`mx-auto mb-4 sm:mb-24 cursor-pointer transition-colors`}
        style={{ color: getTextColor(isDark, 'secondary') }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = isDark ? '#ffffff' : '#707070';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = getTextColor(isDark, 'secondary');
        }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={20} className="sm:hidden" />
        <ChevronDown size={24} className="hidden sm:block" />
      </motion.button>
    </section>
  );
};
