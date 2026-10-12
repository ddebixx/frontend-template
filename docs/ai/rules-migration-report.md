# Cursor Rules Migration Report

## Summary

- Original active rule files: 14
- New always-on rule files: 2
- New contextual rule files: 12
- Skills created/updated: 0 (three workflows already existed and remain the procedure)
- Subagents created/updated: 0 (four read-only reviewers already existed)
- References/docs created: 2 audit documents, plus `docs/ai/legacy-rules/` (14 original `.mdc` copies)
- Removed obsolete instructions: 0 material requirements removed
- Unresolved conflicts: 0

No `.cursor/commands/` directory exists. Pre-migration counts are in `docs/ai/rules-audit-inventory.md`: 295 rule lines, 46 of them in `alwaysApply: true` files.

## Before / after architecture

```text
.cursor/rules/
  00-spec-first-workflow.mdc      alwaysApply
  stack.mdc                       alwaysApply
  accessibility.mdc
  api-communication.mdc
  code-quality.mdc
  component-structure.mdc
  engineering.mdc
  i18n.mdc
  naming.mdc
  project-structure.mdc
  react.mdc
  state-management.mdc
  styling.mdc
  testing.mdc
.cursor/skills/
  spec-driven-development/
  frontend-design-quality/
  acceptance-verification/
.cursor/agents/
  spec-critic.md
  architecture-critic.md
  design-critic.md
  qa-verifier.md
```

```text
.cursor/rules/
  core/
    00-delivery-contract.mdc      alwaysApply
    10-project-constraints.mdc    alwaysApply
  frontend/
    accessibility.mdc
    api-communication.mdc
    component-structure.mdc
    engineering.mdc
    i18n.mdc
    naming.mdc
    project-structure.mdc
    react.mdc
    state-management.mdc
    styling.mdc
  testing/
    testing.mdc
  tooling/
    code-quality.mdc
.cursor/skills/                   unchanged
.cursor/agents/                   unchanged
docs/ai/
  rules-audit-inventory.md
  rules-migration-report.md
  legacy-rules/                   inactive copies of the 14 original files
```

## Migration map

