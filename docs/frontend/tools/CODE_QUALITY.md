# Code quality

## Lint + format

**Biome** is the default (linter + formatter). One tool instead of ESLint + Prettier.

If a fork keeps ESLint + Prettier, document that choice in the README — don’t run both stacks on the same files.

## Unused code

**Knip** for unused exports, dependencies, and dead files. Wire it into `check`.

## Automation

- Pre-commit hooks (Husky + lint-staged or equivalent) for format/lint on staged files
- CI must fail on: build, lint, typecheck, unit, e2e
- Aggregate script: `pnpm check` / `npm run check`

## Definition of done (PR)

- [ ] Biome clean
- [ ] TypeScript clean
- [ ] Unit tests updated
- [ ] E2E happy path if user flow changed
- [ ] Knip clean (or justified exceptions)
