# ARPL Portfolio

A minimalistic portfolio showcasing software engineering work, hackathon victories, and educational content.

## Design Philosophy

**Minimal. Monochrome. Content-First.**

- Pure black and white color scheme
- Light typography with generous whitespace
- No accent colors or heavy animations
- Focus on content and readability
- Responsive across all devices

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation and layout components
│   ├── sections/        # Page sections (Hero, Hackathons, etc.)
│   └── ui/             # Reusable UI components (Button, Card, etc.)
├── context/            # Theme context for dark/light mode
├── data/               # Portfolio and blog data
├── pages/              # Route pages (Home, Blog, BlogPost)
├── theme/              # Design tokens and style guide
├── App.tsx             # Main app with routing
└── main.tsx           # Entry point

```

## Tech Stack

- **React** with TypeScript
- **React Router** for navigation
- **Framer Motion** for subtle animations
- **Tailwind CSS** for styling
- **Vite** for build tooling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

- **Home** (`/`) - Minimal landing with links to sections
- **Blog** (`/blog`) - Article listing with filtering
- **Blog Post** (`/blog/:id`) - Individual article view

## Sections

All sections are accessible from the home page:

- **Hackathons** - 15+ competition victories
- **Speaking** - Community involvement and talks
- **Projects** - Open source and personal projects
- **Content** - Videos, articles, and tutorials

## Design Tokens

All design tokens are centralized in `src/theme/index.ts`:

- **Colors**: Pure black/white with subtle grays
- **Typography**: Light font weights, system fonts
- **Spacing**: Consistent scale from xs to 5xl
- **Transitions**: Subtle opacity changes

## Theme

Toggle between dark and light modes:
- **Dark**: Black background, white text
- **Light**: White background, black text

Both modes maintain perfect contrast and readability.

## Development

### Adding New Content

1. **Blog Posts**: Edit `src/data/blog.ts`
2. **Projects**: Edit `src/data/portfolio.ts`
3. **Hackathons**: Edit `src/data/portfolio.ts`

### Creating Components

All components use the centralized theme for consistency:

```tsx
import { getTextColor, getBrandColor } from '../theme';

const MyComponent = () => {
  const { isDark } = useTheme();
  
  return (
    <div style={{ color: getTextColor(isDark, 'primary') }}>
      Content
    </div>
  );
};
```

## Deployment

The site is configured for GitHub Pages:

```bash
npm run deploy
```

## License

MIT

---

**Pawel Lach** • [GitHub](https://github.com/LachPawel) • [LinkedIn](https://www.linkedin.com/in/pawelach/) • pawel@arpl.dev
 