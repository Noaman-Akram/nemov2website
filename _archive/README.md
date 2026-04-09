# _archive

> Staging area for raw design assets before they get properly placed in the project.

This folder holds all source files — component kits, raw HTML mockups, design tokens JSON, font files — until they have a permanent clean home inside the project.

## Contents

### `/design`
| File | Description |
|------|-------------|
| `01-component-kit.html` | Nemo Foundation Component Kit v2 — full design token visual reference |
| `index.html` | Sample homepage mock (live HTML prototype) |
| `nemo-design-system.json` | Design tokens in W3C Design Token format (source of truth for DESIGN.md) |

### `/fonts`
Raw font files for AeonikPro and NeueHaas families.
When ready, copy to `public/fonts/` in the Next.js app.

| Font | Weights | Format |
|------|---------|--------|
| AeonikPro | 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold) | `.otf` |
| NeueHaas | 300 (Light), 400 (Roman), 500 (Medium), 700 (Bold) | `.ttf` |

## Rules
- ✅ Add raw files here freely
- ✅ Reference these files when working on DESIGN.md or components
- ❌ Do NOT import from `_archive` in production code
- ❌ Do NOT commit font files to Git (add to `.gitignore`)
