# Styling (Tailwind + `cn`)

## Default

**Tailwind CSS** utilities first. Shared class merging goes through `cn` from `src/lib/utils.ts` (`clsx` + `twMerge`).

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

`twMerge` resolves conflicting utilities (`p-2` vs `p-4`); `clsx` handles conditional membership.

## Prefer `cn` over class ternaries

```tsx
// ❌ Fragile string ternary — conflicts and readability suffer
className={`px-4 py-2 ${isActive ? "bg-primary text-primary-foreground" : "bg-muted"} ${className ?? ""}`}

// ✅ cn / twMerge
className={cn(
  "px-4 py-2",
  isActive ? "bg-primary text-primary-foreground" : "bg-muted",
  className,
)}
```

Boolean short-circuit is fine inside `cn`:

```tsx
className={cn("rounded-md border", isInvalid && "border-destructive", className)}
```

## Rules

- Always merge consumer `className` via `cn(...)` so callers can override safely
- Avoid long nested ternaries for styles — split variants (`cva` / object maps) when there are many states
- Don’t hand-roll string concat for Tailwind classes when `cn` exists
- Bespoke CSS only when utilities can’t express the need; prefer CSS variables for theme tokens
