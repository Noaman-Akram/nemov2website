# DESIGN.md — Nemo Design System
> Source of truth for all visual decisions. All AI agents must read this before writing any UI.
> If a value isn't here, add it here first, then use it.
> Last verified against: `globals.css`, `Hero.tsx`, `Footer.tsx`, `CareersHero.tsx` — May 2026

---

## 1. Brand Identity

**Studio:** Nemo — digital product studio, Cairo + Remote
**What we do:** Brand, web, product design, AI-native software
**Design personality:**
- Premium editorial — nothing decorative, nothing wasted
- Dark-first with warm light moments
- Typography is the design — large Aeonik headlines, precise NeueHaas UI
- Motion-aware — everything transitions, nothing jumps
- Green is the only accent — used sparingly and intentionally

---

## 2. Color Tokens (verified against `globals.css`)

### Brand
| Token | Value | Usage |
|---|---|---|
| `--green` | `#35D687` | Primary accent — CTAs, active, highlights only |
| `--green-dim` | `rgba(53,214,135,0.12)` | Subtle green tint (NOT for avatars, NOT for tag fills) |
| `--green-border` | `rgba(53,214,135,0.28)` | Green element borders |
| `--green-hover` | `#29c275` | Green on hover |

### Dark surfaces
| Token | Value | Usage |
|---|---|---|
| `--black` | `#080808` | Dark section bg, nav |
| `--charcoal` | `#222222` | Elevated dark surfaces, avatar bg |
| `--s3` | `rgba(255,255,255,0.04)` | Subtle tint on dark |
| `--s3h` | `rgba(255,255,255,0.07)` | Subtle tint hover on dark |

### Light / neutral
| Token | Value | Usage |
|---|---|---|
| `--off-white` | `#FAFBFC` | Global body background (CSS default) |
| `--warm` | `#EDE9E0` | Warm card fills |

> **Note:** Light page backgrounds in production components use `#F5F5F0` (warm off-white).
> This differs slightly from `--off-white` (`#FAFBFC`). Use `#F5F5F0` for page-level backgrounds
> and `--off-white` for the CSS body default.

### Borders (context-dependent)
| Context | Value |
|---|---|
| Dark surface borders | `--b1` = `rgba(255,255,255,0.07)`, `--b2` = `rgba(255,255,255,0.12)`, `--b3` = `rgba(255,255,255,0.20)` |
| Light surface borders | `rgba(0,0,0,0.08)` (subtle) or `rgba(0,0,0,0.12)` (standard) |
| Green border | `--b-green` = `rgba(53,214,135,0.28)` |

**Critical:** `--b1`/`--b2`/`--b3` are white-alpha — **only use on dark backgrounds**.
On light backgrounds write the literal `rgba(0,0,0,x)` value.

### Text (context-dependent)
| Context | Primary | Muted |
|---|---|---|
| On dark | `#fff` / `--t1` | `rgba(255,255,255,0.4)` |
| On light | `#111` | `#666` (body) / `#888` (secondary) / `#aaa` (tertiary) |

---

## 3. Typography

### Font variables (exact names used in the codebase)
| CSS variable | Family | Role |
|---|---|---|
| `var(--font-aeonik)` | AeonikPro, system-ui, sans-serif | Display, headings, logo, large numbers |
| `var(--font-haas)` | NeueHaas, system-ui, sans-serif | Body, UI, buttons, labels, nav |

**Loading:** `next/font/local` in `app/layout.tsx`. Variables are injected on `<html>`.
**Never** hardcode font family names — always use the CSS variable.

### Type scale
| Level | Font | Size | Letter-spacing | Line-height | Weight |
|---|---|---|---|---|---|
| Hero / Display | Aeonik | `clamp(52px, 7vw, 96px)` | `-3px` | `0.95`–`1.0` | 400 |
| Page H1 | Aeonik | `clamp(40px, 6vw, 80px)` | `-2.5px` | `1.0` | 400 |
| Section H2 | Aeonik | `clamp(32px, 4vw, 52px)` | `-1.5px` | `1.05` | 400 |
| Card title | Aeonik | `18px`–`28px` | `-0.4px` | `1.1` | 400 |
| Body large | Haas | `16px`–`17px` | `0` | `1.7` | 400 |
| Body base | Haas | `14px`–`15px` | `0` | `1.65` | 400 |
| Caption / label | Haas | `12px`–`13px` | `0` | `1.5` | 400 |
| Eyebrow | Haas | `11px` | `0.12em` | — | 400 |

