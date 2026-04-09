# DESIGN.md — Nemo Design System
> **Agency website** for Nemo, a web development agency.
> AI agents must reference this file STRICTLY when building any UI for this project.
> Do not deviate from these tokens, scales, or component specs without explicit instruction.

---

## 1. Overview

### Brand Identity
**Nemo** is a web development agency that creates digital products using advanced technologies.

**Tagline:** "Turn your ideas into reality"

**Design Personality:**
- **Premium & Editorial** — refined, intentional, nothing wasted
- **Dark-first with light moments** — the site breathes between dark sections and light surfaces
- **Precise geometry** — minimal radii, structured grids, no decorative excess
- **Motion-aware** — everything transitions, nothing jumps

### Aesthetic Direction
The design leverages a **dark-primary / warm-accent system**:
- Sections alternate between near-black `#080808` and warm off-white `#FAFBFC`
- The signature green `#35D687` is the sole color accent — used purposefully, not decoratively
- Typography is the design: large, breath-taking AeonikPro headlines with precise NeueHaas UI text

### Color Philosophy
Pure black (`#080808`) as the anchor. Against it, a single vibrant green (`#35D687`) accent that feels alive. Warm neutrals (`#EDE9E0`) soften the contrast. Never use more than these simultaneously.

---

## 2. Color System

### Brand Colors (LOCKED — do not change)
| Token | Value | Usage |
|-------|-------|-------|
| `--green` | `#35D687` | Primary accent, CTAs, active states, highlights |
| `--green-dim` | `rgba(53,214,135,0.12)` | Green background tints, icon wells |
| `--green-border` | `rgba(53,214,135,0.28)` | Green element borders |
| `--green-hover` | `#29c275` | Green on hover |

### Dark Surfaces
| Token | Value | Description |
|-------|-------|-------------|
| `--black` | `#080808` | Page background (dark sections), nav |
| `--navy` | `#13171D` | Dark cards, elevated dark surfaces |
| `--charcoal` | `#222222` | Slightly elevated dark surfaces |
| `--s0` | `#080808` | Surface 0 (base) |
| `--s1` | `#13171D` | Surface 1 (card bg) |
| `--s2` | `#222222` | Surface 2 (elevated card) |
| `--s3` | `rgba(255,255,255,0.04)` | Surface 3 (subtle tints on dark) |
| `--s3h` | `rgba(255,255,255,0.07)` | Surface 3 hover |

### Light / Neutral
| Token | Value | Description |
|-------|-------|-------------|
| `--white` | `#FFFFFF` | Pure white |
| `--off-white` | `#FAFBFC` | Page background (light sections) |
| `--warm` | `#EDE9E0` | Warm card backgrounds, button fill |
| `--warm-cream` | `#E9EBDF` | Retool-style button fill (Style 2) |
| `--gray` | `#868788` | Secondary text, labels, placeholders |

### Borders
| Token | Value | Usage |
|-------|-------|-------|
| `--b1` | `rgba(255,255,255,0.07)` | Subtle dark border (nav, cards) |
| `--b2` | `rgba(255,255,255,0.12)` | Standard dark border |
| `--b3` | `rgba(255,255,255,0.20)` | Prominent dark border |
| `--b-green` | `rgba(53,214,135,0.28)` | Green accent border |
| `--b-dark` | `rgba(0,0,0,0.15)` | Border on light surfaces |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `--t1` | `#FFFFFF` | Primary text (on dark) |
| `--t2` | `#F3F3F3` | Secondary text (on dark) |
| `--t3` | `#868788` | Tertiary / muted text |
| `--t-off` | `rgba(255,255,255,0.25)` | Disabled / placeholder text |

### Utility / Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--success` | `#35D687` | Success (same as green) |
| `--error` | `#DC2626` | Errors, danger states |
| `--warning` | `#F59E0B` | Warnings |
| `--beta` | `#8B5CF6` | Beta badge |
| `--pro` | `#6366F1` | Pro tier |
| `--live` | `#10B981` | Live status |
| `--new` | `#3B82F6` | New feature badge |

