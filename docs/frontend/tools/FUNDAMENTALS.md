# Fundamentals

## Runtime

Use a current **Node.js LTS**. Pin an `engines` field in `package.json`.

## Package manager

Prefer **pnpm**. `npm` is acceptable. Do not mix lockfiles in one repo.

## Language

**TypeScript** with `strict: true`.

- Prefer `unknown` over `any`
- Avoid `@ts-ignore` / `@ts-expect-error` without a short justification comment