**Rule:** Aeonik is always `font-weight: 400`. It is not a weight font.
**Rule:** All heading font sizes use `clamp()`.

---

## 4. Spacing Scale

| Token | Value |
|---|---|
| `--sp1` | 4px |
| `--sp2` | 8px |
| `--sp3` | 12px |
| `--sp4` | 16px |
| `--sp5` | 20px |
| `--sp6` | 24px |
| `--sp8` | 32px |
| `--sp10` | 40px |
| `--sp12` | 48px |
| `--sp16` | 64px |
| `--sp20` | 80px |
| `--sp32` | 128px |

Tokens `--sp7`, `--sp9`, `--sp11` do not exist. Do not invent them.

---

## 5. Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--r-sm` | 4px | Tags, chips, inputs, card images (preferred sharpness) |
| `--r-md` | 8px | Meta cards, dropdowns, form inputs |
| `--r-lg` | 16px | Section cards, feature cards |
| `--r-xl` | 20px | Hero cards, CTA cards |
| `--r-pill` | 9999px | Buttons, badges, toggles |

Card images: prefer `--r-sm` (4px) or `0`. Sharper is better.

---

## 6. Motion

| Token | Value | Usage |
|---|---|---|
| `--e-fast` | `150ms ease-in-out` | Buttons, hover states, arrows |
| `--e-normal` | `300ms ease-in-out` | Cards, panels, nav dropdown |
| `--e-slow` | `500ms ease-in-out` | Hero entrances |

Never write raw duration values. Always use a token.

---

## 7. Layout

```
--container: 1312px     max content width

Section wrapper:  padding: var(--sp20) var(--sp10)
Inner container:  max-width: var(--container); margin: 0 auto
Text alignment:   left-align for all hero/feature/section text
Full-bleed dark:  add data-nav-dark attribute
```

---

## 8. Component Patterns

### 8.1 Eyebrow labels

**On dark background:**
```css
font-family: var(--font-haas);
font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
color: rgba(255,255,255,0.4);  /* or var(--green) for emphasis */
display: block; margin-bottom: var(--sp4);
```

**On light background (bordered tag style):**
```css
display: inline-flex; align-items: center;
font-family: var(--font-aeonik);
font-size: 12px; font-weight: 400; letter-spacing: 0.5px; text-transform: uppercase;
color: rgba(0,0,0,0.45);
border: 1px solid rgba(0,0,0,0.12);
border-radius: var(--r-sm); padding: 4px 14px;
margin-bottom: var(--sp5);
```

No `//`, no `::`, no decorative symbols or emoji. Ever.

---

### 8.2 Buttons

| Variant | Background | Color | Border | Radius | Height |
|---|---|---|---|---|---|
| Black pill (primary) | `#111` | `#fff` | none | `--r-pill` | 48–52px |
| Green pill | `var(--green)` | `#111` | none | `--r-pill` | 48px |
| Ghost on dark | `transparent` | `rgba(255,255,255,0.7)` | `1px solid rgba(255,255,255,0.16)` | `--r-pill` | 48px |
| Ghost on light | `transparent` | `#555` | `1px solid rgba(0,0,0,0.12)` | `--r-pill` | 48px |
| Hero glow | special | — | rotating glow | `--r-pill` | 48px — see `Hero.tsx` |

- Font: `var(--font-haas)`, 14px, padding: `0 var(--sp8)`
- Arrows: `→` plain text only. **Never** `↗`, SVG, or emoji.
- Hover: `opacity: 0.8` on black pill / `opacity: 0.88` on green pill

---

### 8.3 Tags (inline metadata chips)

Tags are always **border + text only. Zero background fill.**

