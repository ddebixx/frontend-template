# Code quality

## Lint + format

**Biome** is the default (linter + formatter). One tool instead of ESLint + Prettier.

If a fork keeps ESLint + Prettier, document that choice in the README — don’t run both stacks on the same files.

## Unused code & health

**Fallow** for unused exports/deps/files, plus optional deeper checks (`fallow dupes`, `fallow health`). Wire `fallow dead-code` into `check`.

Config: `.fallowrc.json`. Cache lives in `.fallow/` (gitignored).

## Automation

- Pre-commit hooks (Husky + lint-staged) for Biome on staged files
- CI must fail on: build, lint, typecheck, unit, e2e
- Aggregate script: `pnpm check` / `npm run check` (includes Fallow)

## Definition of done (PR)

- [ ] Biome clean
- [ ] TypeScript clean
- [ ] Unit tests updated
- [ ] E2E happy path if user flow changed
- [ ] Fallow clean (or justified exceptions)
