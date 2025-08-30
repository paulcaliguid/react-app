# Professional Personal Website Template (React + Vite + TS)

A clean, minimal template for a professional personal site: Home, About, Projects, Experience, Contact. Built with React, TypeScript, Vite, and React Router.

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
- `npm run lint`: Lint files
- `npm run format`: Format with Prettier

## Customize
- Edit site title and meta in `index.html`
- Update navigation label in `src/components/Navbar.tsx`
- Fill page content in `src/pages/*`
- Tweak styles in `src/index.css`

## Deploy
- Static hosting compatible (Vercel, Netlify, GitHub Pages)
- Build with `npm run build` and upload `dist/`

## License
MIT




## Deployment
This app is configured for GitHub Pages via Actions. Push to 'main' builds with Vite and deploys the 'dist' folder. The Vite base is set to '/react-app/'.
