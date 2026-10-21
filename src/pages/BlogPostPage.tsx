import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout, ScrollProgressBar } from '../components/layout';
import { Scramble } from '../components/ui';
import { blogPosts } from '../data/posts';
import { markdownToHtml } from '../utils/markdown';
import { formatDate } from '../utils/format';
import { sound } from '../lib/sound';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const back = (
    <Link to="/blog" className="kicker text-muted hover:text-fg transition-colors" onClick={sound.click}>
      ← cd ..
    </Link>
  );

  return (
    <Layout>
      <ScrollProgressBar />
      <article className="pt-12 sm:pt-20 max-w-3xl">
        {back}

        <p className="mt-10 kicker text-muted tabular-nums">
          {formatDate(post.date)} · {post.readTime} read · {post.author}
        </p>

        <h1 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          <Scramble text={post.title} onView />
        </h1>

        <p className="mt-6 pb-6 border-b border-fg kicker text-muted">{post.tags.join(' / ')}</p>

        {post.image && (
          <img src={post.image} alt={post.title} className="mt-10 w-full border border-line grayscale" />
        )}

        <div
          className="blog-content mt-4"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        <div className="mt-16 pt-8 border-t border-line">{back}</div>
      </article>
    </Layout>
  );
};