```css
display: inline-flex; align-items: center;
font-family: var(--font-haas); font-size: 12px;
border-radius: var(--r-sm); padding: 3px 12px;

/* On dark */   color: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.12);
/* On light */  color: #888;                   border: 1px solid rgba(0,0,0,0.12);
/* Green */     color: var(--green);            border: 1px solid rgba(53,214,135,0.35);
```

`background: var(--green-dim)` on a tag is always wrong.

---

### 8.4 Avatars

```css
border-radius: 50%;
background: var(--charcoal);          /* NEVER --green-dim */
border: 1px solid rgba(255,255,255,0.12);
color: rgba(255,255,255,0.55);
font-family: var(--font-aeonik); font-weight: 400;
```

---

### 8.5 Cards

| Type | Background | Border | Radius |
|---|---|---|---|
| Work / portfolio | none | none | `--r-sm` on image only |
| Flat on light | `#fff` | `1px solid rgba(0,0,0,0.08)` | `--r-lg` |
| Dark feature card | `var(--charcoal)` | `1px solid rgba(255,255,255,0.07)` | `--r-lg` |
| CTA / promo (dark) | `#111` | none | `--r-xl` |
| Grid cell | `#111` (dark grid) | shared 1px gap bg | none (overflow:hidden) |

No: shadows on cards. No: colored top borders. No: lift-on-hover. No: emoji icons.

---

### 8.6 List rows (roles, links, etc.)

```css
/* Row — hover arrow only, NEVER shift padding */
.row { display: grid; grid-template-columns: [opt-num] 1fr auto; padding: var(--sp6) 0; border-top: 1px solid rgba(0,0,0,0.08); }
.row-arrow { color: rgba(0,0,0,0.2); transition: color var(--e-fast), transform var(--e-fast); }
.row:hover .row-arrow { color: #111; transform: translateX(4px); }
.row:hover .row-title { color: var(--green); }  /* optional */
```

---

### 8.7 Alerts

Left-border strip via `::before` pseudo element — not a solid background:
```css
.alert { position:relative; overflow:hidden; padding: var(--sp4) var(--sp5); border-radius: var(--r-md); border:1px solid; }
.alert::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; }

/* Green variant */
.alert-green { background: rgba(53,214,135,0.04); border-color: rgba(53,214,135,0.15); }
.alert-green::before { background: var(--green); }
```

---

### 8.8 Marquees (CSS-only, no `"use client"`)

```jsx
// Duplicate array twice in JSX for seamless loop
const items = [...DATA, ...DATA];
```
```css
.track { display:flex; width:max-content; animation: scroll 28s linear infinite; }
.outer:hover .track { animation-play-state: paused; }
@keyframes scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
```

---

### 8.9 Navigation (live — do not recreate)

See `src/components/layout/Nav/` — fixed top bar, floating pill inner nav, dark glass.
`data-nav-dark` on dark sections flips the nav text to light.

---

### 8.10 Footer (live — do not recreate)

See `src/components/layout/Footer/Footer.tsx` — dark (`#050505`), newsletter, link grid, live clocks, watermark image, glow line.
Rendered globally in `src/app/(marketing)/layout.tsx`.

---

## 9. Pages Inventory

| Route | Status | Notes |
|---|---|---|
| `/` | Live | Hero, Marquee, Feature (dark), SelectedWork, FAQ, CTA |
| `/careers` | Live | Hero, About+Marquee, Roles, Life (dark), Process, NoRole |
| `/careers/[slug]` | Live | senior-product-designer, frontend-engineer, brand-strategist |
| `/team/nemo` | Live | Team section |
| `/services` | Stub | To build |
| `/contact` | Stub | To build |
| `/work` | Stub | To build |
| `/about` | Stub | To build |

---

## 10. Reference files (design exploration — do not ship)

```
_archive/design/design-system/components.html     All component variants A–Z
_archive/design/design-system/visual-options.html Button/card/tag options
_archive/design/careers/03-careers-lab.html       Careers page reference
_archive/design/careers/04-careers-role.html      Role detail page reference
```

When designing something new: open the closest archive file, find the best existing pattern, adapt it. If nothing fits, propose options before building.
