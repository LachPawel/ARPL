import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout';
import { Section, SectionHeader, Card, CardContent, FilterGroup } from '../components/ui';
import { blogPosts } from '../data/posts';
import { getTextColor, getBrandColor, getBorderColor } from '../theme';

export const BlogPage: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTag, setActiveTag] = useState('all');

  // Extract unique tags
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];

  const filteredPosts = activeTag === 'all' 
    ? blogPosts 
    : blogPosts.filter((post) => post.tags.includes(activeTag));

  return (
    <Layout>
      <Section isDark={isDark}>
        <div className="pt-16 sm:pt-20">
          <SectionHeader
            title="Blog"
            description="Thoughts on software engineering, hackathons, AI, and continuous learning"
            isDark={isDark}
          />

          <div className="mb-8">
            <FilterGroup
              filters={allTags}
              activeFilter={activeTag}
              isDark={isDark}
              onFilterChange={setActiveTag}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} isDark={isDark} image={post.image}>
                <CardContent>
                  <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: getTextColor(isDark, 'secondary') }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 hover:underline">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mb-4 text-sm sm:text-base" style={{ color: getTextColor(isDark, 'secondary') }}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-light border"
                        style={{
                          color: getTextColor(isDark, 'secondary'),
                          borderColor: getBorderColor(isDark),
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-light transition-opacity hover:opacity-70"
                    style={{ color: getBrandColor(isDark) }}
                  >
                    Read More
                    <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
