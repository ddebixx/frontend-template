# Cursor Rules Audit Inventory

> Deterministic inventory only. Workflow/review signal counts are heuristic; perform semantic classification before migration.

- Rule files: **14**
- Total rule lines: **295**
- Lines in `alwaysApply: true` rules: **46**

| Rule | Current trigger | Lines | Workflow signals | Review signals | Globs | Description |
|---|---:|---:|---:|---:|---|---|
| `.cursor/rules/00-spec-first-workflow.mdc` | always-on | 25 | 8 | 9 | `` | Enforce specification-first delivery and independent quality gates for non-trivial changes. |
| `.cursor/rules/accessibility.mdc` | file-scoped | 21 | 0 | 0 | `"**/*.{tsx,jsx}"` | Accessibility requirements for UI — semantic HTML, keyboard, names |
| `.cursor/rules/api-communication.mdc` | file-scoped | 20 | 0 | 0 | `src/fetchers/**/*,src/hooks/**/*` | Fetchers, Tanstack Query hooks, and Zod validation for API layers |
| `.cursor/rules/code-quality.mdc` | file-scoped | 14 | 0 | 0 | `"**/*.{ts,tsx,js,jsx,json}"` | Biome, Fallow, and CI quality expectations |
| `.cursor/rules/component-structure.mdc` | file-scoped | 28 | 0 | 0 | `src/components/**/*,src/features/**/*` | Component folder encapsulation; types and constants outside the component file |
| `.cursor/rules/engineering.mdc` | file-scoped | 16 | 0 | 0 | `"**/*.{ts,tsx,js,jsx}"` | Engineering practices — SRP, named exports, useEffect, errors |
| `.cursor/rules/i18n.mdc` | file-scoped | 29 | 0 | 0 | `"**/*.{ts,tsx,jsx,js,json}"` | No inline display strings — use locales or constants; i18n stack wiring |
| `.cursor/rules/naming.mdc` | file-scoped | 14 | 0 | 0 | `src/**/*,e2e/**/*` | Naming conventions for files, folders, and symbols |
| `.cursor/rules/project-structure.mdc` | file-scoped | 23 | 0 | 0 | `src/**/*,e2e/**/*` | Project folder layout for Vite and Next.js variants |
| `.cursor/rules/react.mdc` | file-scoped | 16 | 0 | 0 | `"**/*.{tsx,jsx}"` | React patterns for Vite and Next.js App Router |
| `.cursor/rules/stack.mdc` | always-on | 21 | 2 | 0 | `` | Core frontend stack and quality gates for this template |
| `.cursor/rules/state-management.mdc` | file-scoped | 18 | 0 | 0 | `"**/*.{ts,tsx}"` | When to use Context vs Zustand |
| `.cursor/rules/styling.mdc` | file-scoped | 24 | 1 | 0 | `"**/*.{tsx,jsx,css}"` | Tailwind class composition via cn (clsx + twMerge), not string ternaries |
| `.cursor/rules/testing.mdc` | file-scoped | 26 | 1 | 0 | `"**/*.{test,spec}.{ts,tsx}"` | Vitest and Playwright BDD testing conventions |

## Interpretation

- High workflow signals: inspect for extraction into a skill.
- High review signals: inspect for extraction into a subagent.
- Large always-on files: inspect for contextual scoping or references.
- Do not migrate from these heuristics alone; read the rule content.

## Snapshot

Generated from the flat `.cursor/rules/*.mdc` files before any move or deletion. There is no `.cursor/commands/` directory. Semantic classification is in `docs/ai/rules-migration-report.md`. Do not regenerate this file after the migration; a later run would inventory the new tree and erase the before-state counts.