| Source | Section | Requirement | Destination type | Destination | Status | Rationale |
|---|---|---|---|---|---|---|
| `.cursor/rules/00-spec-first-workflow.mdc` | Intro | Rules are constraints; skills are workflows | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Universal delivery invariant |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 1 | No implementation before a spec with testable must-pass acceptance criteria | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | rewritten-equivalent | Kept as the gate; the procedure stays in the existing skill |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 1 | Same requirement, full procedure | skill | `.cursor/skills/spec-driven-development/SKILL.md` | consolidated | Skill already owns templates, status model, and step order |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 2 | Use `spec-driven-development` for the spec and plan | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Discoverable without loading the skill body |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 3 | Spec stays in the repo; default `docs/specs/<task-slug>.md` | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Path is a project convention |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 3 | Spec template and section rules | skill | `.cursor/skills/spec-driven-development/references/spec-template.md` | consolidated | Already the reference; not copied into the always-on rule |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 4 | `spec-critic` before implementation | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Delegation only; persona stays in the subagent |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 4 | Challenge dimensions and verdict format | subagent | `.cursor/agents/spec-critic.md` | consolidated | Already the independent reviewer |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 5 | `architecture-critic` before architecture-sensitive implementation | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Delegation only |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 5 | Architecture review criteria | subagent | `.cursor/agents/architecture-critic.md` | consolidated | Already the independent reviewer |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 6 | Meaningful UI uses `frontend-design-quality` and design acceptance criteria | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Gate pointer |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 6 | Design workflow, principles, checklist | skill | `.cursor/skills/frontend-design-quality/` | consolidated | Already the workflow and its references |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 7 | After implementation, `acceptance-verification` or `qa-verifier` | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Gate pointer |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 7 | Verification procedure and report | skill | `.cursor/skills/acceptance-verification/` | consolidated | Already the workflow |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 7 | Independent PASS/FAIL/BLOCKED review | subagent | `.cursor/agents/qa-verifier.md` | consolidated | Already the read-only verifier |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 8 | Rendered UI goes to `design-critic` | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Delegation only |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 8 | Design critique criteria | subagent | `.cursor/agents/design-critic.md` | consolidated | Already the independent reviewer |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 9 | Reviewers are read-only; implementing agent fixes; fresh verification pass | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Short gate. Agent files already set `readonly: true` |
| `.cursor/rules/00-spec-first-workflow.mdc` | Step 10 | No completion without evidence for every must-pass criterion and zero blocking findings | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Finish condition |
| `.cursor/rules/00-spec-first-workflow.mdc` | Skip | Trivial skip list: copy, typos, formatting, isolated fix with no behavioral, contract, UX, data, architecture, dependency, or regression risk | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Prevents both over-process and silent skips |
| `.cursor/rules/00-spec-first-workflow.mdc` | Skip | When uncertain, write a compact spec | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Same threshold as the skill fast path |
| `.cursor/rules/00-spec-first-workflow.mdc` | Drift | New requirement or product decision updates the spec before that behavior is coded | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Spec remains the contract |
| `.cursor/rules/00-spec-first-workflow.mdc` | Drift | Code must not silently become the source of truth | core-rule | `.cursor/rules/core/00-delivery-contract.mdc` | preserved | Same rule, shorter sentence |
| `.cursor/rules/stack.mdc` | Identity | Next.js App Router or Vite + React template; do not replace it | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | preserved | Applies to every task |
| `.cursor/rules/stack.mdc` | Defaults | TypeScript strict, Tailwind + `cn`/`twMerge`, Biome, Fallow, Vitest, Playwright, Tanstack Query, Zod | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | preserved | Stack lock, not a how-to |
| `.cursor/rules/stack.mdc` | State | Context / `useState` before Zustand | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | preserved | Priority is universal |
| `.cursor/rules/stack.mdc` | State | Zustand only under the listed conditions, justified in the PR | contextual-rule | `.cursor/rules/frontend/state-management.mdc` | consolidated | Conditions are file-scoped |
| `.cursor/rules/stack.mdc` | Scope | i18n and a11y are in-scope standards, with the index as the long form | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | rewritten-equivalent | One-line scope lock; details stay in scoped rules and `docs/frontend/` |
| `.cursor/rules/stack.mdc` | Out of scope | No Storybook | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | preserved | Template boundary |
| `.cursor/rules/stack.mdc` | UI kit | shadcn/ui primitives only (also stated in `AGENTS.md`) | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | consolidated | Stops a second component library even when `package.json` is the file being edited |
| `.cursor/rules/stack.mdc` | Layout | Prefer existing `src/` and `e2e/` folders | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | rewritten-equivalent | One-line ban on parallel roots |
| `.cursor/rules/stack.mdc` | Layout | Folder roles | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | consolidated | Already the layout rule |
| `.cursor/rules/stack.mdc` | Finish | Lint, types, and tests stay green | core-rule | `.cursor/rules/core/10-project-constraints.mdc` | preserved | Finish bar for any code change |
| `.cursor/rules/stack.mdc` | Finish | Biome, Fallow, script names, no unexplained `any` / `@ts-ignore` | contextual-rule | `.cursor/rules/tooling/code-quality.mdc` | consolidated | Tool-specific |
| `.cursor/rules/stack.mdc` | API | Validate API data with Zod in `fetchers/` | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | consolidated | Already specified there |
| `.cursor/rules/stack.mdc` | Styling | Use `cn` for class merges | contextual-rule | `.cursor/rules/frontend/styling.mdc` | consolidated | Already specified there |
| `.cursor/rules/stack.mdc` | UI | Semantic, keyboard-accessible UI | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | consolidated | Already specified there |
| `.cursor/rules/stack.mdc` | Copy | No inline display strings; locale catalogs or `*.constants.ts` | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | consolidated | Already specified there |
| `.cursor/rules/stack.mdc` | Index | Full standards live in `docs/frontend/INDEX.md` | reference | `docs/frontend/INDEX.md` | preserved | Pointer kept on the constraints rule |
| `.cursor/rules/project-structure.mdc` | Layout | shadcn primitives only in `src/components/ui/` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | Same requirement, glob now matches both templates |
| `.cursor/rules/project-structure.mdc` | Layout | Domain UI in `src/components/[domain]/`; shared UI at ≥2 domains in `src/components/shared/` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Features in `src/features/[domain]/` with the same types/constants layout | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Features compose UI and wire hooks, fetchers, and Next.js server actions | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | consolidated | Was in `AGENTS.md` and `docs/frontend/conventions/PROJECT_STRUCTURE.md`; missing from the old `.mdc` |
| `.cursor/rules/project-structure.mdc` | Layout | HTTP + Zod in `src/fetchers/[domain]/` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Tanstack Query hooks in `src/hooks/[domain]/`, usable from components and features | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Context and app-wide providers in `src/providers/`, composed in `AppProviders` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | `cn` lives in `src/lib/utils.ts` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Locale config in `src/i18n/`; catalogs in `src/messages/` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Global utils, types, constants in `src/utils`, `src/types`, `src/constants`; utils usable from components and features | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | E2E in `e2e/[domain]/[path].spec.ts` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Layout | Next.js routes in `src/app/`; Vite screens in `src/pages/` | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Data | Do not call Tanstack Query or `fetch` from components; go through hooks and fetchers, usually via a feature | contextual-rule | `.cursor/rules/frontend/project-structure.mdc` | preserved | |
| `.cursor/rules/project-structure.mdc` | Details | Long-form layout | reference | `docs/frontend/conventions/PROJECT_STRUCTURE.md` | preserved | Pointer kept |
| `.cursor/rules/component-structure.mdc` | Encapsulation | Component-only types, utils, and constants stay in the component folder | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | |
| `.cursor/rules/component-structure.mdc` | UI file | `ComponentName.tsx` is UI-only; types in `*.types.ts`; constants in `*.constants.ts` | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | |
| `.cursor/rules/component-structure.mdc` | Minimization | Sibling files only when they have content | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | |
| `.cursor/rules/component-structure.mdc` | Mirroring | Subcomponents nest to mirror the UI tree; same layout under `src/features/` | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | |
| `.cursor/rules/component-structure.mdc` | Split | Presentational UI in `components/`; composition and data wiring in `features/` | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | |
| `.cursor/rules/component-structure.mdc` | Tree | Example folder tree | contextual-rule | `.cursor/rules/frontend/component-structure.mdc` | preserved | Disambiguates the layout |
| `.cursor/rules/component-structure.mdc` | Exports | Prefer named exports | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | consolidated | Weaker than the engineering standard; see Conflicts |
| `.cursor/rules/component-structure.mdc` | Styling | Merge classes with `cn` | contextual-rule | `.cursor/rules/frontend/styling.mdc` | consolidated | Duplicate |
| `.cursor/rules/component-structure.mdc` | A11y | Interactive UI must be accessible | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | consolidated | Duplicate |
| `.cursor/rules/component-structure.mdc` | Copy | No inline display strings | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | consolidated | Duplicate |
| `.cursor/rules/component-structure.mdc` | Details | Long-form component, a11y, and i18n docs | reference | `docs/frontend/conventions/COMPONENT_STRUCTURE.md` | preserved | A11y and i18n docs stay linked from their own rules |
| `.cursor/rules/naming.mdc` | Symbols | `camelCase` functions, variables, hooks (`useDebounce.ts`) | contextual-rule | `.cursor/rules/frontend/naming.mdc` | preserved | |
| `.cursor/rules/naming.mdc` | Symbols | `PascalCase` components and component folders | contextual-rule | `.cursor/rules/frontend/naming.mdc` | preserved | |
| `.cursor/rules/naming.mdc` | Files | `kebab-case` non-component folders and assets | contextual-rule | `.cursor/rules/frontend/naming.mdc` | preserved | |
| `.cursor/rules/naming.mdc` | Files | `ComponentName.tsx`, `ComponentName.test.ts`, optional `.types.ts` / `.constants.ts` | contextual-rule | `.cursor/rules/frontend/naming.mdc` | preserved | |
| `.cursor/rules/naming.mdc` | Details | Long-form naming | reference | `docs/frontend/conventions/NAMING.md` | preserved | |
| `.cursor/rules/styling.mdc` | Merge | `cn` from `src/lib/utils.ts` (`clsx` + `twMerge`) for conditional and merged `className`s | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | |
| `.cursor/rules/styling.mdc` | Example | No string-ternary or concatenated `className` outside `cn` | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | Example disambiguates the project helper |
| `.cursor/rules/styling.mdc` | API | Always merge consumer `className` through `cn` | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | |
| `.cursor/rules/styling.mdc` | Conditionals | `isX && "utility"` or small ternaries inside `cn` | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | |
| `.cursor/rules/styling.mdc` | Variants | Many visual variants use `cva` or variant maps | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | |
| `.cursor/rules/styling.mdc` | CSS | Tailwind utilities first; bespoke CSS only when needed | contextual-rule | `.cursor/rules/frontend/styling.mdc` | preserved | |
| `.cursor/rules/styling.mdc` | Details | Long-form styling | reference | `docs/frontend/conventions/STYLING.md` | preserved | |
| `.cursor/rules/accessibility.mdc` | Target | WCAG 2.2 AA intent; semantic HTML before `aria-*` patches | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Controls | Real controls; no `div`/`span` click handlers for actions | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Names | Every interactive control has an accessible name | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Icons | Icon-only buttons have a translated `aria-label`; decorative icons are `aria-hidden` | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Forms | Labels and errors use `htmlFor`, `aria-describedby`, `aria-invalid` | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Keyboard | Tab, Enter, Space, Escape parity; visible focus; no traps | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Overlays | Dialogs and menus use shadcn/Radix when possible | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Color | Do not use color alone to convey meaning | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Motion | Non-essential animation respects `prefers-reduced-motion` | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | preserved | |
| `.cursor/rules/accessibility.mdc` | Tests | Prefer `getByRole` plus name | contextual-rule | `.cursor/rules/testing/testing.mdc` | consolidated | Query choice is a test-file rule; the name requirement stays in accessibility |
| `.cursor/rules/accessibility.mdc` | Details | Long-form accessibility | reference | `docs/frontend/conventions/ACCESSIBILITY.md` | preserved | |
| `.cursor/rules/engineering.mdc` | Size | One responsibility; prefer about 20 lines and two indentation levels | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Exports | Named exports only; no `React.FC` | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | rewritten-equivalent | Scoped to components, hooks, and utils so it matches the doc and the Next.js template |
| `.cursor/rules/engineering.mdc` | Exports | No default exports for app code | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | rewritten-equivalent | See Conflicts. Framework-required default exports stay |
| `.cursor/rules/engineering.mdc` | State | Prefer derived values over storing props or computed data in state | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Effects | `useEffect` uses a named inner function and complete dependencies | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Errors | Separate `try`/`catch`; do not return `null` or `undefined` when a clearer type exists | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Utils | Pure helpers in `src/utils` | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Comments | Comments explain why, not what | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | preserved | |
| `.cursor/rules/engineering.mdc` | Details | Long-form engineering, including hook and `useMemo` guidance | reference | `docs/frontend/conventions/ENGINEERING.md` | preserved | Not copied into the rule; the doc remains the reference |
| `.cursor/rules/testing.mdc` | Pyramid | Many unit tests, few end-to-end happy paths | contextual-rule | `.cursor/rules/testing/testing.mdc` | preserved | |
| `.cursor/rules/testing.mdc` | Unit | Vitest + Testing Library, colocated `*.test.ts(x)`, prefer `getByRole` / label queries | contextual-rule | `.cursor/rules/testing/testing.mdc` | preserved | |
| `.cursor/rules/testing.mdc` | Unit | Update tests when behavior changes | contextual-rule | `.cursor/rules/testing/testing.mdc` | consolidated | Was an `AGENTS.md` definition-of-done line, not in the old testing rule |
| `.cursor/rules/testing.mdc` | E2E | Playwright under `e2e/[domain]/` | contextual-rule | `.cursor/rules/testing/testing.mdc` | preserved | |
| `.cursor/rules/testing.mdc` | Shape | Given / When / Then structure and example | contextual-rule | `.cursor/rules/testing/testing.mdc` | preserved | Example disambiguates the required shape |
| `.cursor/rules/testing.mdc` | Details | Testing convention and tool docs | reference | `docs/frontend/conventions/TESTING_CONVENTION.md`, `docs/frontend/tools/TESTING.md` | preserved | |
| `.cursor/rules/react.mdc` | Components | Functional components only | contextual-rule | `.cursor/rules/frontend/react.mdc` | preserved | |
| `.cursor/rules/react.mdc` | Exports | Named exports; no `React.FC`; no default exports for app components | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | consolidated | Canonical export rule, with the Next.js exception |
| `.cursor/rules/react.mdc` | Next | Server Components by default; `"use client"` only when required | contextual-rule | `.cursor/rules/frontend/react.mdc` | rewritten-equivalent | Now names the triggers: state, effects, browser APIs, event handlers |
| `.cursor/rules/react.mdc` | Vite | Vite screens are client components | contextual-rule | `.cursor/rules/frontend/react.mdc` | rewritten-equivalent | Makes the variant split explicit; routes already lived in project-structure |
| `.cursor/rules/react.mdc` | Styling | `cn`, no string-ternary `className` | contextual-rule | `.cursor/rules/frontend/styling.mdc` | consolidated | Duplicate |
| `.cursor/rules/react.mdc` | A11y | Semantic HTML and keyboard access | contextual-rule | `.cursor/rules/frontend/accessibility.mdc` | consolidated | Duplicate |
| `.cursor/rules/react.mdc` | Copy | No inline display strings | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | consolidated | Duplicate |
| `.cursor/rules/react.mdc` | Hooks | Shared interactive logic moves into hooks | contextual-rule | `.cursor/rules/frontend/react.mdc` | preserved | |
| `.cursor/rules/react.mdc` | Effects | `useEffect` named inner function | contextual-rule | `.cursor/rules/frontend/engineering.mdc` | consolidated | Duplicate |
| `.cursor/rules/react.mdc` | Details | React and engineering docs | reference | `docs/frontend/tools/REACT.md` | preserved | Pointer kept from the React rule |
| `.cursor/rules/i18n.mdc` | Copy | No user-visible or accessibility string literals in components, pages, or features | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Copy | Locale catalogs via `t` / `getTranslations`, or `*.constants.ts` / `src/constants/`; the project chooses | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Copy | Prefer catalogs when locales matter | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Exceptions | Class names, URLs, analytics ids, enums, and test fixtures may be literals | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Next | `next-intl` with `src/i18n/request.ts` and `setLocale` cookie | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Vite | `i18next` + `react-i18next` with `src/i18n/setup.ts` | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | UI | Shared `components/shared/LocaleSwitcher` | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Formatting | Stable keys; `Intl` or the library for dates, numbers, plurals; document `lang` | contextual-rule | `.cursor/rules/frontend/i18n.mdc` | preserved | |
| `.cursor/rules/i18n.mdc` | Details | Long-form i18n | reference | `docs/frontend/tools/I18N.md` | preserved | |
| `.cursor/rules/code-quality.mdc` | Lint | Biome; do not mix ESLint and Prettier on the same tree unless documented | contextual-rule | `.cursor/rules/tooling/code-quality.mdc` | preserved | |
| `.cursor/rules/code-quality.mdc` | Dead code | Fallow (`fallow dead-code`) as part of `check` | contextual-rule | `.cursor/rules/tooling/code-quality.mdc` | preserved | |
| `.cursor/rules/code-quality.mdc` | Types | No unexplained `any` or `@ts-ignore` | contextual-rule | `.cursor/rules/tooling/code-quality.mdc` | preserved | |
| `.cursor/rules/code-quality.mdc` | CI | `build`, `lint`, `typecheck`, `test`, `test:e2e` stay green | contextual-rule | `.cursor/rules/tooling/code-quality.mdc` | preserved | Finish bar in the core rule stays shorter |
| `.cursor/rules/code-quality.mdc` | Details | Long-form code quality | reference | `docs/frontend/tools/CODE_QUALITY.md` | preserved | |
| `.cursor/rules/state-management.mdc` | Default | `useState` + Context for simple shared state | contextual-rule | `.cursor/rules/frontend/state-management.mdc` | preserved | |
| `.cursor/rules/state-management.mdc` | Zustand | Only when re-renders hurt, state must persist, middleware is required, or global state has many actions | contextual-rule | `.cursor/rules/frontend/state-management.mdc` | preserved | |
| `.cursor/rules/state-management.mdc` | PR | Justify Zustand in the PR description | contextual-rule | `.cursor/rules/frontend/state-management.mdc` | preserved | |
| `.cursor/rules/state-management.mdc` | Details | Long-form state | reference | `docs/frontend/tools/STATE_MANAGEMENT.md` | preserved | |
| `.cursor/rules/api-communication.mdc` | Fetchers | `fetchers/[domain]/`: typed HTTP + Zod, no React | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | preserved | |
| `.cursor/rules/api-communication.mdc` | Hooks | `hooks/[domain]/`: Tanstack Query wrapping fetchers; components may import hooks | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | preserved | |
| `.cursor/rules/api-communication.mdc` | Utils | Pure mapping helpers in `utils/[domain]/` | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | preserved | |
| `.cursor/rules/api-communication.mdc` | Types | Export types with `z.infer<typeof Schema>` | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | preserved | Example kept |
| `.cursor/rules/api-communication.mdc` | Trust | Never trust raw response shapes in UI | contextual-rule | `.cursor/rules/frontend/api-communication.mdc` | preserved | |
| `.cursor/rules/api-communication.mdc` | Details | Long-form API | reference | `docs/frontend/tools/API_COMMUNICATION.md` | preserved | |
| `AGENTS.md` | All sections | Condensed restatement of stack, structure, naming, components, hooks, tests, and definition of done | core-rule | `AGENTS.md` index plus the rules above | consolidated | Always-on duplicate. Material lines moved into the canonical rules listed in this table. `AGENTS.md` remains a short map |

