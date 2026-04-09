# ARCHITECTURE.md — Nemo Website

## What this project is

**Frontend only.** No backend, no API routes, no auth, no database — just a
marketing website for a web dev agency built with Next.js (static/SSG output).

The entire value of this project is **how it looks and feels**. Design
consistency is not optional — it's the product.

---

## The one rule: design goes through DESIGN.md

Every color, font size, spacing value, radius, shadow, or motion value used in
this project must exist in [`DESIGN.md`](./DESIGN.md). That file is the **single
source of truth** for all visual decisions.

Before writing any UI code:
1. Open `DESIGN.md`
2. Find the token or component spec
3. Use the exact value — no improvising

If a value is missing from `DESIGN.md`, add it there first, then use it.
Hard-coded hex colors, arbitrary font sizes, and one-off padding values are not
allowed.

---

## Structure

```
src/
├── app/                    # Next.js App Router (routes only — no logic here)
│   ├── (marketing)/        # Main site pages — shared Nav + Footer
│   ├── (legal)/            # Privacy, Terms — minimal layout
│   ├── layout.tsx          # Root layout — fonts, metadata
│   └── globals.css         # CSS tokens + Tailwind @theme (tokens only)
│
├── components/
│   ├── ui/                 # Primitives: Button, Tag, Badge, Card, etc.
│   ├── layout/             # Nav, Footer
│   └── sections/           # Page sections: Hero, Features, FAQ, CTA, etc.
│
├── config/
│   └── site.ts             # Nav links, footer links, routes, site info
│
├── lib/
│   └── utils.ts            # cn(), truncate(), slugify()
│
└── types/
    └── index.ts            # Shared TypeScript types
```

**Rule:** pages (`app/`) are just composition — they import and arrange
sections. All real markup lives in `components/`.

---

## How it's built now

- **Fonts** — loaded via `next/font/local` in `layout.tsx`. AeonikPro for
  headings, NeueHaas for UI/body. Available as `--font-aeonik` and
  `--font-haas` CSS variables everywhere.
- **Tokens** — all design tokens are CSS custom properties in `globals.css`,
  also exposed to Tailwind via `@theme {}`. Use `var(--green)` in CSS or
  `text-green` / `bg-black` in Tailwind classes.
- **Config** — nav links, routes, and site info live in `src/config/site.ts`.
  Never hard-code a route string in a component.
- **Barrel exports** — every component folder has an `index.ts`. Import like
  `import { Nav } from "@/components/layout/Nav"`, not deep paths.

---

## How to extend it later

**Adding a page:**
1. Create `src/app/(marketing)/your-page/page.tsx`
2. Add the route to `ROUTES` in `src/config/site.ts`
3. Add to `NAV_LINKS` or `FOOTER_LINKS` if needed
4. Build sections in `src/components/sections/your-page/`

**Adding a UI component:**
1. Create `src/components/ui/ComponentName.tsx`
2. Export from `src/components/ui/index.ts`
3. Spec it in `DESIGN.md` under section 9 if it isn't already there

**Adding a section:**
1. Create `src/components/sections/<page>/SectionName.tsx`
2. Import and use directly in the page — no need to add to barrel unless it's
   shared across pages

**Do not add:**
- Server actions, API routes, database calls — this is a static frontend
- Global state management (no Redux, no Zustand) — not needed here
- CSS modules or styled-components — use CSS vars + Tailwind only
- Any styling that doesn't derive from a `DESIGN.md` token
