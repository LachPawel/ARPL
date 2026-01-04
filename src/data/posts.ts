import { BlogPost } from './blog';

// Import markdown file as raw text
import buildingWillBeDifferentMd from './posts/building-will-be-different.md?raw';

function parseMarkdownPost(markdown: string, id: string): BlogPost {
  const lines = markdown.split('\n');
  
  // Extract title (first H1)
  const titleMatch = lines.find(line => line.startsWith('# '));
  const title = titleMatch ? titleMatch.replace('# ', '').trim() : 'Untitled';
  
  // Extract first paragraph as excerpt (skip title and empty lines)
  let excerpt = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line && !line.startsWith('#') && line.length > 20) {
      excerpt = line.substring(0, 200) + (line.length > 200 ? '...' : '');
      break;
    }
  }
  
  // Calculate read time (approximate: 200 words per minute)
  const wordCount = markdown.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  
  // Extract tags from H2 headings
  const tags: string[] = [];
  lines.forEach(line => {
    if (line.startsWith('## Lesson')) {
      tags.push('Lessons');
    }
  });
  
  // Default tags if none found
  if (tags.length === 0) {
    tags.push('Thoughts', 'Building', 'Startups');
  }
  
  return {
    id,
    title,
    excerpt,
    content: markdown,
    date: '2026-01-03',
    author: 'Pawel Lach',
    tags: Array.from(new Set(tags.concat(['Thoughts', 'Startups']))),
    readTime: `${readTime} min`,
  };
}

export const blogPosts: BlogPost[] = [
  parseMarkdownPost(buildingWillBeDifferentMd, 'building-will-be-different'),
];
