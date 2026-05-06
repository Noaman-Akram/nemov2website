# Nemo Website — Claude Standing Instructions

> These instructions OVERRIDE all defaults. Follow exactly.

---

## 1. Token reference (source of truth: `globals.css`)

### Fonts — the ONLY correct variable names
| CSS variable | Role | Usage |
|---|---|---|
| `var(--font-aeonik)` | Display / headings | All `h1`–`h4`, large display text |
| `var(--font-haas)` | Body / UI | All body copy, labels, nav, buttons |

**Never use** `--fp`, `--fs`, `--fm`, `--fa`, `--fh`, or any other alias.
**Never use** `font-family: 'AeonikPro'` or `font-family: 'NeueHaas'` inline — always go through the CSS variable.

### Typography rules
- Headings: `font-weight: 400` always — Aeonik is not a weight font
- Large display: `letter-spacing: -2px` to `-3px`, `line-height: 0.95` to `1.05`
- Section H2: `clamp(32px, 4vw, 52px)`, `letter-spacing: -1.5px`
- Body: 14px–16px, `line-height: 1.65`–`1.8`, `color: #666` on light / `rgba(255,255,255,0.5)` on dark
- `clamp()` for all heading sizes — no fixed px on headings

### Spacing tokens
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

There is no `--sp7`, `--sp9`, `--sp11`, etc. Do not invent them — round to the nearest token.

### Color tokens — dark surfaces (`globals.css` exact values)
| Token | Value | Use on |
|---|---|---|
| `--black` | `#080808` | Dark section backgrounds |
| `--charcoal` | `#222222` | Elevated dark surfaces, avatar bg |
| `--off-white` | `#FAFBFC` | Light page backgrounds |
| `--green` | `#35D687` | Accent only — CTAs, active states, highlights |
| `--green-dim` | `rgba(53,214,135,0.12)` | Do NOT use for avatars or tag fills |
| `--green-border` | `rgba(53,214,135,0.28)` | Green element borders |

**Important token behavior:** `--b1`, `--b2`, `--b3`, `--t1`, `--t-off`, `--s3` are **dark-surface** tokens (white-alpha).
On **light backgrounds** use literal values instead:
```
border on light:     rgba(0,0,0,0.08)   or rgba(0,0,0,0.12)
text muted on light: #666  or  #888  or  #aaa
bg tint on light:    rgba(0,0,0,0.03)
```

### Border radius
| Token | Value | Typical use |
|---|---|---|
| `--r-sm` | 4px | Tags, small chips, inputs |
| `--r-md` | 8px | Cards, meta cards, dropdowns |
| `--r-lg` | 16px | Large cards, section cards |
| `--r-xl` | 20px | Hero cards, full-bleed cards |
| `--r-pill` | 9999px | Buttons, badges, toggles |

### Motion
| Token | Value |
|---|---|
| `--e-fast` | `150ms ease-in-out` |
| `--e-normal` | `300ms ease-in-out` |
| `--e-slow` | `500ms ease-in-out` |

Never write explicit `200ms`, `250ms`, etc. — always use a token.

### Layout
```
--container: 1312px     max-width for all content
Section padding:  var(--sp20) var(--sp10)  (80px top/bottom, 40px sides)
Inner container:  max-width: var(--container); margin: 0 auto
```

---

## 2. Architecture rules

- **Server Components by default** — never add `"use client"` unless the component explicitly needs hooks, browser APIs, or event handlers (`onClick`, `onMouseEnter`, etc.)
- **`"use client"` allowed for:** Nav, Reveal, FAQ accordion, CairoTime, SubscribeForm, any component with event handlers
- **CSS via inline `<style>` tags** in Server Components — no CSS modules, no Tailwind layout classes
- **Section files:** `src/components/sections/<page>/SectionName.tsx`
- **Layout files:** `src/components/layout/`
- **Barrel exports required:** every component folder has `index.ts`
- **Pages are composition only** — `app/**/page.tsx` just imports and arranges sections, no markup

---

## 3. Layout patterns

```
Section wrapper:   padding: var(--sp20) var(--sp10)
Inner container:   max-width: var(--container); margin: 0 auto
Dark sections:     data-nav-dark attribute on section/div
Text alignment:    left-align — never center hero or feature text
```

---

## 4. Eyebrow labels — two patterns only

**On dark background** — plain haas uppercase:
```css
font-family: var(--font-haas);
font-size: 11px;
letter-spacing: 0.12em;
text-transform: uppercase;
color: rgba(255,255,255,0.4);   /* or var(--green) for emphasis */
display: block;
margin-bottom: var(--sp4);
```

**On light background** — bordered Aeonik tag:
```css
display: inline-flex;
align-items: center;
font-family: var(--font-aeonik);
font-size: 12px;
font-weight: 400;
color: rgba(0,0,0,0.45);
border: 1px solid rgba(0,0,0,0.12);
border-radius: var(--r-sm);
padding: 4px 14px;
letter-spacing: 0.5px;
text-transform: uppercase;
margin-bottom: var(--sp5);
```

No `//` slashes. No decorative symbols. No emojis.

---

## 5. Buttons

| Variant | Use | CSS |
|---|---|---|
| Black pill (primary) | Main CTAs on light bg | `background:#111; color:#fff; border-radius:var(--r-pill); height:48px-52px; padding:0 var(--sp8)` |
| Green pill | Single hero CTA or high-emphasis | `background:var(--green); color:#111; border-radius:var(--r-pill); height:48px` |
| Ghost dark | Secondary on dark bg | `background:transparent; border:1px solid rgba(255,255,255,0.16); color:rgba(255,255,255,0.7); border-radius:var(--r-pill)` |
| Ghost light | Secondary on light bg | `background:transparent; border:1px solid rgba(0,0,0,0.12); color:#555; border-radius:var(--r-pill)` |
| Hero rotating glow | Hero only | See `Hero.tsx` — do not recreate |

