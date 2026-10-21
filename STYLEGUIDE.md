# ARPL Design System

## Philosophy

**Minimalism through reduction. Clarity through contrast.**

A monospace, terminal-flavoured, content-first layout. Black and white only, with patterns instead of colours.

## Quick Reference

### Colors
Defined as CSS variables in `src/index.css`, exposed to Tailwind as `bg`, `fg`, `muted`, `faint`, `line`.
- Dark (default): `#0b0b0b` bg, `#ececec` fg
- Light: `#f3f3ef` bg, `#111111` fg
- Theme is set via `data-theme` on `<html>`

### Typography
- IBM Plex Mono for everything, IBM Plex Sans for blog body text
- `.kicker`: 12px, uppercase, 0.2em tracking, used for labels and section titles
- Titles bold, body regular

### Patterns
Legend swatches and the "At a glance" bar use `.pat-solid` (hackathon), `.pat-dots` (project), `.pat-lines` (content), plus `.pat-gray` and `.pat-dashed`.

### Layout
- Content column `max-w-5xl`, rows use a `160px / 1fr` grid on `sm+`
- Section header: kicker title above a full-width `border-fg` rule

### Interactions
- Hover: text goes from `muted` to `fg`
- Text scramble on section titles (on view) and row titles (on hover), via `<Scramble>`
- Synthesized UI sounds in `src/lib/sound.ts`, off by default
- Shortcuts: `T` theme, `S` sound
- All motion is disabled under `prefers-reduced-motion`

---

**Last updated: October 2026**
