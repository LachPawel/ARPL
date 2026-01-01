# ARPL Portfolio - Style Guide

This document outlines the design system, coding conventions, and component architecture for the ARPL Portfolio project.

## Table of Contents

1. [Design System](#design-system)
2. [Project Structure](#project-structure)
3. [Component Architecture](#component-architecture)
4. [Coding Conventions](#coding-conventions)
5. [Adding New Content](#adding-new-content)

## Design System

### Colors

All colors are defined in `src/theme/index.ts`:

- **Brand Primary**: `#BADA55` - Signature green used for CTAs, highlights, and accents
- **Dark Mode Backgrounds**: `#1e1e1e` (primary), `#1f1f1f` (secondary)
- **Light Mode Backgrounds**: `#ffffff` (primary), `#f5f5f5` (secondary)
- **Text Colors**: Semantic text colors for both dark and light modes

### Typography

- **Font Family**: System fonts for optimal performance
- **Font Sizes**: Responsive scale from `xs` (12px) to `6xl` (60px)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

Consistent spacing scale: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navigation, Layout, etc.)
│   ├── sections/         # Page sections (Hero, Hackathons, etc.)
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── context/             # React context providers (Theme, etc.)
├── data/                # Data files (portfolio, blog content)
├── pages/               # Page components (HomePage, BlogPage, etc.)
├── theme/               # Design system and theme configuration
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Component Architecture

### Layout Components

**Navigation** (`components/layout/Navigation.tsx`)
- Responsive navigation with mobile menu
- Social links and contact button
- Theme toggle integration
- Sticky behavior on scroll

**Layout** (`components/layout/Layout.tsx`)
- Wraps all pages with navigation and scroll progress
- Applies global theme styles

### UI Components

**Button** (`components/ui/Button.tsx`)
- Variants: `primary`, `secondary`, `outline`
- Supports both button and anchor (link) elements
- Theme-aware styling
- Framer Motion animations

**Card** (`components/ui/Card.tsx`)
- Consistent card styling across sections
- Optional image support
- Hover effects
- Reusable CardContent wrapper

**Section** (`components/ui/Section.tsx`)
- Standardized section wrapper
- Consistent padding and max-width
- Background variants (primary, secondary)
- SectionHeader for consistent titles

**FilterGroup** (`components/ui/FilterButton.tsx`)
- Reusable filter button group
- Active state styling
- Custom label formatting

### Page Sections

Each major section (Hero, Hackathons, Projects, etc.) is a separate component in `components/sections/`:

- **HeroSection**: Introduction and key stats
- **HackathonsSection**: Filterable hackathon victories
- **ProjectsSection**: Filterable project showcase
- **SpeakingSection**: Speaking engagements and community
- **ContentSection**: Articles and video content

## Coding Conventions

### Component Structure

```tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ComponentA, ComponentB } from '../ui';
import { dataSource } from '../../data/source';
import { helperFunction } from '../../theme';

export const MyComponent: React.FC = () => {
  const { isDark } = useTheme();
  
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

### Styling Approach

1. **Use theme utilities**: Import from `src/theme/index.ts`
2. **Inline styles for theme-dependent values**: Use `style={{}}` with theme functions
3. **Tailwind for layout/structure**: Use className for responsive layout
4. **Avoid redundancy**: Extract repeated patterns into components

Example:
```tsx
<div 
  className="px-4 py-2 text-sm"
  style={{ 
    backgroundColor: getBackground(isDark, 'primary'),
    color: getTextColor(isDark, 'secondary')
  }}
>
  Content
</div>
```

### State Management

- **Theme**: Global context (`ThemeContext`)
- **Filters**: Local useState in sections
- **Navigation**: React Router for page routing

## Adding New Content

### Adding a Hackathon

Edit `src/data/portfolio.ts`:

```typescript
export const hackathons: Hackathon[] = [
  // ... existing hackathons
  {
    title: "My New Hackathon Win",
    category: "ai", // or "robotics", "blockchain"
    featured: true, // optional
    achievements: [
      "First Place",
      "Best Use of Technology"
    ],
    description: "Description of the project",
    link: "https://...", // optional
    video: "https://...", // optional
    image: "/images/project.png" // optional
  }
];
```

### Adding a Project

Similar structure in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    title: "My Project",
    description: "Project description",
    type: "mobile", // or "AI/ML", "robotics", "backend", "blockchain"
    featured: true, // optional
    link: "https://...", // optional
    language: "TypeScript",
    github: "https://github.com/...", // optional
    image: "/images/project.png" // optional
  }
];
```

### Adding a Blog Post

Edit `src/data/blog.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  // ... existing posts
  {
    id: 'unique-id',
    title: 'My Blog Post',
    excerpt: 'Short description...',
    content: `Full content in markdown...`,
    date: '2025-01-01',
    author: 'Pawel Lach',
    tags: ['Tag1', 'Tag2'],
    readTime: '5 min',
    image: '/images/post.png' // optional
  }
];
```

### Adding a New Section

1. Create component in `src/components/sections/MySection.tsx`
2. Follow the pattern of existing sections
3. Use UI components from `src/components/ui`
4. Export from `src/components/sections/index.ts`
5. Add to HomePage in `src/pages/HomePage.tsx`

### Creating a New Page

1. Create component in `src/pages/MyPage.tsx`
2. Wrap with `Layout` component
3. Add route in `src/App.tsx`
4. Add navigation link in `Navigation.tsx` if needed

## Best Practices

### Performance

- Use React.memo() for heavy components
- Lazy load images
- Code splitting with React.lazy() for pages
- Minimize bundle size with tree-shaking

### Accessibility

- Use semantic HTML elements
- Include aria-labels for icon buttons
- Ensure keyboard navigation works
- Maintain sufficient color contrast

### Responsive Design

- Mobile-first approach
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Test on multiple screen sizes
- Touch-friendly tap targets (min 44px)

### Code Quality

- Use TypeScript for type safety
- Follow component composition patterns
- Keep components focused and single-purpose
- Extract repeated logic into hooks or utilities
- Document complex logic with comments

## Theme Utilities

Quick reference for commonly used theme functions:

```tsx
import { 
  colors,
  getBackground,
  getTextColor,
  getBorderColor,
  getThemeValue 
} from '../theme';

// Get background color
backgroundColor: getBackground(isDark, 'primary' | 'secondary')

// Get text color
color: getTextColor(isDark, 'primary' | 'secondary' | 'tertiary' | 'muted')

// Get border color
borderColor: getBorderColor(isDark)

// Brand color
color: colors.brand.primary
```

## Animations

Framer Motion animation variants are defined in `src/theme/index.ts`:

- `fadeIn`
- `fadeInUp`
- `fadeInDown`
- `slideInLeft`
- `slideInRight`
- `scaleIn`

Use them consistently across components for visual coherence.

---

For questions or suggestions, please refer to the main README.md or contact the maintainer.
