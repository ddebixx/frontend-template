# Implementation-plan template

Derive the plan from an approved specification. Do not use the plan to introduce new product requirements.

```md
# Implementation plan: <change>

Spec: <path>
Spec status: Ready

## Approach
One concise paragraph explaining the implementation strategy and why it fits the existing architecture.

## Change map
| Step | Files / modules | Requirements | Acceptance criteria | Validation |
|---|---|---|---|---|
| 1 | ... | FR-1 | AC-1 | ... |
| 2 | ... | FR-2, NFR-1 | AC-2 | ... |

## Detailed steps
1. ...
2. ...

## Reuse / integration points
Existing components, services, utilities, patterns, contracts, and tests that should be reused.

## Risks
- ...

## Migration / compatibility
Only when relevant.

## Test plan
Commands, automated coverage, browser scenarios, and manual evidence expected before completion.

## Rollback / failure containment
Only when the change has operational risk.
```

Keep plans implementation-focused and short enough to remain useful while coding.