Arrows: use plain `→` text only where directional affordance is needed. **Never** `↗`, SVG icons, or emoji in buttons.

---

## 6. Tags (inline metadata chips)

Tags are **border + text only — never a background fill.**
```css
/* Standard on dark */
display: inline-flex; align-items: center;
font-family: var(--font-haas); font-size: 12px;
color: rgba(255,255,255,0.45);
border: 1px solid rgba(255,255,255,0.12);
border-radius: var(--r-sm); padding: 3px 12px;

/* Standard on light */
color: #888;
border: 1px solid rgba(0,0,0,0.12);

/* Active/green — still NO background fill */
color: var(--green);
border-color: rgba(53,214,135,0.35);
```

**Never add `background: var(--green-dim)` to tags.** Tag backgrounds are always transparent.

---

## 7. Avatars

```css
border-radius: 50%;
background: var(--charcoal);      /* NEVER --green-dim */
border: 1px solid rgba(255,255,255,0.12);
color: rgba(255,255,255,0.55);
font-family: var(--font-aeonik);
```

---

## 8. Cards

| Type | Use | CSS |
|---|---|---|
| Work/portfolio | Project thumbnails | No bg, no border, `border-radius: var(--r-sm)` on image (4px), title below |
| Flat border | Feature/service cards | `border: 1px solid rgba(0,0,0,0.08); border-radius: var(--r-lg); background: #fff` |
| Dark card | Dark section cards | `background: var(--charcoal); border: 1px solid rgba(255,255,255,0.07); border-radius: var(--r-lg)` |
| CTA card | Footer-area CTAs | `background: #111; border-radius: var(--r-xl); padding: var(--sp16)` |

**No:** colored top borders on cards. No box-shadows. No lift-on-hover translateY. No emoji icons.
**Card images:** prefer `border-radius: var(--r-sm)` (4px) — sharper is better. 0 radius is fine too.

---

## 9. List rows (roles, services, etc.)

Hover effect is **arrow-only** — never shift padding-left on hover.
```css
/* Row */
display: grid; grid-template-columns: [num] 1fr auto;
padding: var(--sp6) 0;
border-top: 1px solid rgba(0,0,0,0.08);
cursor: pointer;

/* Arrow — only this animates on hover */
.row-arrow { color: rgba(0,0,0,0.2); transition: color var(--e-fast), transform var(--e-fast); }
.row:hover .row-arrow { color: #111; transform: translateX(4px); }
```

---

## 10. Alerts

Use left-border strip pattern (not full background fill):
```css
.alert { position: relative; overflow: hidden; padding: var(--sp4) var(--sp5); border-radius: var(--r-md); border: 1px solid; }
.alert::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; }
/* green: bg rgba(53,214,135,0.04); border rgba(53,214,135,0.15); before: background var(--green) */
```

---

## 11. Dark sections

Any section with a dark background must:
1. Have `data-nav-dark` attribute — the nav reads this to flip its text color
2. Use `#111` or `var(--black)` as background — not `--charcoal` for full sections
3. Use `color: #fff` or `rgba(255,255,255,x)` for all text within

---

## 12. Marquees

CSS-only marquee (no `"use client"` needed):
```css
.track { display: flex; width: max-content; animation: scroll 28s linear infinite; }
.outer:hover .track { animation-play-state: paused; }
@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
```
Duplicate the item array twice in JSX for seamless loop.

---

## 13. Page backgrounds

| Context | Background |
|---|---|
| Main site pages (light) | `#F5F5F0` (warm off-white — use literal, not `--off-white` which is `#FAFBFC`) |
| Dark sections | `#111` or `var(--black)` |
| Role/detail pages | `#F5F5F0` |
| Cards on light bg | `#fff` |

---

## 14. When stuck or need new patterns

**Reference files (do NOT ship, design exploration only):**
```
_archive/design/design-system/components.html    — all component variants
_archive/design/design-system/visual-options.html — button/card/tag options
_archive/design/careers/03-careers-lab.html      — careers page reference
_archive/design/careers/04-careers-role.html     — role detail page reference
```

If you need to design something new, open the relevant archive HTML file first and pick the closest existing pattern. If nothing fits, propose options before implementing.

---

## 15. What's live — pages inventory

| Route | Status | Sections |
|---|---|---|
| `/` | Live | Hero, Marquee, Feature (dark), SelectedWork, FAQ, CTA, Footer |
| `/careers` | Live | Hero, About+Marquee, Roles (numbered rows), Life (dark), Process, NoRole CTA |
| `/careers/[slug]` | Live | 3 roles — sidebar layout, breadcrumb, prose body |
| `/services` | Stub | Needs building |
| `/contact` | Stub | Needs building |
| `/work` | Stub | Needs building |
| `/about` | Stub | Needs building |
| `/team/nemo` | Live | Team section |

**Footer** is in `src/components/layout/Footer/Footer.tsx` and is rendered globally via `src/app/(marketing)/layout.tsx` — do not add it to individual pages.

---

## 16. Forbidden patterns

- Hardcoded hex values that have a token equivalent
- `background: var(--green-dim)` on avatars or tags
- `padding-left` shifts on row hover (arrow-only hover)
- `↗` arrows anywhere
- `//` or decorative symbols in eyebrow labels
- `font-weight` other than 400 on Aeonik headings
- `"use client"` on any component that doesn't need it
- CSS modules, Tailwind layout classes, styled-components
- Box shadows on cards
- Colored top borders on cards
- Emoji in any UI
- `--fp`, `--fs`, `--fa`, `--fh` font aliases (wrong — use `--font-aeonik` / `--font-haas`)
