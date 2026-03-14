# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Development server with hot reload
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run clean     # Clean build artifacts
```

No test suite is configured.

## Architecture

**L'Amour Link** is a Next.js 15 landing page for a Vietnamese online wedding invitation SaaS platform.

**Stack:** Next.js 15 / React 19 / TypeScript, Tailwind CSS v4, Motion (motion/react) for animations, Lucide React for icons.

### Page composition

`app/page.tsx` composes the full page by rendering 9 section components in order:

```
Header → Hero → Templates → Features → HowItWorks → SocialProof → ContactForm → Footer → FloatingButtons
```

All components live in `components/`. Each file is one self-contained section with its own data and animations.

### Styling

- Tailwind CSS v4 (configured via `postcss.config.mjs`, not `tailwind.config.js`)
- Custom theme tokens defined in `app/globals.css` as CSS variables: `--color-champagne` (#d4af37), `--color-sage` (#b2ac88), `--color-cream` (#fffdd0)
- Google Fonts (Playfair Display + Montserrat) loaded in `app/layout.tsx` via Next.js font system and exposed as CSS variables `--font-playfair` / `--font-montserrat`
- Utility: `lib/utils.ts` exports `cn()` (clsx + tailwind-merge)

### Animations

All animations use `motion/react` (not `framer-motion`). Components use `whileInView` for scroll-triggered entrance animations and staggered delays for list items.

### Responsive design

Mobile breakpoint is 768px, detected via `hooks/use-mobile.ts`. Layouts shift from single-column on mobile to multi-column on desktop.

### Environment

Requires `APP_URL` in `.env.local` (see `.env.example`). Set `DISABLE_HMR=true` to disable hot reloading.

Next.js is configured with `output: "standalone"` and remote image patterns for `picsum.photos`.
