import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../ui';
import { blogPosts } from '../../data/posts';
import { BlogPost } from '../../data/blog';
import { formatDate } from '../../utils/format';
import { sound } from '../../lib/sound';

export const PostRow: React.FC<{ post: BlogPost; index?: number }> = ({ post, index = 0 }) => (
  <li
    className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-2 py-8 border-b border-line first:pt-2 rise"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="flex sm:block items-baseline gap-3 tabular-nums">
      <p className="font-semibold">{formatDate(post.date)}</p>
      <p className="text-sm text-muted">{post.readTime}</p>
    </div>
    <div className="min-w-0">
      <p className="kicker text-muted">{post.tags.join(' / ')}</p>
      <h3 className="mt-3 text-xl sm:text-2xl font-bold">
        <Link to={`/blog/${post.id}`} className="hover:underline underline-offset-4" onMouseEnter={sound.tick} onClick={sound.click}>
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
    </div>
  </li>
);

export const WritingSection: React.FC = () => (
  <Section
    id="writing"
    title="Writing"
    aside={
      <Link to="/blog" className="hover:text-fg transition-colors" onClick={sound.click}>
        All posts →
      </Link>
    }
  >
    <ol>
      {blogPosts.slice(0, 3).map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </ol>
  </Section>
);
