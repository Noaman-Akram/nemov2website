# ARCHITECTURE.md — Nemo Website

## What this project is

Static marketing website for Nemo, a digital product studio.
Built with Next.js 16 App Router. No backend, no auth, no database.
The product IS the design — consistency is not optional.

---

## The one rule

All colors, sizes, spacing, radii, and motion values must come from `DESIGN.md`.
That file is the single source of truth. Before writing any UI:
1. Open `DESIGN.md`
2. Find the token or pattern
3. Use it exactly

If a value isn't in `DESIGN.md`, add it there first. No improvising.

---

## Directory structure

```
src/
├── app/
│   ├── (marketing)/            Main site pages — Nav + Footer injected here
│   │   ├── layout.tsx          Nav + Footer wrapper for all marketing pages
│   │   ├── page.tsx            Home (/)
│   │   ├── careers/
│   │   │   ├── page.tsx        Careers listing (/careers)
│   │   │   └── [slug]/
│   │   │       └── page.tsx    Role detail (/careers/[slug])
│   │   ├── services/page.tsx   Stub
│   │   ├── contact/page.tsx    Stub
│   │   ├── work/page.tsx       Stub
│   │   └── about/page.tsx      Stub
│   ├── layout.tsx              Root layout — fonts (next/font/local), metadata
│   └── globals.css             CSS tokens only. No component styles here.
│
├── components/
│   ├── layout/
│   │   ├── Nav/                Fixed nav, floating pill, mega menu, dark mode switch
│   │   ├── Footer/             Dark footer, newsletter, link grid, glow line
│   │   ├── AlertBanner.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── home/               Hero, Marquee, FeatureSection, SelectedWork, FAQ, CTASection, Process
│   │   ├── careers/            CareersHero, CareersAbout, CareersRoles, CareersLife, CareersProcess, CareersNoRole
│   │   └── team-nemo/          TeamNemo sections
│   └── ui/
│       └── Reveal.tsx          Scroll-reveal wrapper (client component)
│
├── fonts/                      AeonikPro (.otf), NeueHaas (.ttf)
└── config/                     site.ts — routes, nav links, footer links
```

---

## Key rules

### Server vs Client Components
- **Default: Server Component** — no directive needed
- **`"use client"` required for:** Nav, Reveal, FAQ, CairoTime, SubscribeForm, and anything with `onClick` / `onMouseEnter` / hooks / browser APIs
- **Never add `"use client"` to a page that doesn't need it** — it makes the whole tree client-side

### CSS approach
- Inline `<style>` tags inside Server Components
- No CSS modules, no styled-components
- No Tailwind utility classes for layout — tokens only via CSS vars
- `globals.css` is for tokens only (`--green`, `--sp8`, etc.) and `@keyframes`

### Font variables
The fonts are loaded in `layout.tsx` via `next/font/local` and exposed as CSS variables:
- `var(--font-aeonik)` — AeonikPro (headings/display)
- `var(--font-haas)` — NeueHaas (body/UI)

These are the ONLY valid font variable names. `--fp`, `--fs`, `--fa`, `--fh` do not exist.

### Navigation dark mode
The Nav reads `data-nav-dark` on sections. Add the attribute to any dark section:
```jsx
<section data-nav-dark className="...">
```

### Image optimization
- Always use `next/image` — never `<img>`
- External images require hostname in `next.config.ts` under `remotePatterns`
- Currently allowed: `madebynemo.com/storage/**`

---

## How to extend

### Add a new page
1. `src/app/(marketing)/page-name/page.tsx` — import sections, compose
2. Add route to `src/config/site.ts`
3. Build sections in `src/components/sections/page-name/`
4. Export from `src/components/sections/page-name/index.ts`

### Add a new role (careers)
1. Add to `ROLES` array in `src/components/sections/careers/CareersRoles.tsx`
2. Add content to `ROLE_CONTENT` in `src/app/(marketing)/careers/[slug]/page.tsx`
3. `generateStaticParams` picks it up automatically

### Add a UI primitive
1. `src/components/ui/ComponentName.tsx`
2. Export from `src/components/ui/index.ts`
3. Document in `DESIGN.md` section 8 if it's a new pattern

### Add an external image host
In `next.config.ts`:
```ts
remotePatterns: [
  { protocol: "https", hostname: "your-domain.com", pathname: "/path/**" }
]
```

---

## What NOT to add

- Server actions, API routes, database — static frontend only
- Global state (no Redux, no Zustand, no Context for UI)
- CSS modules, styled-components, Emotion
- Any styling that doesn't derive from a `DESIGN.md` token
- `"use client"` on components that don't need it
- `--fp`, `--fs`, `--fa`, `--fh` font aliases
