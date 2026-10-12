# AGENTS.md — Frontend template standards

Next.js App Router **or** Vite + React template. Full standards: `docs/frontend/INDEX.md`.

## Stack lock

TypeScript strict, Tailwind with `cn` (`clsx` + `twMerge`), Biome, Fallow, Vitest, Playwright, Tanstack Query, Zod, Context / `useState` before Zustand. shadcn/ui primitives. No Storybook.

Do not finish a code change while lint, types, or tests are failing.

## Where behavior lives

- Always-on gates: `.cursor/rules/core/`
- File-scoped standards: `.cursor/rules/frontend/`, `.cursor/rules/testing/`, `.cursor/rules/tooling/`
- Workflows: `spec-driven-development`, `frontend-design-quality`, `acceptance-verification`
- Read-only reviewers: `spec-critic`, `architecture-critic`, `design-critic`, `qa-verifier`

Non-trivial work follows `request -> spec -> critique -> implementation plan -> implementation -> verification`.
