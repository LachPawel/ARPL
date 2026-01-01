import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionHeader, Card, CardContent } from '../ui';
import { content } from '../../data/portfolio';
import { getTextColor } from '../../theme';

export const ContentSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Section id="content" isDark={isDark}>
      <SectionHeader
        icon={<FileText size={24} className="sm:w-8 sm:h-8" />}
        title="Content & Education"
        description="Technical articles, video tutorials, and educational content"
        isDark={isDark}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {content.map((item, index) => (
          <Card key={index} isDark={isDark} image={item.image}>
            <CardContent>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                <a
                  href={item.link}
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
              </div>

              <p className="text-xs sm:text-sm mb-2" style={{ color: getTextColor(isDark, 'secondary') }}>
                {item.platform}
              </p>

              {(item.views || item.reads) && (
                <p className="text-xs" style={{ color: getTextColor(isDark, 'secondary') }}>
                  {item.views || item.reads}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