## Duplicate guidance consolidated

| Requirement | Former copies | Canonical instruction |
|---|---|---|
| Spec-first procedure | `00-spec-first-workflow.mdc` and `spec-driven-development` | Skill holds the procedure. `core/00-delivery-contract.mdc` holds the gate |
| `cn` / no string-ternary `className` | `stack.mdc`, `component-structure.mdc`, `react.mdc`, `styling.mdc`, `AGENTS.md` | `frontend/styling.mdc` |
| No inline display strings | `stack.mdc`, `component-structure.mdc`, `react.mdc`, `i18n.mdc`, `AGENTS.md` | `frontend/i18n.mdc` |
| Semantic, keyboard-accessible UI | `stack.mdc`, `component-structure.mdc`, `react.mdc`, `accessibility.mdc`, `AGENTS.md` | `frontend/accessibility.mdc` |
| Named exports, no `React.FC` | `component-structure.mdc`, `engineering.mdc`, `react.mdc`, `AGENTS.md` | `frontend/engineering.mdc` |
| `useEffect` shape | `engineering.mdc`, `react.mdc`, `AGENTS.md` | `frontend/engineering.mdc` |
| Zod on API responses | `stack.mdc`, `api-communication.mdc`, `AGENTS.md` | `frontend/api-communication.mdc` |
| Context before Zustand | `stack.mdc`, `state-management.mdc`, `AGENTS.md` | Priority in `core/10-project-constraints.mdc`; conditions in `frontend/state-management.mdc` |
| Green lint, types, tests | `stack.mdc`, `code-quality.mdc`, `AGENTS.md` | Finish bar in `core/10-project-constraints.mdc`; Biome, Fallow, and script names in `tooling/code-quality.mdc` |
| `getByRole` | `accessibility.mdc`, `testing.mdc` | Query rule in `testing/testing.mdc`; accessible name stays in `frontend/accessibility.mdc` |
| Reviewer personas | Delegation lines in `00-spec-first-workflow.mdc` | Persona text already lived only in `.cursor/agents/` |

