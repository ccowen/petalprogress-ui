# @petalprogress/ui

Shared design system and component library for PetalProgress. Imported by both `petalprogress-web` (marketing site) and `petalprogress-app` (logged-in app).

## What's inside

- **Design tokens** (`src/tokens.css`) — colors, typography, spacing, radii, shadows, transitions as CSS custom properties (`--pp-*`)
- **Components** — Button, Badge, Card, Input, Modal, Nav

## Setup

```bash
npm install
npm run build
```

## Development

```bash
npm run dev      # watch mode — rebuilds on file changes
npm run build    # production build → dist/
npm run typecheck # type-check without emitting
```

## Output

After building, `dist/` contains:

| File | Purpose |
|------|---------|
| `index.js` / `index.cjs` | Component JS (ESM + CJS) |
| `index.d.ts` / `index.d.cts` | TypeScript declarations |
| `index.css` | All component styles + tokens bundled |
| `tokens.css` | Standalone design tokens only |

## How consumers use it

During local development, consumer repos reference this package via file path in their `package.json`:

```json
{
  "dependencies": {
    "@petalprogress/ui": "file:../petalprogress-ui"
  }
}
```

In the consumer's entry point:

```tsx
import "@petalprogress/ui/styles.css"; // loads tokens + component CSS
```

Then import components:

```tsx
import { Button, Card, Badge, Input, Modal } from "@petalprogress/ui";
```

## Important

If you make changes to this package, you need to rebuild it (`npm run build`) and then **restart the dev server** in `petalprogress-web` or `petalprogress-app` for changes to take effect. Vite caches the resolved dependency and won't pick up changes from the `dist/` folder until restarted.

## Fonts

This package does not bundle fonts. Consumers must include the Google Fonts link in their `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

## Tech stack

- TypeScript
- tsup (bundler)
- React 18/19 (peer dependency)
- CSS with `pp-` prefixed class names (not CSS Modules — tsup empties module mappings)
