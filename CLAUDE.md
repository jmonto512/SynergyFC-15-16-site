# SynergyFC U11 Boys — Team Website

A static, publicly facing website for the Synergy FC U11 Boys soccer team based in Peoria, AZ. Coached by Jeff & Ashley Montone. Targets parents of prospective players (birth years Aug 2015 – Jul 2016).

Live at: **jmonto512.github.io/SynergyFC-15-16-site**

## Stack

React + Vite + TypeScript + Chakra UI. Deployed to GitHub Pages via GitHub Actions.

| Tool | Purpose |
|---|---|
| Vite | Dev server and production bundler |
| React | UI components |
| TypeScript | Type safety |
| Chakra UI v2 | Pre-built dark-mode components for new sections |

## Project Structure

```
index.html / policies.html   Vite HTML entry points (minimal shell only)
src/
  main.tsx                   Home page entry
  policies-main.tsx          Policies page entry
  styles.css                 All custom CSS (unchanged design)
  theme.ts                   Chakra theme (matches existing colors/fonts)
  data/
    site.ts                  Contact info, links, age range
    pillars.ts               Four pillars content
    learningAreas.ts         Technical/Tactical/Psychological/Physical content
  components/
    Pillar.tsx               Single pillar card
    LearningArea.tsx         Single learning area block
    Footer.tsx               Shared contact/footer section
  pages/
    Home.tsx                 Full home page
    Policies.tsx             Full policies page
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

Use Chakra components (`Box`, `Stack`, `Card`, etc.) for new sections; they inherit the theme colors and fonts automatically.

## Editing content

| Task | File |
|---|---|
| Hero text, coach bio, gallery | `src/pages/Home.tsx` |
| Policy text | `src/pages/Policies.tsx` |
| A pillar title or description | `src/data/pillars.ts` |
| A learning area | `src/data/learningAreas.ts` |
| Email, social links, age range | `src/data/site.ts` |
| Add a photo | Drop in `public/assets/images/`, add `<img>` in `Home.tsx` |
| Add a new page | Create `newpage.html` entry + `src/pages/NewPage.tsx`, add to `vite.config.ts` inputs |

## Future server migration

All React components are portable. If a server is ever needed, move to Next.js: copy components to `app/` pages as-is, update routing. TypeScript types carry over unchanged.
