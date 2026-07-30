# Frontend standards

Standards for this open-source frontend template family (**Next.js App Router** or **Vite + React**).

They are adapted from common production conventions (structure, naming, testing, quality gates) and tuned for this stack — not a 1:1 copy of any org-specific handbook.

## Stack (template defaults)

| Layer | Choice |
| --- | --- |
| Runtime | Node.js (LTS) |
| Package manager | `pnpm` (preferred) or `npm` — pick one per repo, don’t mix |
| Language | TypeScript (strict) |
| UI | React 19+ |
| App variants | **Next.js** (App Router) **or** **Vite + React** |
| Styling | Tailwind CSS |
| Lint + format | Biome |
| Unused code | Knip |
| Unit tests | Vitest + Testing Library |
| E2E | Playwright |
| HTTP | Tanstack Query |
| Validation | Zod |
| State | React Context + `useState` first; Zustand when needed |

**Out of scope for this template:** Storybook, org-specific i18n mandates, private boilerplates.

## Conventions

- [Project structure](conventions/PROJECT_STRUCTURE.md)
- [Component structure](conventions/COMPONENT_STRUCTURE.md)
- [Naming](conventions/NAMING.md)
- [Testing convention](conventions/TESTING_CONVENTION.md)

## Tools

- [Fundamentals](tools/FUNDAMENTALS.md)
- [React & app variants](tools/REACT.md)
- [Code quality](tools/CODE_QUALITY.md)
- [Testing](tools/TESTING.md)
- [State management](tools/STATE_MANAGEMENT.md)
- [API communication](tools/API_COMMUNICATION.md)

## Quality scripts (expected)

Every template variant should expose:

- `dev` / `build` / `lint` / `typecheck` / `test` / `test:e2e` / `check`
- `check` runs lint + typecheck + unit tests (and Knip if configured)
