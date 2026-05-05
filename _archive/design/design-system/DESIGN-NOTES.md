# Nemo Design System — Locked Rules & Observations

This document captures what is confirmed good, what must be removed, and the rules that govern every future component. This is the source of truth before we regenerate the full component kit HTML.

---

## WHAT IS CONFIRMED GOOD (do not change these)

### Navigation
- **Current Nav.tsx** — header (closed + open panel) is approved as-is
- Floating pill nav, burger toggle, slide-in right panel — all correct
- Arrow used on hover links inside nav panel: the `→` glyph that fades in + slides right on hover — this is the approved arrow pattern everywhere
- Source: `src/components/layout/Nav/Nav.tsx`

### Homepage Sections
- **Process section** ("Accelerate your vision…") — the 3-col grid with SVG icons, dark background, no borders on cards, clean title + desc. This grid pattern is correct.
- **CTASection** — green-tinted card (`#E8FBF1`), dot-grid overlay, centred heading with green `<em>` word, pill button with black bg. Approved.
- **Hero button** — the rotating conic-gradient glow border pill button (`btn-glow-hero`). This is the approved button style for primary hero CTAs. No arrow → inside that specific button. When arrows are needed in other buttons, use the plain text `→` glyph (no emoji, no SVG icon).

### Footer
- **Footer.tsx** — full footer approved as-is, **except**: remove `↗` arrows from "Start a project" and "Book a call" buttons. Those should be plain text labels only.
- Wordmark fade, green glow line, cookie bar, live clocks, social pill links — all correct.

### Selected Work Cards (02-home-test.html)
- No card background, no border, no padding box — just image + title + link below
- Image: `aspect-ratio: 4/3`, `border-radius: var(--r-lg)`, placeholder bg `#EDEBE4`, scale on hover
- Title: `font-family: var(--font-aeonik)`, ~19px, weight 400, `letter-spacing: -0.3px`
- Link: plain text `View project →` where arrow slides on hover via `::after` pseudo-element
- Source: `_archive/design/core/02-home-test.html` → `.sw-card`

### About page (about.html)
- Page spacing and section rhythm approved
- Values grid (4-col, `gap: 1px`, shared border background) — approved pattern
- Team cards (`.qn-card`) — approved: transparent bg, `border: 1px solid rgba(0,0,0,0.06)`, `border-radius: 6px`, grayscale photo, clean content area, role label as small monospace tag
- Source: `_archive/design/core/about.html`

---

## WHAT MUST BE REMOVED / FIXED

### `//` Double-slash eyebrow labels — REMOVE EVERYWHERE
- The `// SECTION NAME` pattern is **not** in the design system
- It appeared in CLAUDE.md incorrectly — that line in CLAUDE.md must be corrected
- **Correct eyebrow pattern**: small `font-haas`, 11px, `letter-spacing: 0.12em`, `text-transform: uppercase`, muted color (`rgba(255,255,255,0.4)` on dark / `rgba(0,0,0,0.4)` on light). No slashes, no symbols.
- Example from approved code: `<span class="eyebrow">WE'RE HIRING</span>` not `// WE'RE HIRING`
- The `.tag` pattern from `02-home-test.html` is also valid for section labels on light backgrounds: small border, `border-radius: var(--r-sm)`, uppercase Aeonik, `font-size: 12px`

### Green dot before logo/brand name — REMOVE
- The green dot used in `01-component-kit.html` (`.kit-dot`, `.nav-ndot`) is not part of the system
- The logo is the NEMO wordmark image. No decorative dot next to it anywhere.

### Feature badge / "Nemo V.2 | NEW | Auth0 for AI agents" — REMOVE
- The floating badge in `FeatureSection.tsx` (`feature-badge`) does not belong
- The entire concept of a pill badge floating over the dark section is off-system
- Remove from `FeatureSection.tsx` entirely

### Greenish gradient on dark background — REMOVE
- `radial-gradient(circle at top, rgba(53,214,135,0.08), transparent 28%)` on body/page bg — this is wrong
- Dark sections use flat `var(--black)` (`#0D0D0D`) background. Glows are allowed only as a contained decorative element inside a specific component (like the CTA card glow), not as a page-level background treatment.

### Feature cards with colored top border + emojis — REMOVE
- `card-feat` pattern from `01-component-kit.html` (green top border + emoji icon + lift shadow) is not approved
- Cards in this system are either: (a) no-bg work cards, (b) flat border cards (border: 1px solid var(--b1)), or (c) the values grid tile from about.html

### Small "activity" cards — REMOVE
- The `.card-sm` / activity feed-style cards from component-kit are generated fluff. Remove.

### Arrows in buttons
- **No** `↗` in footer buttons — remove (approved above)
- **No** SVG arrows, emoji arrows, or custom icon arrows in buttons
- Only exception: the rotating glow hero button has no arrow at all
- For non-hero pill buttons: plain `→` text character if directional affordance is needed, styled consistently with Nav hover arrows

