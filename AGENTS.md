# AGENTS.md — Frontend template standards

Condensed rules for AI agents and contributors. Full docs: `docs/frontend/INDEX.md`.

## Stack

Next.js App Router **or** Vite + React · TypeScript strict · Tailwind + `cn`/`twMerge` · Biome · Fallow · Vitest · Playwright · Tanstack Query · Zod · Context first, Zustand when needed · shadcn/ui · i18n (`next-intl` / `i18next`) · a11y (WCAG 2.2 AA intent).

**Not in template:** Storybook.

## Structure

- `components/ui` → shadcn primitives only
- `components/[domain]` vs `components/shared` (≥2 domains) — presentational
- `features/[domain]` → feature modules (compose UI, wire hooks / server actions)
- API: `fetchers/[domain]` (HTTP + Zod) + `hooks/[domain]` (Tanstack Query)
- `providers/` → context + app-wide providers (`AppProviders`)
- `hooks/` and `utils/` may be used by components and features
- `lib/utils.ts` → shadcn `cn` helper (`clsx` + `twMerge`)
- `i18n/` + `messages/` → locale config and catalogs
- E2E in `e2e/[domain]`
- Next routes in `src/app`; Vite screens in `src/pages`

## Naming

camelCase functions/hooks · PascalCase components · kebab-case other folders/assets.

## Components

Encapsulate · minimize files · mirror tree. Named exports only — no `React.FC`.
Keep `ComponentName.tsx` / `FeatureName.tsx` UI-only — types in `*.types.ts`, constants in `*.constants.ts`.
No inline display strings — copy in locale catalogs **or** constants (project chooses).
Merge classes with `cn(...)` — no Tailwind string-ternary `className`s.
Semantic HTML + keyboard-accessible interactive UI.

## Hooks & effects

One responsibility per hook. Prefer derived values over mirrored state.
`useEffect`: named inner function; complete dependency arrays.

## Tests

BDD Given/When/Then. Unit colocated. E2E happy paths only. Prefer `getByRole` queries.

## DoD

Biome + types clean · tests updated · Zod on API responses · a11y for new UI · no inline display strings (locales or constants) · `cn` for classes · CI green.
