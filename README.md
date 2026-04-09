# NemoV2Website

> **Nemo** — Web development agency website.  
> Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

---

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # production build
npm run lint     # lint check
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (metadata, fonts)
│   ├── page.tsx            ← Home page (/)
│   ├── not-found.tsx       ← 404
│   ├── error.tsx           ← Global error boundary
│   ├── globals.css         ← Design token layer + Tailwind
│   ├── (site)/             ← Main site pages (share nav + footer)
│   │   ├── about/page.tsx
│   │   ├── work/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   └── (legal)/            ← Legal pages
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── ui/                 ← Primitive components (Button, Tag, Badge, etc.)
│   ├── layout/             ← Nav, Footer
│   └── sections/           ← Page sections (Hero, Features, CTA, FAQ, etc.)
├── lib/
│   └── utils.ts            ← Helper functions (cn, truncate, etc.)
└── styles/                 ← Additional style modules if needed
```

---

## Design System

> **Read [`DESIGN.md`](./DESIGN.md) first** — it is the single source of truth for all design decisions.

Key rules:
- All colors use CSS custom properties from `globals.css`
- Never hard-code hex values
- Use `--fp` (AeonikPro) for headings, `--fs` (NeueHaas) for UI/body
- Green `--green` (#35D687) is the **only** accent color

---

## Fonts

Fonts live in `/public/fonts/` (excluded from git).  
Add the font files and uncomment the `@font-face` declarations in `globals.css`.

| Family | Weights | Format |
|--------|---------|--------|
| AeonikPro | 300, 400, 500, 700 | `.otf` |
| NeueHaas | 300, 400, 500, 700 | `.ttf` |

Source files are in `_archive/fonts/` once added there.

---

## Other Projects in This Workspace

| Folder | Description |
|--------|-------------|
| `_archive/` | Raw design assets — component kit, mockups, design system JSON, fonts |
| `NemoGo/` | Placeholder for the NemoGo platform (separate project, future work) |

---

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Deployment:** Vercel (recommended) or Docker (`output: "standalone"`)