---

## 3. Typography

### Font Families
| Token | Family | Role |
|-------|--------|------|
| `--fp` (font-primary) | `AeonikPro, Inter, sans-serif` | Display, headings, logo |
| `--fs` (font-secondary) | `NeueHaas, Inter, sans-serif` | Body, UI, labels, nav |
| `--fm` (font-mono) | `Courier New, monospace` | Code, eyebrow labels |

**Loading:** Both fonts are local files. Use `next/font/local` in `layout.tsx`.
- AeonikPro: weights 300, 400, 500, 700 (`.otf`)
- NeueHaas: weights 300, 400, 500, 700 (`.ttf`)

### Type Scale
| Level | Font | Size | Line Height | Letter Spacing | Weight |
|-------|------|------|-------------|----------------|--------|
| H1 / Display | AeonikPro | 64px | 72px | -1px | 400 |
| H2 | AeonikPro | 48px | 56px | -0.5px | 400 |
| H3 | AeonikPro | 32px | 38px | 0 | 400 |
| H4 | AeonikPro | 24px | 30px | 0 | 400 |
| Body LG | NeueHaas | 18px | 27px | 0 | 400 |
| Body Base | NeueHaas | 14px | 20px | 0 | 500 |
| Body SM | NeueHaas | 12px | 18px | 0 | 400 |
| Button / Label | NeueHaas | 14px | 16.1px | 0 | 400 |

### Special Text Styles
```
Tags / Labels:  NeueHaas, 14px/500, letter-spacing: 0.5px, text-transform: uppercase
Section Eye:    NeueHaas, 10px/700, letter-spacing: 0.14em, uppercase — green color
Footer Title:   AeonikPro, 17px/500, letter-spacing: -0.3px
Nav Links:      NeueHaas, 14px/400, color: --t3
```

### Responsive Headlines
Use `clamp()` for responsive displays:
- Hero H1: `clamp(48px, 6vw, 80px)`, letter-spacing: `-2px`
- Section H2: `clamp(36px, 4vw, 48px)`, letter-spacing: `-1px`

---

## 4. Spacing

All spacing follows the `sp` scale (WithRealm verified):

| Token | Value | Key Usage |
|-------|-------|-----------|
| `--sp1` | 4px | Tag padding-vertical |
| `--sp2` | 8px | Small gaps |
| `--sp3` | 12px | Compact gaps |
| `--sp4` | 16px | Tag padding-horizontal, small button padding |
| `--sp5` | 20px | Ghost button padding-horizontal |
| `--sp6` | 24px | Primary button padding-horizontal |
| `--sp8` | 32px | Card inner gaps |
| `--sp10` | 40px | Medium spacing |
| `--sp12` | 48px | Large section dividers |
| `--sp16` | 64px | Card padding (4rem) |
| `--sp20` | 80px | Section padding vertical |
| `--sp32` | 128px | Hero section padding |

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--r-sm` | 4px | Tags, Style 1 buttons, small elements |
| `--r-md` | 8px | Medium cards, mega menu items, inputs |
| `--r-lg` | 16px | Footer top corners, nav pill (floating) |
| `--r-xl` | 20px | Large cards, nav floating bar |
| `--r-pill` | 9999px | Style 2 buttons, badges, toggles |

---

## 6. Motion

All transitions use `ease-in-out`. (Vaulta verified)

| Token | Value | Usage |
|-------|-------|-------|
| `--e-fast` | `150ms ease-in-out` | Buttons, hover states, focus rings |
| `--e-normal` | `300ms ease-in-out` | Cards, panels, nav dropdown |
| `--e-slow` | `500ms ease-in-out` | Hero entrances, page transitions |

---

## 7. Elevation & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-md` | `0 12px 16px -4px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.05)` | Large cards (WithRealm) |
| `--shadow-sm` | `0 4px 8px -2px rgba(0,0,0,0.1)` | Medium cards |

---

## 8. Layout

