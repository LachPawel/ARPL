import React from 'react';
import { Mic, Users, Award, Code, Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionHeader, Card, CardContent } from '../ui';
import { speakingEngagements } from '../../data/portfolio';
import { getTextColor, getBackground } from '../../theme';

export const SpeakingSection: React.FC = () => {
  const { isDark } = useTheme();

  const getIcon = (type: string) => {
    const iconSize = 14;
    const iconColor = getTextColor(isDark, 'secondary');
    
    switch (type) {
      case 'talk':
        return <Mic size={iconSize} style={{ color: iconColor }} />;
      case 'organizer':
        return <Users size={iconSize} style={{ color: iconColor }} />;
      case 'pitch':
        return <Award size={iconSize} style={{ color: iconColor }} />;
      case 'tutorial':
        return <Code size={iconSize} style={{ color: iconColor }} />;
      case 'contribution':
        return <Github size={iconSize} style={{ color: iconColor }} />;
      default:
        return null;
    }
  };

  return (
    <Section id="speaking" isDark={isDark}>
      <SectionHeader
        icon={<Mic size={24} className="sm:w-8 sm:h-8" />}
        title="Speaking & Community"
        description="Active speaker, organizer, and supporter of the tech community"
        isDark={isDark}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {speakingEngagements.map((engagement, index) => (
          <Card key={index} isDark={isDark}>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                >
                  {engagement.type}
                </span>
                {getIcon(engagement.type)}
              </div>

              <h4 className="font-medium mb-2 text-sm sm:text-base">{engagement.title}</h4>
              <p
                className="text-xs sm:text-sm mb-2"
                style={{ color: getTextColor(isDark, 'secondary') }}
              >
                {engagement.event}
              </p>

              {engagement.note && (
                <p
                  className="text-xs mb-3"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                >
                  {engagement.note}
                </p>
              )}

              {engagement.link && (
                <a
                  href={engagement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm flex items-center gap-1 transition-colors"
                  style={{ color: getTextColor(isDark, 'secondary') }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? '#ffffff' : '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = getTextColor(isDark, 'secondary');
                  }}
                >
                  View
                  <ExternalLink size={12} />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-4 sm:p-6" style={{ backgroundColor: getBackground(isDark, 'secondary') }}>
        <h3 className="font-semibold mb-4 text-sm sm:text-base">Community Involvement</h3>
        <ul className="space-y-2 text-xs sm:text-sm" style={{ color: getTextColor(isDark, 'secondary') }}>
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>Active supporter of Node.js Warsaw & Founder Running Club Warsaw</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>
              Regular speaker at Warsaw.js, Node.js Warsaw, PitchMeBaby, and StartupGrind Warsaw
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>PitchMeBaby startup pitch contest winner (December 2024)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5">•</span>
            <span>Former University Lecturer</span>
          </li>
        </ul>
      </div>
    </Section>
  );
};