---

## SECTION LABEL / EYEBROW — DEFINITIVE RULES

Two valid patterns only:

**Pattern A — Dark background (uppercase haas)**
```
font-family: var(--font-haas)
font-size: 11px
letter-spacing: 0.12em
text-transform: uppercase
color: rgba(255,255,255,0.4)   /* or var(--green) for emphasis */
```

**Pattern B — Light background (tag border)**
```
display: inline-flex
font-family: var(--font-aeonik)
font-size: 12px
font-weight: 500
color: rgba(0,0,0,0.5)
background: transparent
border: 1px solid rgba(0,0,0,0.15)
border-radius: var(--r-sm)   /* 4px */
padding: 4px 16px
letter-spacing: 0.5px
text-transform: uppercase
```

---

## CARD PATTERNS — THE ONLY APPROVED TYPES

### Type 1 — Work / Portfolio card (no background)
```
background: transparent
border: none
padding: 0
image: aspect-ratio 4/3, border-radius var(--r-lg), bg #EDEBE4 placeholder
title: font-aeonik, 19px, weight 400, letter-spacing -0.3px
link: plain text + → via ::after
```

### Type 2 — Border card (flat dark)
```
border: 1px solid var(--b1)
background: var(--s3)   /* rgba(255,255,255,0.04) */
border-radius: var(--r-lg)
padding: var(--sp6)
hover: border-color → var(--b2), background → rgba(255,255,255,0.06)
No shadows, no top color borders, no transforms
```

### Type 3 — Values / tile card (light surface)
```
background: #FAFBFC
border: shared gap (parent has 1px background, gap: 1px)
border-radius: 0 (parent clips with overflow: hidden)
padding: 48px 36px
SVG icons only (stroke: #888, no fill, no emoji)
hover: background → #fff
```

### Type 4 — Team member card (about page)
```
background: transparent
border: 1px solid rgba(0,0,0,0.06)
border-radius: 6px
image: grayscale, aspect-ratio 4/3, scale on hover
role tag: monospace, 10px, border, no bg
name: font-aeonik, 26px, weight 500
```

### Type 5 — CTA card (green tint, light)
```
background: #E8FBF1
border: 1px solid rgba(53,214,135,0.25)
border-radius: var(--r-lg)
dot-grid overlay (radial-gradient 1px dots)
text centred, max-width 500px
```

---

## BUTTON PATTERNS — THE ONLY APPROVED TYPES

### Primary hero CTA (glow border)
```
Rotating conic-gradient border + off-white inset
Used only in hero sections
No arrow
```

### Dark pill primary (footer / general CTAs)
```
background: var(--black) or var(--green)
color: #fff or var(--black)
border-radius: var(--r-pill)
height: 48px
padding: 0 var(--sp8)
font-haas, 14px, weight 500
```

### Ghost pill (secondary)
```
background: transparent
border: 1px solid rgba(255,255,255,0.2)   [dark] or rgba(0,0,0,0.15) [light]
border-radius: var(--r-pill)
height: 44–48px
hover: border-color becomes more opaque
```

### Nav CTA (small)
```
height: 36px
padding: 0 var(--sp5)
border-radius: var(--r-pill)
background: var(--off-white) / rgba(245,245,240,0.92)
color: #111
font-haas, 13px, weight 500
```

---

## SPACING RHYTHM
- Section padding: `var(--sp20) var(--sp10)` → 80px top/bottom, 40px sides
- Inner container: `max-width: var(--container); margin: 0 auto` — never wider
- Between sections: 80px–100px vertical gap minimum
- Grid gaps: `var(--sp6)` for dense, `var(--sp8)`–`var(--sp12)` for breathable

## TYPOGRAPHY RULES
- Display headings: `font-aeonik`, weight 400, `letter-spacing: -1px` to `-2.5px` depending on size
- Body: `font-haas`, weight 400, `font-size: 14px–16px`, `line-height: 1.6–1.7`
- Muted body: `color: var(--t-off)` on dark / `color: #555` on light
- Never bold headings — weight 400 is the brand voice

## MOTION
- `var(--e-fast): 200ms ease` — for hover states, color transitions
- `cubic-bezier(0.16, 1, 0.3, 1)` — for panel opens, reveals, transforms
- Arrow slide on hover: `transform: translateX(4px)` with `opacity: 0 → 1`

---

## WHAT TO BUILD NEXT
A corrected component kit HTML (`01-component-kit-v2.html`) that contains:
1. Tokens (colors, spacing, type, radii, motion) — locked
2. Section label / eyebrow — both patterns
3. Buttons — all approved types, no others
4. Cards — all approved types (Types 1–5), no others
5. Nav — reference to live Nav.tsx (no re-demo needed)
6. Selected Work grid
7. Process grid
8. CTA section
9. Footer reference
10. Team card grid

No emojis. No AI-generated decorations. No green dots. No `//` labels.