### Container
```css
--container: 1312px;  /* max-width for all content */
/* Usage: max-width: var(--container); margin: 0 auto; padding: 0 40px; */
```

### Section Padding
```
Standard section: padding: 80px 40px    (--sp20 vertical)
Hero section:     padding: 128px 40px   (--sp32 top, --sp20 bottom)
Large section:    padding: 120px 40px
CTA card:         padding: 120px 40px (inside card)
```

### Grid Patterns
```
Feature grid: 2-col, gap: 80px, align-items: center
Footer grid:  4-col (2fr 1fr 1fr 1fr), row-gap: 64px, column-gap: 40px
Cards grid:   auto-fill, minmax(300px, 1fr), gap: 24px
Stats grid:   repeat(3, 1fr), gap: 8px
```

---

## 9. Components

### 9.1 Navigation — Floating Mega Menu
**Source:** Retool dark glass system

Structure: Fixed top bar (dark), contains a floating pill-shaped nav.

```
Nav bar:
  background: rgba(8,8,8,0.98)
  border-bottom: 1px solid --b1
  height: 72px
  position: fixed

Floating nav pill:
  background: rgba(8,8,8,0.88)
  backdrop-filter: blur(14px)
  border: 1px solid --b1
  border-radius: --r-xl (20px)
  padding: 0 24px
  height: 60px

Logo: AeonikPro 17px/500, letter-spacing: -0.3px, color: --t1
Logo dot: 6px circle, background: --green

Nav links: NeueHaas 14px/400, color: --t3, hover: color --t1 + bg --s3, border-radius: --r-sm

Mega menu panel:
  background: rgba(14,18,24,0.98)
  backdrop-filter: blur(20px)
  border: 1px solid --b2
  border-radius: --r-lg (16px)
  padding: 20px
  box-shadow: 0 24px 48px rgba(0,0,0,0.5)
  grid-template-columns: 1fr 1fr (standard) or repeat(3,1fr) (wide)

Mega item:
  display: flex, gap: 11px, padding: 10px 12px
  border-radius: --r-md
  hover: background --s3h

Icon well: 32px, border-radius: --r-sm, background: --green-dim
```

---

### 9.2 Buttons — Style 1 (WithRealm)
Source: WithRealm exact measurements

| Variant | Background | Text | Border | Radius | Padding |
|---------|-----------|------|--------|--------|---------|
| Primary | `#080808` | `#EDE9E0` (warm) | `1px solid #080808` | `4px` | `16px 24px` |
| Primary Green | `#35D687` | `#080808` | `1px solid #35D687` | `4px` | `16px 24px` |
| Warm Dark | `#3C3630` | `#F4F0EC` | `1px solid #3C3630` | `4px` | `16px 24px` |
| Ghost | `transparent` | `#FFFFFF` | `1px solid rgba(255,255,255,.15)` | `4px` | `8px 20px` |
| Watch/Play | `rgba(255,255,255,0.1)` | `#FFFFFF` | `transparent` | `4px` | `8px 16px` + `backdrop-filter: blur(64px)` |
| Link | `transparent` | `#FFFFFF` | `none` | `4px` | `4px 0` + underline offset 4px |
| Small | `#080808` | `#EDE9E0` | `1px solid #080808` | `4px` | `8px 16px` |
| Disabled | `--s3` | `rgba(255,255,255,0.25)` | `1px solid --b1` | `4px` | — | opacity 0.5 |
| Danger | `rgba(239,68,68,0.1)` | `#f87171` | `1px solid rgba(239,68,68,0.25)` | `4px` | `10px 20px` |

**Font:** NeueHaas 18px/500 (full size), 14px/500 (small)

---

### 9.3 Buttons — Style 2 (Retool Pill)
Source: Retool exact measurements

