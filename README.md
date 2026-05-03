# SynergyFC U11 Boys — Team Website

Public-facing website for the Synergy FC U11 Boys soccer team (birth years Aug 2015 – Jul 2016) based in Peoria, AZ. Coached by Jeff & Ashley Montone.

**Live site:** [jmonto512.github.io/SynergyFC-15-16-site](https://jmonto512.github.io/SynergyFC-15-16-site)

## Stack

- **React 18** + **TypeScript**
- **Vite** — dev server and production bundler
- **Mantine v7** — layout components and responsive style props
- **PostCSS** — required by Mantine for responsive props in custom CSS
- **GitHub Actions** — deploys to GitHub Pages on every push to `main`

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173/SynergyFC-15-16-site/
npm run build    # production build → dist/
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) runs `npm install && npm run build` on every push to `main` and deploys the `dist/` folder to GitHub Pages automatically.
