# Project structure

## Principles

- Domain code stays separated from shared/global code
- Reusable code is easy to find
- API clients are encapsulated (no ad-hoc `Tanstack Query`/`fetch` in UI)

## Vite + React layout

```txt
public/
e2e/
  [domain-name]/
    path-name.spec.ts
src/
  pages/                         # Route-level screens
  components/
    shared/                      # Reused across domains
      [ComponentName]/
    [domain-name]/                # Domain-only UI
      [ComponentName]/
  services/
    [api-name]/
      schemas/
      client/
      utils/
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
    shared/
      [ComponentName]/
    [domain-name]/
      [ComponentName]/
  services/
    [api-name]/
      schemas/
      client/
      utils/
  constants/
  types/
  utils/
  assets/
```

## Hard rules

- Promote to `components/shared/` only when used by **≥2 domains**
- Pages/routes call into `services/[api-name]/` — they don’t create HTTP clients
- Shared utils/types/constants live under `src/utils`, `src/types`, `src/constants`
- Don’t invent new top-level folders without documenting them in this file
