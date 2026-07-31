# Project structure

## Principles

- Domain code stays separated from shared/global code
- Reusable code is easy to find
- API access is encapsulated (no ad-hoc `Tanstack Query`/`fetch` in UI)
- `hooks/` and `utils/` are shared helpers — components may import them
- `components/` stay presentational; `features/` compose UI and wire data/actions

## Vite + React layout

```txt
public/
e2e/
  [domain-name]/
    path-name.spec.ts
src/
  pages/                         # Route-level screens
  components/
    ui/                          # shadcn/ui primitives (generated)
    shared/                      # Reused across domains
      [ComponentName]/
    [domain-name]/                # Domain presentational UI
      [ComponentName]/
  features/
    [domain-name]/                # Feature modules (compose UI + wire hooks/actions)
      [FeatureName]/
  fetchers/
    [domain-name]/
      getSomething.ts
      somethingSchema.ts
  hooks/
    [domain-name]/
      useSomethingQuery.ts
  lib/
    utils.ts                     # shadcn `cn` helper
  constants/
    [domain-name].ts
  types/
    [domain-name].ts
  utils/
    [domain-name]/
      transformNumber.ts
      transformNumber.test.ts
  assets/
    icons/
    images/
```

## Next.js App Router layout

Same ideas, with App Router routes:

```txt
public/
e2e/
  [domain-name]/
    path-name.spec.ts
src/
  app/                           # Routes, layouts, server components
  components/
    ui/                          # shadcn/ui primitives (generated)
    shared/
      [ComponentName]/
    [domain-name]/
      [ComponentName]/
  features/
    [domain-name]/
      [FeatureName]/
  fetchers/
    [domain-name]/
  hooks/
    [domain-name]/
  lib/
    utils.ts
  constants/
  types/
  utils/
  assets/
```

## Hard rules

- Promote to `components/shared/` only when used by **≥2 domains**
- Keep product UI out of `components/ui/` — that folder is for shadcn primitives only
- `components/` = presentational only (no fetch / Query / business orchestration)
- `features/` = feature modules — compose components, use hooks/utils, Next server actions when needed
- Pages/routes render features (or call `fetchers/` from server code) — they don’t create HTTP clients or Query instances
- Components may use `hooks/` and `utils/` — they must not call `fetch` or build Query options inline
- Shared utils/types/constants live under `src/utils`, `src/types`, `src/constants`
- Don’t invent new top-level folders without documenting them in this file