| Variant | Background | Text | Border | Radius | Size |
|---------|-----------|------|--------|--------|------|
| Large Pill | `#E9EBDF` (cream) | `#151515` | none | `9999px` | h:48px, px:36px, 16px/300, ls:0.16px |
| Default Pill | `#EDE9E0` | `#151515` | none | `9999px` | h:40px, px:20px, 14px/400 |
| Green Pill | `#35D687` | `#080808` | none | `9999px` | h:40px, px:24px, 14px/500 |
| Ghost Large | transparent | `#F3F3F3` | `1px solid #8B867F` | `9999px` | h:48px, px:36px, 16px/300 |
| Ghost Small | transparent | `#F3F3F3` | `1px solid --b2` | `9999px` | h:36px, px:20px, 14px/400 |
| Disabled | `--s3` | `rgba(255,255,255,0.25)` | `1px solid --b1` | `9999px` | h:40px |

---

### 9.4 Tags & Badges
**Tags Source:** WithRealm exact

```
Tag (standard):
  font: NeueHaas 14px/500, letter-spacing: 0.5px, uppercase
  border-radius: --r-sm (4px)
  padding: 4px 16px
  border: 1px solid --b2, color: --t3

Tag (active/green):
  border-color: --b-green, color: --green, background: --green-dim

Tag (eyebrow):
  border: 1px solid --b-green, color: --green (no background)

Tag (ghost/watch):
  background: rgba(255,255,255,0.08), color: --t2, border: transparent

Tag (on light surface):
  border: 1px solid rgba(0,0,0,0.15), color: rgba(0,0,0,0.5)
```

**Badges (compact pill):**
```
  font: NeueHaas 10px/700, letter-spacing: 0.08em, uppercase
  border-radius: --r-pill
  padding: 0 9px, height: 20px

Variants:
  Green:   bg --green-dim, color --green, border --b-green
  Neutral: bg --s3, color --t3, border --b2
  Warm:    bg rgba(237,233,224,.12), color --warm
  Red:     bg rgba(248,113,113,.1), color #f87171
  Yellow:  bg rgba(250,204,21,.1), color #facc15
```

---

### 9.5 Cards
**Source:** WithRealm

```
Dark Large Card:
  border-radius: 20px (--r-xl)
  padding: 64px (--sp16)
  background: --navy (#13171D)
  box-shadow: --shadow-md
  hover: background slightly lighter

Warm Large Card (testimonial):
  border-radius: 20px
  padding: 64px
  background: --warm (#EDE9E0)
  box-shadow: --shadow-md

Feature Card (green top border):
  border-radius: 8px (--r-md)
  padding: 32px (--sp8)
  background: --s3
  border: 1px solid --b1
  border-top: 2px solid --green
  hover: background --s3h, translateY(-2px), shadow-md

Medium Card:
  border-radius: 8px
  padding: 64px 20px
  background: --charcoal (#222222)
  box-shadow: --shadow-sm

Small Card:
  border-radius: 8px
  padding: 20px 24px
  background: --s3
  border: 1px solid --b1
```

---

### 9.6 Inputs (Cohere Underline Style)
**Source:** Cohere exact

```
Input field:
  font: NeueHaas 14px/400, line-height: 21px
  background: transparent
  color: --t1
  border: none
  border-bottom: 1px solid --b2
  border-radius: 0
  padding: 8px 0
  focus: border-bottom-color --green
  error: border-bottom-color rgba(248,113,113,0.7)

Checkbox:
  width: 18px, height: 18.5px
  border-radius: 2px
  border: 1px solid --b3
  checked: background --green, border-color --green, color --black
```

---

### 9.7 Footer
**Source:** WithRealm exact

```
Layout:
  background: #050505 (near black)
  border-top: 1px solid --b1
  border-radius: 16px 16px 0 0 (top corners only)
  padding-top: 64px (4rem)
  padding-bottom: 80px (5rem)
  padding-horizontal: 40px

Grid:
  grid-template-columns: 2fr 1fr 1fr 1fr
  row-gap: 64px (4rem)
  column-gap: 40px

Column title: NeueHaas 12px/700, letter-spacing: 0.08em, uppercase, color: --gray
Links: NeueHaas 14px/500, color: --gray, hover: color --t2 + text-decoration: underline
Transition: 300ms cubic-bezier(.19,1,.22,1) (WR exact)
```

