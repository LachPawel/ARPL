import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout';
import { Section } from '../components/ui';
import { blogPosts } from '../data/blog';
import { getTextColor, colors } from '../theme';

export const BlogPostPage: React.FC = () => {
  const { isDark } = useTheme();
  const { id } = useParams<{ id: string }>();
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <Section isDark={isDark}>
        <div className="pt-16 sm:pt-20 max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mb-8 text-sm transition-colors"
            style={{ color: colors.brand.primary }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.brand.primaryHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.brand.primary;
            }}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {post.image && (
            <div className="w-full h-64 sm:h-96 overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          <div
            className="flex flex-wrap items-center gap-4 mb-6 text-sm"
            style={{ color: getTextColor(isDark, 'secondary') }}
          >
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm rounded flex items-center gap-1"
                style={{
                  backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5',
                  color: colors.brand.primary,
                  border: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
                }}
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose prose-lg max-w-none"
            style={{
              color: isDark ? '#e0e0e0' : '#333',
            }}
          >
            <div
              style={{ color: getTextColor(isDark, 'tertiary') }}
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: isDark ? '#333' : '#e0e0e0' }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: colors.brand.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.brand.primaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.brand.primary;
              }}
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
