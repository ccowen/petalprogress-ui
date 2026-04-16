# @ccowen/petalprogress-ui

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
    "@ccowen/petalprogress-ui": "file:../petalprogress-ui"
  }
}
```

In the consumer's entry point:

```tsx
import "@ccowen/petalprogress-ui/styles.css"; // loads tokens + component CSS
```

Then import components:

```tsx
import { Button, Card, Badge, Input, Modal } from "@ccowen/petalprogress-ui";
```

## Important

If you make changes to this package, you need to rebuild it (`npm run build`) and then **restart the dev server** in `petalprogress-web` or `petalprogress-app` for changes to take effect. Vite caches the resolved dependency and won't pick up changes from the `dist/` folder until restarted.

## Fonts

This package does not bundle fonts. Consumers must include the Google Fonts link in their `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet">
```

## Publishing to GitHub Packages

This package is published privately to GitHub Packages under the `@ccowen` scope. Consumer apps (including `petalprogress-web` on Vercel) install it from there.

**One-time setup to publish:**

1. Create a GitHub personal access token (classic) with `write:packages` scope.
2. Create a local `.npmrc` in this repo root (it's gitignored):

   ```
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
   ```

**To cut a new release:**

```bash
npm version patch   # or minor / major — bumps package.json version
npm run build
npm publish
git push --follow-tags
```

After publishing, update the consuming repo (e.g. `petalprogress-web/scripts/vercel-install.mjs`) so Vercel picks up the new version on its next deploy.

## Tech stack

- TypeScript
- tsup (bundler)
- React 18/19 (peer dependency)
- CSS with `pp-` prefixed class names (not CSS Modules — tsup empties module mappings)
