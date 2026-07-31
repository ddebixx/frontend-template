# OSS frontend standards

One repo with **standards + two ready templates** (Next.js App Router and Vite + React). Same conventions, stack, and quality gates — pick a template and ship.

## Purpose

Give open-source / greenfield frontends a shared baseline:

- folder layout and naming
- API via `fetchers/` + `hooks/` + Zod
- Biome, Fallow, Vitest, Playwright, Husky

So teams skip scaffolding debates and start consistent.

## Repo layout

```txt
docs/frontend/       # human-readable standards
.cursor/rules/       # Cursor rules mirroring those standards
AGENTS.md            # short agent summary
nextjs-template/     # Next.js App Router starter
vite-template/       # Vite + React starter
```

Both templates live on the **same branch** in this monorepo.

## Use a template

```bash
# from a copy of nextjs-template/ or vite-template/
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `dev` | local app |
| `build` | production build |
| `lint` / `format` | Biome |
| `typecheck` | TypeScript |
| `test` / `test:e2e` | Vitest / Playwright |
| `check` | lint + types + unit + Fallow |
| `prepare` | Husky (Biome on staged files via lint-staged) |

Minimal `example` samples under `src/components`, `src/features`, `src/fetchers`, `src/hooks`, etc. show the layout — replace them with your product code. shadcn primitives live in `src/components/ui/`.

## Standards

Start at [`docs/frontend/INDEX.md`](docs/frontend/INDEX.md).

**Stack defaults:** TypeScript strict · Tailwind · Biome · Fallow · Vitest · Playwright · Tanstack Query · Zod · Context/`useState` first (Zustand when needed). No Storybook in this pack.

Copy `docs/frontend/`, `.cursor/rules/`, and optionally `AGENTS.md` into a project that is not forked from these templates.
