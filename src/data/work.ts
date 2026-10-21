/**
 * Hackathons, projects and content merged into one ordered list for the home page.
 */

import { hackathons, projects, content } from './portfolio';
import type { Pattern } from '../components/ui';

export type WorkKind = 'hackathon' | 'project' | 'content';

export interface WorkItem {
  title: string;
  description: string;
  kind: WorkKind;
  tag: string;
  link?: string | null;
  achievements?: string[];
  language?: string;
  image?: string;
}

export const kindPattern: Record<WorkKind, Pattern> = {
  hackathon: 'solid',
  project: 'dots',
  content: 'lines',
};

// Featured items in specific order, everything else follows
const featuredOrder = [
  'Kobolt', 'Reins', 'Pullz', 'Spindra', 'Zero-G', 'Rhetor', 'Blacoustic', 'Straighty',
  'ARP Learn', 'Z innej perspektywy - From a Different Perspective', 'DEPTH',
  'Syncra.xyz', 'LazyDog AI Robot', 'Arduino RC Car',
];

const merged: WorkItem[] = [
  ...hackathons.map((h) => ({
    title: h.title,
    description: h.description,
    kind: 'hackathon' as const,
    tag: h.category === 'ai' ? 'AI/ML' : h.category,
    link: h.link || h.video,
    achievements: h.achievements,
    image: h.image,
  })),
  ...projects.map((p) => ({
    title: p.title,
    description: p.description,
    kind: 'project' as const,
    tag: p.type,
    link: p.link || p.github,
    language: p.language,
    image: p.image,
  })),
  ...content.map((c) => ({
    title: c.title,
    description: c.views || c.reads || '',
    kind: 'content' as const,
    tag: c.platform,
    link: c.link,
    image: c.image,
  })),
];

// Remove duplicates based on title, first occurrence wins
const seen = new Set<string>();
const unique = merged.filter((item) => !seen.has(item.title) && seen.add(item.title));

const rank = (item: WorkItem) => {
  const i = featuredOrder.indexOf(item.title);
  return i === -1 ? featuredOrder.length : i;
};

export const workItems: WorkItem[] = [...unique].sort((a, b) => rank(a) - rank(b));

export const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};
