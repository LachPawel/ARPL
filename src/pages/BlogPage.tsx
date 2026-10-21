import React, { useState } from 'react';
import { Layout } from '../components/layout';
import { FilterGroup, Scramble } from '../components/ui';
import { PostRow } from '../components/sections';
import { blogPosts } from '../data/posts';

export const BlogPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState('all');

  // Extract unique tags
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];

  const filteredPosts = activeTag === 'all'
    ? blogPosts
    : blogPosts.filter((post) => post.tags.includes(activeTag));

  return (
    <Layout>
      <section className="pt-12 sm:pt-20">
        <p className="kicker text-muted">Writing · {blogPosts.length} posts</p>
        <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
          <Scramble text="Blog" onView audible />
        </h1>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">
          Thoughts on software engineering, hackathons, AI, and continuous learning.
        </p>

        <div className="mt-12 border-b border-fg pb-4 mb-8">
          <FilterGroup filters={allTags} activeFilter={activeTag} onFilterChange={setActiveTag} />
        </div>

        <ol>
          {filteredPosts.map((post, i) => (
            <PostRow key={post.id} post={post} index={i} />
          ))}
        </ol>
      </section>
    </Layout>
  );
};
