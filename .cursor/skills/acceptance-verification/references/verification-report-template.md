# Verification report template

```md
# Verification report: <change>

Spec: <path>
Verifier: independent review
Verdict: PASS | FAIL | BLOCKED

## Summary
One short paragraph covering overall result and highest-risk finding.

## Acceptance matrix
| AC | Requirement | Priority | Evidence | Result | Notes |
|---|---|---|---|---|---|
| AC-1 | FR-1 | must | ... | PASS | ... |
| AC-2 | NFR-1 | must | ... | FAIL | ... |

## Automated checks
| Check | Command | Result | Notes |
|---|---|---|---|
| Typecheck | ... | PASS | ... |
| Tests | ... | PASS/FAIL | ... |

## Behavioral / runtime checks
- Scenario: ...
  - Expected: ...
  - Observed: ...
  - Result: PASS/FAIL/BLOCKED

## Findings
### Critical / High
- ...

### Medium / Low
- ...

## Specification gaps
- ...

## Scope / regression observations
- ...

## Required actions before PASS
1. ...
```

Keep the report evidence-oriented. Do not fill it with general praise or style commentary unrelated to acceptance.
