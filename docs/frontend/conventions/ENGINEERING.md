# Engineering practices

Small, readable units keep the template easy to change. Apply these when writing app code (not generated shadcn primitives unless you touch them).

## Structure

- **One responsibility** per function / component / module
- Prefer **top-to-bottom** flow: do A → then B → then C
- Prefer **pure helpers** in `src/utils`; side effects only for the unit’s main job
- Avoid extra abstraction layers “for later”

## Size

- Prefer writing small functions
- Split when a function does more than one thing
- Prefer a single options object over long positional argument lists

## Components & modules

- **Named exports only** — no `default` exports for app components/hooks/utils
- **No `React.FC`** — type props explicitly on the function
- Props types live in `*.types.ts` for component/feature folders (see component structure)

## Hooks

- File name: `useSomething.ts`
- One responsibility; no JSX inside hooks
- Prefer **derived values** over storing props or computed data in state
- `useMemo` / `useCallback` only when justified (expensive work or stable deps for deep children)

### `useEffect`

Extract a **named inner function** so the effect reads as documentation; keep dependency arrays complete and minimal.

```tsx
// ❌ Opaque effect
useEffect(() => {
  if (!attachment) return;
  setCustomName(attachment.customName || attachment.fileName);
}, [attachment]);

// ✅ Named intent
useEffect(() => {
  function initializeFormOnAttachmentChange() {
    if (!attachment) {
      return;
    }

    setCustomName(attachment.customName || attachment.fileName);
  }

  initializeFormOnAttachmentChange();
}, [attachment]);
```

Avoid effects when the value can be derived during render.

## Errors & nullability

- Use `try` / `catch`; keep error handling **separated** from the happy path
- Prefer result types / early returns over returning or threading `null` / `undefined` when a clearer type exists
- Fetchers throw **structured** errors (see API communication)

## Comments

Comment **why**, not what. Prefer clearer names over explanatory noise.
