# Nemo Website — Claude Standing Instructions

## Always follow the design system
This project has a strict design system defined in `_archive/design/01-component-kit.html`.
**Never** hardcode values that exist as CSS custom properties. Always use tokens:

### Spacing — `var(--sp1)` through `var(--sp20)`
| Token | Value |
|-------|-------|
| `--sp1` | 4px |
| `--sp2` | 8px |
| `--sp3` | 12px |
| `--sp4` | 16px |
| `--sp5` | 20px |
| `--sp6` | 24px |
| `--sp7` | 28px |
| `--sp8` | 32px |
| `--sp9` | 36px |
| `--sp10` | 40px |
| `--sp12` | 48px |
| `--sp16` | 64px |
| `--sp20` | 80px |

### Colors
- `var(--black)` — #0D0D0D
- `var(--charcoal)` — #1A1A1A
- `var(--off-white)` — #F5F5F0
- `var(--green)` — #35D687
- `var(--green-dim)` — rgba(53,214,135,0.12)
- `var(--t1)` — primary text (white on dark, #111 on light)
- `var(--t-off)` — muted text
- `var(--b1)`, `var(--b2)`, `var(--b3)` — border levels
- `var(--b-green)` — green border
- `var(--b-dark)` — dark border
- `var(--s3)` — surface level 3

### Typography
- `var(--font-aeonik)` — display/headings
- `var(--font-haas)` — body/UI text
- Headings: `font-weight: 400`, `letter-spacing: -1px` or `-2px` for large sizes
- Use `clamp()` for responsive sizes: e.g. `clamp(36px, 4vw, 48px)`

### Radii
- `var(--r-sm)` — small
- `var(--r-md)` — medium
- `var(--r-lg)` — large card
- `var(--r-xl)` — extra large
- `var(--r-pill)` — 9999px

### Motion
- `var(--e-fast)` — fast ease transition (200ms ease)

### Container
- `var(--container)` — max content width (~1200px)

## Architecture rules
- Server Components by default — never add `"use client"` unless the component uses hooks, browser APIs, or event listeners
- CSS via inline `<style>` tags in Server Components (no CSS modules, no Tailwind classes for layout)
- `"use client"` only for: Nav, Reveal, FAQ accordion, CairoTime, SubscribeForm
- Section files live in `src/components/sections/home/`
- Layout files live in `src/components/layout/`
- Barrel exports required for all component directories via `index.ts`

## Layout pattern
- Section wrapper: handles padding (`padding: var(--sp20) var(--sp10)`)
- Inner container: `max-width: var(--container); margin: 0 auto`
- Never center-align hero or feature text — left-align to the container edge
- Full-bleed dark sections use `data-nav-dark` attribute

## Eyebrow labels
Use monospace style: `// SECTION NAME` pattern with the `.eyebrow` class
