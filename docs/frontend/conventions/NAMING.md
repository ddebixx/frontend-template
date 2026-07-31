# Naming

## Rules

- Functions / variables / hooks → `camelCase`
- React components → `PascalCase`
- Everything else (folders that aren’t components, assets) → `kebab-case`

## Examples

| Entity | Pattern | Example |
| --- | --- | --- |
| Domain folder | `kebab-case` | `user-profile/` |
| Component folder | `PascalCase` | `UserProfileCard/` |
| Other folders | `kebab-case` | `utils/`, `schemas/` |
| Component file | `PascalCase.*.ext` | `UserProfileCard.tsx` |
| Component types | `PascalCase.types.ts` | `UserProfileCard.types.ts` |
| Component constants | `PascalCase.constants.ts` | `UserProfileCard.constants.ts` |
| Asset | `kebab-case.ext` | `arrow-right.svg` |
| Util / hook | `camelCase.ext` | `formatCurrency.ts`, `useDebounce.ts` |