## Conflicts

### Default exports vs Next.js route modules

- Sources: `engineering.mdc` ("no default exports for app code"), `react.mdc` ("no default exports for app components"), `docs/frontend/conventions/ENGINEERING.md` ("no default exports for app components/hooks/utils").
- Repository evidence: components, features, and `AppProviders` use named exports. `nextjs-template/src/app/page.tsx`, `nextjs-template/src/app/layout.tsx`, and `nextjs-template/src/i18n/request.ts` use default exports because Next.js and `next-intl` require them. Tool configs (`next.config.ts`, `vite.config.ts`, `vitest.config.ts`, `playwright.config.ts`) also default-export. No `React.FC` usage.
- Chosen behavior: named exports only for components, hooks, and utils. No `React.FC`. Default export only where the framework requires it: Next.js route modules and `src/i18n/request.ts`. Tool configs sit outside the engineering glob, so the rule does not try to rewrite them.

### "Prefer" named exports vs named exports only

- Sources: `component-structure.mdc` ("Prefer named exports") vs `engineering.mdc`, `AGENTS.md`, and `ENGINEERING.md` ("named exports only").
- Chosen behavior: named exports only, with the framework exception above. The component doc's "prefer" wording was the weaker duplicate.

### Globs did not match this repository

- Sources: `project-structure.mdc`, `naming.mdc`, `component-structure.mdc`, and `api-communication.mdc` used `src/**` and `e2e/**` at the repository root.
- Repository evidence: application code lives at `nextjs-template/src`, `vite-template/src`, `nextjs-template/e2e`, and `vite-template/e2e`. There is no root `src/` or `e2e/`.
- Chosen behavior: every file-scoped glob lists the root paths (for a copied single-app repo) and both template roots (for this repo).

