import React, { useState } from 'react';
import { Trophy, ExternalLink, Youtube } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionHeader, FilterGroup, Card, CardContent } from '../ui';
import { hackathons } from '../../data/portfolio';
import { colors, getTextColor } from '../../theme';

export const HackathonsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterHackathons = () => {
    if (activeFilter === 'all') return hackathons;
    if (activeFilter === 'featured') return hackathons.filter((h) => h.featured);
    return hackathons.filter((h) => h.category === activeFilter);
  };

  const formatFilterLabel = (filter: string) => {
    if (filter === 'ai') return 'AI/ML';
    return filter.charAt(0).toUpperCase() + filter.slice(1);
  };

  return (
    <Section id="hackathons" isDark={isDark} variant="secondary">
      <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
        <SectionHeader
          icon={<Trophy size={24} className="sm:w-8 sm:h-8" />}
          title="Hackathon Victories"
          description="15+ competition wins including the world's largest hackathon (10,000+ projects)"
          isDark={isDark}
        />

        <FilterGroup
          filters={['all', 'featured', 'ai', 'robotics', 'blockchain']}
          activeFilter={activeFilter}
          isDark={isDark}
          onFilterChange={setActiveFilter}
          formatLabel={formatFilterLabel}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filterHackathons().map((hackathon, index) => (
          <Card key={index} isDark={isDark} image={hackathon.image}>
            <CardContent>
              {hackathon.featured && (
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: colors.brand.primary }}
                >
                  Featured
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold">{hackathon.title}</h3>
                {(hackathon.link || hackathon.video) && (
                  <a
                    href={hackathon.link || hackathon.video || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: getTextColor(isDark, 'secondary') }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? '#ffffff' : '#707070';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = getTextColor(isDark, 'secondary');
                    }}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm mb-4" style={{ color: getTextColor(isDark, 'secondary') }}>
                {hackathon.description}
              </p>

              <div className="space-y-2">
                {hackathon.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span style={{ color: colors.brand.primary }}>•</span>
                    <span style={{ color: getTextColor(isDark, 'secondary') }}>{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs" style={{ color: getTextColor(isDark, 'secondary') }}>
                  {hackathon.category.toUpperCase()}
                </span>
                {hackathon.video && (
                  <a
                    href={hackathon.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs transition-colors"
                    style={{ color: getTextColor(isDark, 'secondary') }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? '#ffffff' : '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = getTextColor(isDark, 'secondary');
                    }}
                  >
                    <Youtube size={14} />
                    Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
