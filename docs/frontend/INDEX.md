# Frontend standards

Standards for this open-source frontend template family (**Next.js App Router** or **Vite + React**).

## Stack (template defaults)

| Layer | Choice |
| --- | --- |
| Runtime | Node.js (LTS) |
| Package manager | `pnpm` (preferred) or `npm` — pick one per repo, don’t mix |
| Language | TypeScript (strict) |
| UI | React 19+ |
| App variants | **Next.js** (App Router) **or** **Vite + React** |
| Styling | Tailwind CSS + `cn` (`clsx` / `twMerge`) — see [Styling](conventions/STYLING.md) |
| Lint + format | Biome |
| Unused code | Fallow |
| Unit tests | Vitest + Testing Library |
| E2E | Playwright |
| HTTP | Tanstack Query |
| Validation | Zod |
| State | React Context + `useState` first; Zustand when needed |
| i18n | `next-intl` (Next) / `i18next` + `react-i18next` (Vite) — see [I18N](tools/I18N.md) |
| a11y | Semantic HTML + WCAG 2.2 AA intent — see [Accessibility](conventions/ACCESSIBILITY.md) |

**Out of scope for this template:** Storybook, private boilerplates, a full translation CMS / missing-key CI.

## Conventions

- [Project structure](conventions/PROJECT_STRUCTURE.md)
- [Component structure](conventions/COMPONENT_STRUCTURE.md)
- [Naming](conventions/NAMING.md)
- [Styling (Tailwind + `cn`)](conventions/STYLING.md)
- [Accessibility](conventions/ACCESSIBILITY.md)
- [Engineering practices](conventions/ENGINEERING.md)
- [Testing convention](conventions/TESTING_CONVENTION.md)

## Tools

- [Fundamentals](tools/FUNDAMENTALS.md)
- [React & app variants](tools/REACT.md)
- [Internationalization](tools/I18N.md)
- [Code quality](tools/CODE_QUALITY.md)
- [Testing](tools/TESTING.md)
- [State management](tools/STATE_MANAGEMENT.md)
- [API communication](tools/API_COMMUNICATION.md)

## Quality scripts (expected)

Every template variant should expose:

- `dev` / `build` / `lint` / `typecheck` / `test` / `test:e2e` / `check`
- `check` runs lint + typecheck + unit tests + Fallow
