# API communication

## Layers

| Layer | Path | Role |
| --- | --- | --- |
| Fetchers | `src/fetchers/[domain]/` | HTTP + Zod schemas/parse (no React) |
| Hooks | `src/hooks/[domain]/` | Tanstack Query wrapping fetchers; usable from components |
| Utils | `src/utils/[domain]/` | Pure helpers (mapping, formatting); usable from fetchers and components |

UI never calls `fetch` or constructs Query options inline — use a hook (client) or a fetcher (server).

## Validation

Validate responses with **Zod**.

- Schemas live next to fetchers in `src/fetchers/[domain]/`
- Derive types with `z.infer<typeof Schema>`
- Don’t trust API shapes at runtime without parsing
