# Nuvis Landing Page

Static React landing page built with Vite, Tailwind CSS, and Framer Motion. No backend, no API surface—everything lives in `src/web`.

## Scripts
- `bun run dev` — start the Vite dev server on `http://localhost:5173`
- `bun run build` — emit a production build
- `bun run preview` — preview the production output
- `bun run lint` — run ESLint over the codebase

## Quick start
```
bun install
bun run dev
```

## Structure
- `src/web/main.tsx` mounts the React tree and provides the router shell.
- `src/web/app.tsx` renders the single landing page route at `/`.
- `src/web/pages/index.tsx` contains the hero and supporting sections with motion.
- `src/web/components` holds layout primitives (`Navbar`, `VideoSection`, etc.).
- `src/web/styles.css` wires up global styles, fonts, and utility imports.

Keep the landing page lean: add/trim sections in `src/web/pages/index.tsx`, and keep data self-contained without API calls.