No conflict was left as `needs-human-decision`.

## Always-on context review

Measured context, including `AGENTS.md`, which Cursor also injects on every turn:

| Surface | Before | After |
|---|---:|---:|
| `alwaysApply: true` rule lines | 46 | 39 |
| `AGENTS.md` lines | 47 | 18 |
| Combined always-on lines | 93 | 57 |

Active `.mdc` files are 289 lines total, down from 295, after duplicate sentences were removed. Glob lines are longer because each pattern now lists both template roots and a root `src/` / `e2e/` path.

What remains always on, and why:

- `core/00-delivery-contract.mdc` — the non-trivial delivery sequence. Violating it produces implementation without a contract. It does not contain the spec template, review checklist, or implementation procedure.
- `core/10-project-constraints.mdc` — template identity, the locked stack, no Storybook, no second component library, no parallel source roots, and the finish bar. These are wrong on every task if missed.
- `AGENTS.md` — a short map so agents that read it still find the gate, the stack lock, and the scoped rules. It no longer restates structure, naming, components, hooks, or tests.

File-scoped standards were removed from always-on context: Zod placement, `cn`, accessibility mechanics, copy placement, and folder-by-folder roles.

## Skills extracted

No new skill was created. The only multi-step workflow in the rules was spec-first delivery, and it already had a home:

