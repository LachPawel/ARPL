import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Layout } from '../components/layout';
import { Section } from '../components/ui';
import { blogPosts } from '../data/posts';
import { getTextColor, getBrandColor, getBorderColor } from '../theme';
import { markdownToHtml } from '../utils/markdown';

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
            className="inline-flex items-center gap-2 mb-8 text-sm font-light transition-opacity hover:opacity-70"
            style={{ color: getBrandColor(isDark) }}
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
                className="px-3 py-1 text-sm font-light border"
                style={{
                  color: getTextColor(isDark, 'secondary'),
                  borderColor: getBorderColor(isDark),
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose prose-lg max-w-none blog-content"
            style={{ color: getTextColor(isDark, 'tertiary') }}
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          <div className="mt-12 pt-8 border-t" style={{ borderColor: getBorderColor(isDark) }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-light transition-opacity hover:opacity-70"
              style={{ color: getBrandColor(isDark) }}
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
