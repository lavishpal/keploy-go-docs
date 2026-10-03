# Test a Go API with Keploy

A tutorial page, built with Next.js and MDX, on recording and replaying API tests for a Gin + Redis app with [Keploy](https://keploy.io/).

**Live site:** "[Link](https://keploy-go-docs-kappa.vercel.app/)"

## What's inside

- `app/page.mdx`: the tutorial itself
- `components/Callout.tsx`: custom callout component used in the MDX
- `components/ThemeToggle.tsx`: light/dark mode toggle
- `mdx-components.tsx`: registers the MDX components

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To check the production build:

```bash
npm run build
```

## Stack

Next.js (App Router), MDX via `@next/mdx`, Tailwind CSS with the typography plugin, `rehype-pretty-code` for syntax highlighting, and `next-themes` for dark mode.