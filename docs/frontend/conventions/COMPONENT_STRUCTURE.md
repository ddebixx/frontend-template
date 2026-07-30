# Component structure

## Principles

1. **Encapsulation** — types/utils/constants/subcomponents used by one component live inside that component folder. Shared ones become globals.
2. **Minimization** — create files only when needed (no empty `types.ts` / `index.ts` for show).
3. **Mirroring** — folder tree mirrors the component tree.

## Layout

```txt
ComponentName/
  ComponentName.tsx
  ComponentName.test.ts
  ComponentName.types.ts          # only if needed
  ComponentName.constants.ts      # only if needed
  utils/                          # only if needed
    getSomeData.ts
    getSomeData.test.ts
  SubComponent/                   # nested the same way
```

## Notes

- Prefer named exports for components
- Keep UI presentational; put data fetching behind `hooks/` / `fetchers/`
- Colocate unit tests next to the unit under test
