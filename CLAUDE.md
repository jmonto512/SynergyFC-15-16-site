# SynergyFC U11 Boys — Team Website

A static, publicly facing website for the Synergy FC U11 Boys soccer team based in Peoria, AZ. Coached by Jeff & Ashley Montone. Targets parents of prospective players (birth years Aug 2015 – Jul 2016).

Live at: **jmonto512.github.io/SynergyFC-15-16-site**

## Stack

React + Vite + TypeScript + Mantine. Deployed to GitHub Pages via GitHub Actions.

| Tool | Purpose |
|---|---|
| Vite | Dev server and production bundler |
| React | UI components |
| TypeScript | Type safety |
| Mantine v7 | Layout components and responsive style props |
| PostCSS | Required by Mantine for responsive props in custom CSS |

## Project Structure

```
index.html                   Home page HTML entry
policies.html                Policies page HTML entry
player-development.html      Player development page HTML entry
src/
  main.tsx                   Home page entry
  policies-main.tsx          Policies page entry
  player-development-main.tsx  Player development page entry
  styles.css                 All custom CSS
  theme.ts                   Mantine theme (fonts, breakpoints)
  data/
    site.ts                  Contact info, links, age range
    pillars.ts               Four pillars content
    learningAreas.ts         Technical/Tactical/Psychological/Physical content
    devTools.ts              Player development tools content and types
    quotes.ts                Inspirational quotes content
    seasonResults.ts         Season results/standings content
  components/
    Pillar.tsx               Single pillar card
    Footer.tsx               Shared contact/footer section
    DevTool.tsx              Single player development tool card
    Quote.tsx                Inspirational quote display
    SeasonResults.tsx        Season results/standings table
    SiteHeader.tsx           Shared site navigation header
    SubPageHero.tsx          Hero section for sub-pages
    SubPageOverview.tsx      Overview/intro section for sub-pages
  pages/
    Home.tsx                 Full home page
    Policies.tsx             Full policies page
    PlayerDevelopment.tsx    Player development page
public/
  assets/images/             Team photos and action shots
  assets/icons/              Four pillar icons (PNG)
```

## Dev workflow

```bash
npm install      # first time only
npm run dev      # start dev server at localhost:5173/SynergyFC-15-16-site/
npm run build    # production build → dist/
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs `npm install && npm run build` on every push to `main`, then deploys the `dist/` folder to GitHub Pages.

## Design system

Defined in `src/styles.css` and `src/theme.ts`.

- Background: `#0a0a0f`
- Body text: `rgba(255,255,255,0.75)`
- Muted text: `rgba(255,255,255,0.55)`
- Borders: `rgba(255,255,255,0.06)` (section), `rgba(255,255,255,0.1)` (cards)
- Fonts: Cormorant Garamond (headings), Inter (body), JetBrains Mono (labels/buttons)
- Breakpoints: 540px, 640px, 700px

Use Mantine components (`Box`, `Stack`, `SimpleGrid`, `Group`, `Flex`, etc.) for new sections. Responsive style props use object syntax: `cols={{ base: 1, sm: 3 }}`. Custom breakpoints (xs=540px, sm=640px, md=700px) are defined in `src/theme.ts` and `postcss.config.cjs`.

## Editing content

| Task | File |
|---|---|
| Hero text, coach bio, gallery | `src/pages/Home.tsx` |
| Policy text | `src/pages/Policies.tsx` |
| Player development content | `src/pages/PlayerDevelopment.tsx` |
| A pillar title or description | `src/data/pillars.ts` |
| A learning area | `src/data/learningAreas.ts` |
| A dev tool card | `src/data/devTools.ts` |
| Quotes | `src/data/quotes.ts` |
| Season results | `src/data/seasonResults.ts` |
| Email, social links, age range | `src/data/site.ts` |
| Add a photo | Drop in `public/assets/images/`, add `<img>` in `Home.tsx` |
| Add a new page | Create `newpage.html` entry + `src/pages/NewPage.tsx`, add to `vite.config.ts` inputs |

## Future server migration

All React components are portable. If a server is ever needed, move to Next.js: copy components to `app/` pages as-is, update routing. TypeScript types carry over unchanged.
