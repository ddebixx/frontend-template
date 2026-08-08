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

**Tailwind CSS** first. Merge classes with `cn` from `src/lib/utils.ts` (`clsx` + `twMerge`) — do not build `className` with fragile string ternaries/concat. Details: [Styling](../conventions/STYLING.md).

## Components & hooks

- Named exports only; no `React.FC`
- Prefer Server Components (Next); `"use client"` only when required
- Named inner functions inside `useEffect`; prefer derived state over syncing props into state

Details: [Engineering practices](../conventions/ENGINEERING.md).

## Accessibility & i18n

Ship semantic, keyboard-usable UI ([Accessibility](../conventions/ACCESSIBILITY.md)). Localize user-facing copy ([I18N](I18N.md)).

## Not included

**Storybook** is intentionally out of scope for this template. Document shared components in README/examples/tests instead.