---

### 9.8 Dividers
**Source:** Nexo

```
Standard: height: 1px, background: rgba(255,255,255,0.08)
Glow: height: 1px, background: linear-gradient(90deg, transparent, --green, transparent)
Labeled: centered text between two 1px lines
```

---

### 9.9 Generated / Utility Components

```
Avatars:
  border-radius: 50%
  font: AeonikPro, weight 500
  background: --green-dim, color: --green
  Sizes: sm 28px/10px, md 40px/13px, lg 52px/17px

Alerts:
  padding: 16px 18px, border-radius: --r-md
  info:  bg rgba(53,214,135,0.06),  border rgba(53,214,135,0.2)
  warn:  bg rgba(250,204,21,0.06),  border rgba(250,204,21,0.2)
  error: bg rgba(248,113,113,0.06), border rgba(248,113,113,0.2)

Progress bar:
  track: height 5px, background --s3h, border-radius --r-pill
  fill:  background --green

Toggle:
  width 38px, height 21px
  off: background --s3h, border --b2, knob --gray at left:2px
  on:  background --green, border --green, knob --black at left:20px

Tooltip:
  background: --charcoal, border: 1px solid --b2
  font: 11px/400, color: --t2
  padding: 5px 10px, border-radius: --r-sm

Code block:
  background: rgba(0,0,0,0.6)
  border: 1px solid --b1, border-radius: --r-md
  font: 'Courier New', 12px, color: --green
  Inline: bg --green-dim, color --green, border --b-green, border-radius --r-sm
```

---

## 10. Pages Inventory

### Site Pages
| Route | Path | Description |
|-------|------|-------------|
| Home | `/` | Hero, marquee, dark feature section, selected work, FAQ, CTA, footer |
| About | `/about` | Team, story, values, process |
| Work | `/work` | Portfolio / selected projects grid |
| Services | `/services` | Service offerings detail |
| Contact | `/contact` | Contact form, locations |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

### Home Page Sections (in order)
1. **Navigation** — Fixed floating glass mega menu
2. **Hero** — Light grid background, large headline, description, CTA buttons
3. **Marquee** — Dark bar, scrolling tech/service names
4. **Dark Feature** — Black section, 2-col (text + dashboard mockup), green accent
5. **Selected Work** — Light section, portfolio grid
6. **FAQ** — Accordion style, clean typography
7. **CTA Card** — Green-tinted card with dot grid background
8. **Footer** — 4-col grid, dark, rounded top corners

---

## 11. Usage Rules for AI Agents

When building any component or page for this project:

1. **ALWAYS use CSS custom properties** — never hard-code hex values
2. **Never use border-radius values not in the scale** — only `--r-sm`, `--r-md`, `--r-lg`, `--r-xl`, `--r-pill`
3. **Never use font sizes not in the type scale** — stick to the defined sizes
4. **Button choice:** Use Style 1 (WithRealm) as the default. Use Style 2 (pill) only where the design calls for it
5. **Green is used sparingly** — only for primary CTAs, active states, and key highlights. Never decorate with green.
6. **Dark sections** use `--black` (`#080808`) background. Light sections use `--off-white` (`#FAFBFC`). Never mix arbitrarily.
7. **Motion**: always use one of the three token values. Never write explicit ms values without a token
8. **Container**: always wrap content in `max-width: var(--container)` with `margin: 0 auto` and `padding: 0 40px`
9. **Fonts**: `--fp` (AeonikPro) for headings/display, `--fs` (NeueHaas) for UI/body, `--fm` for code/mono
10. **No gradients on text** — keep text colors flat, use gradient only on decorative backgrounds
11. **Image optimization**: always use `next/image` with proper `sizes` prop
12. **No Geist fonts** — the scaffolded Geist is replaced by AeonikPro + NeueHaas

---

*Last updated: April 2026 | Status: Foundation locked, ready for implementation*
