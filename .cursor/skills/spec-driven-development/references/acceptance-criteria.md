# Acceptance-criteria standard

Acceptance criteria are the completion contract, not a restatement of implementation tasks.

## Write criteria that are

- Observable: describe externally visible behavior or a measurable quality property.
- Atomic: one meaningful behavior per criterion whenever practical.
- Testable: state how a reviewer could decide pass or fail.
- Traceable: reference the requirement(s) the criterion proves.
- Boundary-aware: cover relevant errors, empty/loading states, permissions, responsive behavior, accessibility, and degraded conditions.
- Implementation-neutral unless the implementation detail is itself a requirement.

## Prefer

`AC-4 [must]: Given a signed-out visitor opens a protected route, when the route resolves, then the visitor is redirected to sign-in and the originally requested URL is preserved for post-login return.`

Over

`AC-4: Add auth redirect middleware.`

The second describes a coding task, not an acceptance outcome.

## Severity

- `must`: release/merge gate; failure means the change is incomplete.
- `should`: expected unless explicitly waived with a reason.
- `could`: optional enhancement; do not let it expand the required scope.

## Verification methods

Use the lightest reliable evidence for each criterion:

- automated unit/integration/E2E test
- successful build/typecheck/lint where relevant
- browser interaction with a recorded route/state
- visual inspection at defined viewports
- accessibility check plus keyboard interaction
- API request/response assertion
- explicit manual check when automation is not reasonable

Avoid vague criteria such as "works correctly", "looks professional", "is fast", or "handles errors". Convert each into observable behavior or a measurable threshold appropriate to the project.