| Skill | What moved out of the always-on rule | Trigger |
|---|---|---|
| `spec-driven-development` | Spec template, acceptance-criteria method, critic loop, implementation plan, status model, fast path | Non-trivial product, frontend, refactor, integration, or behavioral bug work |
| `frontend-design-quality` | Design direction, design acceptance criteria, rendered review | Meaningful visual or interaction work |
| `acceptance-verification` | Evidence matrix and PASS/FAIL/BLOCKED procedure | After implementation, before claiming completion |

The always-on file keeps the sequence `request -> spec -> critique -> implementation plan -> implementation -> verification` and the names of those skills.

## Subagents extracted

No new subagent was created. The engineering rules did not contain a reviewer persona. `00-spec-first-workflow.mdc` only delegated to reviewers that already exist. Independent context stays valuable because each one judges work it did not just write:

| Subagent | Role |
|---|---|
| `spec-critic` | Challenges the spec before code |
| `architecture-critic` | Challenges the plan before code |
| `design-critic` | Challenges rendered UI after implementation |
| `qa-verifier` | Checks acceptance evidence without editing |

All four remain `readonly: true`.

## Removed instructions

No material requirement was dropped.

Sentences removed from a non-canonical file were duplicates of a rule that still states them. Those rows use status `consolidated` above.

