# React & app variants

## UI

**React 19+** — functional components only.

## Template variants

### Vite + React

- Vite for dev/build
- React Router for client routing (if multi-page)
- Tailwind CSS for styling

### Next.js

- App Router
- Prefer Server Components by default; add `"use client"` only when needed
- Tailwind CSS for styling

## Styling

**Tailwind CSS** first. Avoid bespoke CSS files unless utilities can’t express the need.

## Not included

**Storybook** is intentionally out of scope for this template. Document shared components in README/examples/tests instead.
