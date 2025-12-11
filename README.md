# Sapphive Docs

Sapphive Docs is our MDX‑powered documentation site built on Next.js. It auto‑generates navigation from files in the `content/` directory, includes a searchable command palette, and ships with a built‑in roadmap and changelog views.

![Sapphive Docs](public/images/cover.jpg)

## Quick Start

1) Clone
```
git clone https://github.com/wesic/sapphive-docs.git
cd sapphive-docs
```

2) Install
```
npm install
```

3) Develop
```
npm run dev
```

4) Configure
```
src/resources/once-ui.config.js
```

5) Add content
```
Place .mdx files under content/
```

## Features

- MDX content: author docs using Markdown + JSX.
- Auto navigation: folder structure under `content/` becomes sidebar + routes.
- Search: command palette (Cmd+K / Ctrl+K) with keyword indexing.
- Roadmap & Changelog: optional pages integrated into homepage highlights.
- Theming: light/dark with system preference, responsive layout.
- SEO: Open Graph image generation and metadata per page.

## Project Structure

- `src/app/` – Next.js App Router pages and layouts.
- `content/` – MDX documents and per‑section `meta.json`.
- `product/` – UI components for docs shell (header, sidebar, etc.).
- `resources/` – roadmap/changelog data and app config.
- `public/` – static assets.

## Scripts

- `npm run dev` – start local dev server.
- `npm run build` – production build (standalone output enabled).
- `npm run start` – start production server.
- `npm run lint` – run ESLint.

## Self‑Host Deploy

1) Build
```
npx rimraf .next && npm run build
```

2) Start
```
HOST=0.0.0.0 PORT=3000 npm run start
```

Behind a reverse proxy (e.g., Nginx), proxy to `localhost:3000` and enable HTTPS. Node.js 18.17+ is required.

## CI

This repo includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that builds on every push/PR to `main`. Enable it as a required check in branch protection.

## License

Distributed under the CC BY‑NC 4.0 License. See `LICENSE` for details.

## About Sapphive

Sapphive Docs is maintained by the Sapphive team. Learn more at [https://sapphive.com](https://sapphive.com).