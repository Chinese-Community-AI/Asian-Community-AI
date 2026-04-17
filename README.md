# AsianCommunity.AI

[www.AsianCommunity.AI](https://www.asiancommunity.ai)

A Next.js + Tailwind marketing site for AsianCommunity.AI, an independent initiative building safety, belonging, and prosperity for the 25 million Asian American, Native Hawaiian, and Pacific Islander community members across the country. The information architecture and visual system are inspired by [taaf.org](https://taaf.org).

## Tech stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** with design tokens in `src/app/globals.css`
- **next/font** for Playfair Display (serif) + Inter (sans)
- **lucide-react** icons, **framer-motion** for subtle motion

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/                  App Router routes + root layout
    page.tsx            Homepage (composes home section components)
    about/              About, Mission, Story, Leadership, Careers, Contact, Impact
    approach/           Our approach and strategy
    work/               Overview + Safety, Belonging, Prosperity, Research subpages
    partners/           Partner overview + Giving Challenge
    news/               News index + Takeaway blog
    events/             Upcoming events
    donate/             Donation flow (stubbed)
  components/
    layout/             Header, Footer, Container, Section, PageHero, etc.
    home/               Homepage section components
    ui/                 Button, Card, EyebrowLabel, StatCounter
  lib/
    nav.ts              Header + footer navigation config
    content.ts          Static content data (priorities, projects, stats, partners)
public/
  logo.svg              Wordmark SVG
```

## Design tokens

Color, typography, and radius tokens live in the Tailwind `@theme` block of `src/app/globals.css`. The palette centers on a warm brick red (`#C1352B`), cream (`#F5EFE6`), deep ink (`#1A1A1A`), and a mustard accent (`#D4A64A`).

## What's stubbed

This repository scaffolds a full multi-page marketing site. The following are intentionally left as placeholders and can be wired up later:

- Donation processing (buttons link to `#`)
- Newsletter signups (form handlers prevent default; nothing is persisted)
- Real imagery (homepage and card images use Unsplash URLs)
- Blog CMS (posts live in a static array in `src/app/news/blog/page.tsx`)
- Analytics, auth, and i18n

## Deploy

This project deploys cleanly to Vercel with zero configuration.
