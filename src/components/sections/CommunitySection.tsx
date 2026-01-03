import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section } from '../ui';
import { getTextColor, getBrandColor } from '../../theme';

export const CommunitySection: React.FC = () => {
  const { isDark } = useTheme();

  const items = [
    {
      text: 'Active supporter of Node.js Warsaw & Founder Running Club Warsaw',
      links: [
        { label: 'Node.js Warsaw', url: 'https://www.meetup.com/node-js-warsaw/' },
        { label: 'Running Club', url: 'https://www.meetup.com/founders-running-club-warsaw/' },
        { label: 'Node.js Warsaw Social Coding Edition Organizer', url: 'https://www.meetup.com/node-js-warsaw/events/296993184/' }
      ]
    },
    {
      text: 'Spoke at multiple meetups including: Warsaw.js, Node.js Warsaw, PitchMeBaby, and StartupGrind Warsaw',
      links: [
        { label: 'ZK Talk', url: 'https://www.youtube.com/watch?v=AoG1wzCibJQ' },
        { label: 'When Robots Judge Your Posture', url: 'https://www.youtube.com/watch?v=jF7zOf7sG9o' },
        
      ]
    },
    {
      text: 'PitchMeBaby startup pitch contest winner (December 2024)',
      links: [
        { label: 'PitchMeBaby Instagram Post', url: 'https://www.instagram.com/p/DDo7Eqks6Zz/' },
        { label: 'Winning Pitch Video', url: 'https://www.youtube.com/watch?v=NMk20KeD-ec' }
      ]
    },
    {
      text: 'Open Source Contributor',
      links: [
        { label: 'RiscZero Tutorial', url: 'https://youtu.be/mQQePxfE1sE' },
        { label: 'Contribution to RiscZero Docs', url: 'https://x.com/RiscZero/status/1664270670203854850' }
      ]
    },
  ];

  return (
    <Section isDark={isDark}>
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Community Involvement
          </h2>

          <ul className="space-y-6 text-base sm:text-lg font-light" style={{ color: getTextColor(isDark, 'secondary') }}>
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1">•</span>
                <div className="flex-1">
                  <span>{item.text}</span>
                  {item.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {item.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 transition-opacity hover:opacity-50"
                          style={{ color: getBrandColor(isDark) }}
                        >
                          {link.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};
