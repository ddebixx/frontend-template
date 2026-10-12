# Specifications

Use one specification per non-trivial unit of work. The spec is the durable contract between intent, implementation, and verification.

Default lifecycle:

`Draft -> Review -> Ready -> In Progress -> Verification -> Verified`

Use `Blocked` whenever missing information prevents a correct next step.

## File naming

Use a stable descriptive slug:

- `authentication-refresh-flow.md`
- `dashboard-empty-state.md`
- `checkout-tax-calculation.md`

Avoid task IDs alone when a descriptive name makes the document easier to find later.

## Rules

- Requirements use stable `FR-*` / `NFR-*` IDs.
- Acceptance criteria use stable `AC-*` IDs.
- After implementation begins, do not renumber IDs just for aesthetics.
- Update the decision log when behavior/scope changes during development.
- Verification evidence belongs in the same spec or a linked verification report.
- Small tasks may use a compact spec, but must still state scope, acceptance criteria, and verification.
