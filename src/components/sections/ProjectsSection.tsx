import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Section, Card, CardContent, FilterGroup } from '../ui';
import { projects, hackathons, content } from '../../data/portfolio';
import { getTextColor, getBrandColor } from '../../theme';

export const ProjectsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Combine all items
  const allItems = [
    ...hackathons.map(h => ({
      title: h.title,
      description: h.description,
      type: 'hackathon' as const,
      tags: [h.category],
      link: h.link || h.video,
      featured: h.featured,
      achievements: h.achievements,
      image: h.image,
    })),
    ...projects.map(p => ({
      title: p.title,
      description: p.description,
      type: 'project' as const,
      tags: [p.type],
      link: p.link || p.github,
      featured: p.featured,
      language: p.language,
      image: p.image,
    })),
    ...content.map(c => ({
      title: c.title,
      description: `${c.platform} - ${c.views || c.reads || ''}`,
      type: 'content' as const,
      tags: [c.type],
      link: c.link,
      featured: false,
      image: c.image,
    })),
  ];

  const filters = ['all', 'hackathon', 'project', 'content'];

  const filteredItems = activeFilter === 'all' 
    ? allItems 
    : allItems.filter(item => item.type === activeFilter);

  return (
    <Section id="projects" isDark={isDark}>
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto w-full"
        >
          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">Projects</h2>
              <p
                className="text-base sm:text-lg font-light"
                style={{ color: getTextColor(isDark, 'secondary') }}
              >
                Hackathons, side projects, and educational content
              </p>
            </div>

            <FilterGroup
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              isDark={isDark}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card 
                  isDark={isDark} 
                  image={item.image}
                  onClick={item.link ? () => window.open(item.link, '_blank') : undefined}
                  className={item.link ? 'cursor-pointer' : ''}
                >
                  <CardContent>
                    {item.featured && (
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: getBrandColor(isDark) }}
                      >
                        Featured
                      </div>
                    )}

                    <h3 className="text-base sm:text-lg font-semibold mb-3">{item.title}</h3>

                    <p
                      className="text-xs sm:text-sm mb-4"
                      style={{ color: getTextColor(isDark, 'secondary') }}
                    >
                      {item.description}
                    </p>

                    {'achievements' in item && item.achievements && (
                      <div className="space-y-2 mb-4">
                        {item.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="text-xs flex items-start gap-2"
                            style={{ color: getTextColor(isDark, 'secondary') }}
                          >
                            <span>•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="px-2 py-1 border font-light"
                        style={{
                          color: getTextColor(isDark, 'secondary'),
                          borderColor: getTextColor(isDark, 'secondary'),
                        }}
                      >
                        {item.type}
                      </span>
                      {'language' in item && item.language && (
                        <span style={{ color: getTextColor(isDark, 'tertiary') }}>
                          {item.language}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
