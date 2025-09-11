# Professional Personal Website Template (React + Vite + TS)

A clean, minimal template for a professional personal site: Home, About, Projects, Experience, Contact. Built with React, TypeScript, Vite, and React Router.

[![Deploy to GitHub Pages](https://github.com/paulcaliguid/react-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/paulcaliguid/react-app/actions/workflows/deploy.yml)

- Live URL: https://paulcaliguid.github.io/react-app/

## Requirements
- Node.js 18+ (Node 20 LTS recommended)
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Available Scripts
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run preview`: Preview build locally
- `npm run test`: Run unit tests (Vitest)
- `npm run lint`: Lint files (ESLint)
- `npm run format`: Format with Prettier

## Project Structure
```
src/
  assets/           # Images & static assets
  components/       # Reusable UI (Navbar, Footer, ...)
  layouts/          # Root layout and wrappers
  pages/            # Route components (Home, About, ...)
  content/          # Content providers and types
    local/          # JSON content for local provider
    providers/      # local | sanity implementations
  App.tsx, main.tsx
```

## Content Sources
This template supports two content providers:

- `local` (default): reads JSON from `src/content/local/*`.
- `sanity`: reads from Sanity Content Lake if the following env vars are set:
  - `VITE_SANITY_PROJECT_ID`
  - `VITE_SANITY_DATASET`
  - `VITE_SANITY_API_VERSION` (optional; defaults to `2024-08-01`)

Provider selection is automatic based on env vars (`src/content/config.ts`).

## Configuration
- HTML meta/title: edit `index.html`.
- Navigation labels: `src/components/Navbar.tsx`.
- Page content: `src/pages/*` (or JSON via `src/content/local/*`).
- Styles: `src/index.css`.
- Vite base path: `vite.config.ts` sets `base: '/react-app/'` for GitHub Pages project site.

## Deployment (GitHub Pages)
This repo is configured to deploy to GitHub Pages via Actions:

- Workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main` or manual dispatch
- Build: `npm ci && npm run build`
- SPA routing: copies `dist/index.html` to `dist/404.html`
- Output: publishes the `dist/` artifact to Pages

For local static hosting, run `npm run build` and serve the `dist/` folder.

## License
MIT
