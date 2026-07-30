# AGENTS.md — Frontend template standards

Condensed rules for AI agents and contributors. Full docs: `docs/frontend/INDEX.md`.

## Stack

Next.js App Router **or** Vite + React · TypeScript strict · Tailwind · Biome · Fallow · Vitest · Playwright · Tanstack Query · Zod · Context first, Zustand when needed · shadcn/ui.

**Not in template:** Storybook.

## Structure

- `components/ui` → shadcn primitives only
- `components/[domain]` vs `components/shared` (≥2 domains)
- API: `fetchers/[domain]` (HTTP + Zod) + `hooks/[domain]` (Tanstack Query)
- `hooks/` and `utils/` may be used by components
- `lib/utils.ts` → shadcn `cn` helper
- E2E in `e2e/[domain]`
- Next routes in `src/app`; Vite screens in `src/pages`

## Naming

camelCase functions/hooks · PascalCase components · kebab-case other folders/assets.

## Components

Encapsulate · minimize files · mirror tree. Named exports preferred.

## Tests

BDD Given/When/Then. Unit colocated. E2E happy paths only.

## DoD

Biome + types clean · tests updated · Zod on API responses · CI green.
