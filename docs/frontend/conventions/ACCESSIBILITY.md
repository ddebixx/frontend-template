# Accessibility (a11y)

Accessibility is part of the Definition of Done — not a follow-up ticket.

Aim for **WCAG 2.2 AA** for product UI. Prefer correct semantics over `aria-*` patches.

## Principles

1. **Semantic HTML first** — `button`, `a`, `label`, `nav`, `main`, `heading` levels, lists, forms. Don’t rebuild these with `div` + click handlers.
2. **Keyboard parity** — every mouse/pointer action works with keyboard; visible focus; no keyboard traps.
3. **Name, role, value** — interactive controls expose an accessible name and correct role (prefer Testing Library `getByRole`).
4. **Don’t rely on color alone** — errors, required fields, and status need text or icons with labels.
5. **Motion** — respect `prefers-reduced-motion` for non-essential animation.

## Must-haves when shipping UI

| Area | Expectation |
| --- | --- |
| Images | Meaningful `alt`; decorative images → empty `alt` |
| Icons-only controls | Accessible name via `aria-label` / visually hidden text |
| Forms | `<label htmlFor>` (or wrapping label); associate errors with `aria-describedby` / `aria-invalid` |
| Dialogs / menus | Focus move in on open, restore on close; Escape closes; use Radix/shadcn primitives when possible |
| Live updates | `aria-live` (or role=`status`/`alert`) for toasts and async status |
| Skip link | Skip to main content on multi-section app shells |
| Language | Root `lang` (and locale when i18n is on) matches the page |

## Anti-patterns

```tsx
// ❌ Div as button
<div onClick={onSave}>Save</div>

// ✅ Real control
<button type="button" onClick={onSave}>Save</button>
```

```tsx
// ❌ Clickable icon with no name
<button type="button" onClick={onClose}><XIcon /></button>

// ✅ Named control
<button type="button" onClick={onClose} aria-label={t("close")}>
  <XIcon aria-hidden />
</button>
```

## Testing

- Prefer queries by **role + name** (`getByRole("button", { name: /save/i })`).
- Cover keyboard paths for custom widgets (Tab, Enter/Space, Escape, arrows when applicable).
- E2E: smoke critical flows with keyboard where the happy path is interactive.

## When building custom widgets

If you can’t use a shadcn/Radix primitive, follow [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/) for roles, states, and keyboard behavior — and document the pattern in the PR.
