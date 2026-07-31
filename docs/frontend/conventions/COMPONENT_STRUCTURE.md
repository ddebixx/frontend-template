# Component structure

## Principles

1. **Encapsulation** — types/utils/constants/subcomponents used by one component live inside that component folder. Shared ones become globals.
2. **Clean component file** — `ComponentName.tsx` is UI only. Props types and local constants are exported from sibling files in the same folder.
3. **Minimization** — create sibling files only when they have content (no empty `types.ts` / `index.ts` for show).
4. **Mirroring** — folder tree mirrors the component tree.

## Layout

```txt
ComponentName/
  ComponentName.tsx               # UI only — no inline types or constants
  ComponentName.types.ts          # props and other local types (exported)
  ComponentName.constants.ts      # local constants (exported) — omit if none
  ComponentName.test.ts
  utils/                          # only if needed
    getSomeData.ts
    getSomeData.test.ts
  SubComponent/                   # nested the same way
```

## Rules

- Export props/types from `ComponentName.types.ts` — do not declare them in `ComponentName.tsx`
- Export local constants from `ComponentName.constants.ts` — do not declare them in `ComponentName.tsx`
- Prefer named exports for components, types, and constants
- Keep UI presentational; put data fetching behind `hooks/` / `fetchers/` (usually via `features/`)
- Feature modules under `src/features/[domain]/` follow the same folder rules
- Colocate unit tests next to the unit under test