Wording that changed on purpose:

- "No default exports for app code" now allows framework-required default exports. A blanket ban contradicted `nextjs-template/src/app/page.tsx`, `layout.tsx`, and `src/i18n/request.ts`.
- "Prefer named exports" is now "named exports only" for components, hooks, and utils.

`docs/frontend/**` was not rewritten. Those files were already the long-form references.

## Glob validation

Checked against the tree on 2026-10-06.

| Rule | Must match | Evidence |
|---|---|---|
| `frontend/project-structure.mdc`, `frontend/naming.mdc` | Both template `src/` trees and both `e2e/` trees, plus root `src/` and `e2e/` for a copied app | `nextjs-template/src/**`, `vite-template/src/**`, `nextjs-template/e2e/example/home.spec.ts`, `vite-template/e2e/example/home.spec.ts` |
| `frontend/component-structure.mdc` | `components/` and `features/` under each `src/` | `ExamplePanel`, `ExampleSection`, `LocaleSwitcher` |
| `frontend/api-communication.mdc` | `fetchers/` and `hooks/` under each `src/` | `getExample.ts`, `useExampleQuery.ts` |
| `frontend/styling.mdc`, `frontend/accessibility.mdc`, `frontend/react.mdc` | `tsx`/`jsx` under each `src/`; styling also `css` | `globals.css`, `index.css`, component tsx files |
| `frontend/engineering.mdc`, `frontend/i18n.mdc`, `frontend/state-management.mdc`, `tooling/code-quality.mdc` | App TypeScript under each `src/`, not `package.json` | Template source. i18n also includes `src/messages/*.json`. Code quality also includes `biome.json` and `.fallowrc.json` |
| `testing/testing.mdc` | Colocated tests and e2e specs | Existing `**/*.{test,spec}.{ts,tsx}` already matches `formatLabel.test.ts`, `ExamplePanel.test.tsx`, and `home.spec.ts` |

Globs are one quoted, comma-separated list, which is the form Cursor documents. Patterns do not use `{ts,tsx}` brace groups, because a comma separates patterns. Root `src/**` and `e2e/**` entries stay so the same rules still attach after someone copies them into a single-app repository. A Python check split each list on commas and matched real template paths: component, fetcher, hook, message catalog, CSS, Playwright spec, `biome.json`, and `.fallowrc.json`. `package.json` does not match the i18n or code-quality rules. The same check confirmed negative cases, including fetchers against the component rule and page files against the testing rule.

## Verification

- [x] Every original rule file accounted for
- [x] Every material requirement mapped
- [x] No contradictory active rules remain
- [x] Always-on content reduced or justified
- [x] Globs validated against repository paths
- [x] Skills are discoverable and focused
- [x] Reviewer agents are focused and non-overlapping
- [x] Legacy originals preserved outside active rule path
