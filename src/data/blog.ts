/**
 * Blog Post Types and Sample Data
 */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building AI-Powered Mobile Apps with Swift and Apple Vision',
    excerpt:
      'Learn how to integrate Apple Vision and AI voice coaching into iOS apps. A deep dive into the tech stack behind Spindra and Zero-G.',
    content: `
# Building AI-Powered Mobile Apps with Swift and Apple Vision

In this post, I'll share my experience building AI-powered mobile applications using Swift, Apple Vision, and modern AI APIs.

## The Tech Stack

When building apps like Spindra (tennis training) and Zero-G (fitness gamification), I relied on:

- **Swift** for native iOS development
- **Apple Vision** for real-time pose estimation
- **ElevenLabs API** for AI voice coaching
- **ARKit** for augmented reality experiences

## Real-Time Pose Estimation

Apple Vision provides powerful computer vision capabilities...

## Voice AI Integration

Integrating ElevenLabs' voice AI creates a more immersive experience...

## Challenges and Solutions

Building these apps came with unique challenges...

Stay tuned for more detailed tutorials on each component!
    `,
    date: '2025-01-01',
    author: 'Pawel Lach',
    tags: ['iOS', 'Swift', 'AI', 'Computer Vision'],
    readTime: '8 min',
    image: '/images/spindra.png',
  },
  {
    id: '2',
    title: 'Winning Hackathons: Strategies and Insights from 15+ Victories',
    excerpt:
      'What I learned from winning 15+ hackathons including the world\'s largest hackathon with 10,000+ projects.',
    content: `
# Winning Hackathons: Strategies and Insights

After winning 15+ hackathons, I've learned valuable lessons about what makes projects stand out...

## Key Success Factors

1. **Solve Real Problems** - Focus on genuine pain points
2. **Polish the Demo** - First impressions matter
3. **Tell a Story** - Make judges care about your solution
4. **Technical Excellence** - Use cutting-edge tech appropriately

## My Approach

Here's my typical hackathon strategy...
    `,
    date: '2024-12-28',
    author: 'Pawel Lach',
    tags: ['Hackathons', 'Career', 'Startup'],
    readTime: '10 min',
  },
  {
    id: '3',
    title: 'Zero-Knowledge Proofs in the Browser: Building Shielder.js',
    excerpt:
      'How we built a zero-knowledge proof system that runs entirely in the browser using WASM and Rust.',
    content: `
# Zero-Knowledge Proofs in the Browser

Zero-knowledge proofs (ZKPs) are powerful cryptographic primitives, but they're traditionally compute-intensive...

## The Challenge

Running ZKP generation in the browser seemed impossible until WebAssembly...

## Architecture

Our solution combines Rust for performance-critical ZKP operations with TypeScript for the web interface...
    `,
    date: '2024-12-15',
    author: 'Pawel Lach',
    tags: ['Blockchain', 'ZK Proofs', 'WebAssembly', 'Rust'],
    readTime: '12 min',
  },
  {
    id: '4',
    title: 'From University Lecturer to Senior Engineer: My Journey',
    excerpt:
      'Reflections on transitioning from academia to industry and the lessons learned along the way.',
    content: `
# From University Lecturer to Senior Engineer

My career path has been unconventional...

## Teaching Experience

As a university lecturer, I learned the importance of clear communication...

## Transition to Industry

Moving to industry required adapting my skills...

## Act, Reflect, Persist, Learn

This philosophy has guided my journey...
    `,
    date: '2024-12-01',
    author: 'Pawel Lach',
    tags: ['Career', 'Personal', 'Education'],
    readTime: '7 min',
  },
];
