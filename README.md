# ARPL Portfolio

A minimalistic portfolio showcasing software engineering work, hackathon victories, and educational content.

## Design Philosophy

**Minimal. Monochrome. Content-First.**

- Pure black and white, monospace (IBM Plex Mono)
- Patterns instead of colours
- Small geek touches: text scramble, live clock, optional synthesized UI sounds
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
├── lib/                # UI sound engine
├── App.tsx             # Main app with routing
└── main.tsx           # Entry point

```

## Tech Stack

- **React** with TypeScript
- **React Router** for navigation
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

- **Home** (`/`) - Intro, work at a glance, writing, community
- **Blog** (`/blog`) - Article listing with filtering
- **Blog Post** (`/blog/:id`) - Individual article view

## Design

See `STYLEGUIDE.md`. Tokens live as CSS variables in `src/index.css`; components use the Tailwind names `bg`, `fg`, `muted`, `faint`, `line`.

## Development

### Adding New Content

1. **Blog Posts**: Add a markdown file in `src/data/posts/` and register it in `src/data/posts.ts`
2. **Projects / Hackathons / Content**: Edit `src/data/portfolio.ts`

## Deployment

The site is configured for GitHub Pages:

```bash
npm run deploy
```

## License

MIT

---

**Pawel Lach** • [GitHub](https://github.com/LachPawel) • [LinkedIn](https://www.linkedin.com/in/pawelach/) • pawel@arpl.dev
 