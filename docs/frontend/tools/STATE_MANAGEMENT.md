# State management

## Default

React **`useState` + Context** for:

- Theme / preferences
- Simple shared UI state
- State that doesn’t update at high frequency

## Escalate to Zustand when

- Context re-renders become a performance problem
- State must persist (e.g. localStorage)
- You need middleware (devtools, logging)
- Multi-action complex global state

Document why Zustand was introduced in the PR description.
