import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Section, SectionHeader, FilterGroup, Card, CardContent } from '../ui';
import { projects } from '../../data/portfolio';
import { colors, getTextColor } from '../../theme';

export const ProjectsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterProjects = () => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.type === activeFilter);
  };

  return (
    <Section id="projects" isDark={isDark} variant="secondary">
      <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
        <SectionHeader
          icon={<Code size={24} className="sm:w-8 sm:h-8" />}
          title="Projects"
          description="From Web Apps, Mobile, Robotics, AI/ML to Computer vision"
          isDark={isDark}
        />

        <FilterGroup
          filters={['all', 'mobile', 'AI/ML', 'robotics', 'backend', 'blockchain']}
          activeFilter={activeFilter}
          isDark={isDark}
          onFilterChange={setActiveFilter}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filterProjects().map((project, index) => (
          <Card key={index} isDark={isDark} image={project.image}>
            <CardContent>
              {project.featured && (
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: colors.brand.primary }}
                >
                  Featured
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                {(project.link || project.github) && (
                  <a
                    href={project.link || project.github || ''}
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

              <p
                className="text-xs sm:text-sm mb-3"
                style={{ color: getTextColor(isDark, 'secondary') }}
              >
                {project.description}
              </p>

              <div className="flex items-center gap-3 text-xs">
                <span style={{ color: getTextColor(isDark, 'secondary') }}>{project.language}</span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors"
                    style={{ color: getTextColor(isDark, 'secondary') }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? '#ffffff' : '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = getTextColor(isDark, 'secondary');
                    }}
                  >
                    <Github size={14} />
                    Code
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
