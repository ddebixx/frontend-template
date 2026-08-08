# State management

## Default

React **`useState` + Context** for:

- Theme / preferences
- Simple shared UI state
- State that doesn’t update at high frequency

Put Context providers (and other app-wide React providers) under `src/providers/`. Compose them in `AppProviders` and mount once from the app entry — not under `components/`.

## Escalate to Zustand when

- Context re-renders become a performance problem
- State must persist (e.g. localStorage)
- You need middleware (devtools, logging)
- Multi-action complex global state

Document why Zustand was introduced in the PR description.
