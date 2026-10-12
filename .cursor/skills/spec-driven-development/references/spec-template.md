# Specification template

Use the smallest set of sections needed for the task, but keep requirement IDs and acceptance criteria stable once implementation begins.

```md
# <Feature / change name>

Status: Draft
Owner: <optional>
Related issue: <optional>
Last updated: <date>

## 1. Context
Why this work exists. Describe current behavior, user/business problem, and evidence if available.

## 2. Outcome
What must be true when this work succeeds. Keep this solution-neutral where possible.

## 3. Goals
- G-1: ...

## 4. Non-goals
- NG-1: ...

## 5. Users and primary flows
Describe actors, entry points, happy paths, and important variants.

## 6. Functional requirements
- FR-1: ...
- FR-2: ...

## 7. Non-functional requirements
Only include relevant quality attributes.
- NFR-1 Accessibility: ...
- NFR-2 Performance: ...
- NFR-3 Security/privacy: ...
- NFR-4 Compatibility/responsiveness: ...

## 8. UX / design direction
Required for meaningful UI work.
- Visual intent:
- Information hierarchy:
- Interaction rules:
- Responsive behavior:
- Existing design-system constraints:
- References and what should be learned from them, not copied:

## 9. Data, API, and state contracts
Inputs, outputs, schemas, loading/error/empty states, persistence, caching, permissions, and compatibility requirements.

## 10. Edge cases and failure modes
- E-1: ...

## 11. Technical constraints and standards
Reference existing repository rules instead of duplicating them. Add task-specific constraints only.

## 12. Acceptance criteria
- AC-1 [must]: Given ..., when ..., then ...
  - Covers: FR-1
  - Verify with: ...
- AC-2 [must]: ...
- AC-3 [should]: ...

## 13. Test strategy
State the minimum evidence expected: unit, integration, E2E, browser, visual, build, typecheck, accessibility, or manual checks.

## 14. Risks and dependencies
- R-1: ...

## 15. Open questions
- Q-1 [blocking/non-blocking]: ...

## 16. Decision log
- YYYY-MM-DD: <decision> - <reason / trade-off>

## 17. Verification record
Filled after implementation.
- Verification status:
- Evidence:
- Known deviations:
- Deferred work:
```
