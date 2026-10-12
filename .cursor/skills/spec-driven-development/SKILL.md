---
name: spec-driven-development
description: Run a specification-first development workflow for non-trivial product, frontend, backend, refactor, integration, and behavioral bug-fix work. Use when a task changes user-visible behavior, data flow, public interfaces, architecture, dependencies, persistence, multiple components, or important quality attributes. Produce a reviewable specification with explicit scope, standards, risks, and testable acceptance criteria before implementation; challenge it with an independent reviewer; derive an implementation plan; then implement and verify against the same criteria. Skip only for genuinely trivial edits such as typos, formatting, or obvious one-line fixes with no behavioral impact.
---

# Spec-driven development

Treat the specification as the contract for the change. Do not begin non-trivial implementation while the specification is incomplete, contradictory, or missing testable acceptance criteria.

## Core workflow

1. **Inspect project context first**
   - Read relevant `.cursor/rules`, existing architecture documentation, nearby code, tests, and existing specs.
   - Follow existing project conventions before introducing new ones.
   - If the repository already has a spec location or template, use it. Otherwise use `docs/specs/<task-slug>.md`.

2. **Classify the task**
   - Use the fast path only for changes that do not alter behavior, contracts, architecture, or meaningful UX.
   - Treat new features, multi-file behavioral changes, refactors with risk, integrations, state/data changes, and UI flows as non-trivial.
   - When uncertain, create a compact spec rather than skipping one.

3. **Create or update the specification**
   - Use [references/spec-template.md](references/spec-template.md).
   - State the problem and desired outcome before proposing implementation.
   - Separate goals from non-goals.
   - Number functional requirements as `FR-*`, non-functional requirements as `NFR-*`, and acceptance criteria as `AC-*`.
   - Record assumptions explicitly. Do not silently invent product behavior.
   - For blocking unknowns, mark the spec `Blocked` and surface the smallest set of questions needed to proceed.

4. **Make acceptance criteria executable in meaning**
   - Follow [references/acceptance-criteria.md](references/acceptance-criteria.md).
   - Every material requirement must map to one or more acceptance criteria.
   - Criteria must describe observable outcomes, including relevant error, empty, loading, permission, responsive, and accessibility states.
   - Add a verification method for each criterion when useful: automated test, build/typecheck, browser interaction, visual inspection, API assertion, or manual check.

5. **Challenge the specification before coding**
   - Delegate to the `spec-critic` subagent when available.
   - Ask the critic to find ambiguity, contradictions, missing states, hidden dependencies, unverifiable criteria, premature implementation constraints, and scope creep.
   - Revise the spec until blocking findings are resolved.
   - Set spec status to `Ready` only when implementation can proceed without guessing core behavior.

6. **Derive the implementation plan from the approved spec**
   - Use [references/implementation-plan-template.md](references/implementation-plan-template.md).
   - Map each implementation step to requirement and acceptance-criteria IDs.
   - Name likely files/modules when they can be determined from repository inspection.
   - Prefer the smallest change that satisfies the spec and existing project architecture.
   - For cross-cutting, architectural, security-sensitive, performance-sensitive, or dependency-heavy work, delegate the plan to `architecture-critic` before implementation.
   - If review changes intended behavior or scope, update the specification first. Never let the plan silently supersede the spec.

7. **Apply specialist quality workflows when relevant**
   - For visual or UX work, invoke `frontend-design-quality` before or during implementation and add design-specific criteria to the spec.
   - Keep design, accessibility, performance, and failure behavior explicit rather than treating them as polish after coding.

8. **Implement against the plan**
   - Set spec status to `In Progress`.
   - Work in small coherent increments.
   - Keep requirement IDs visible in reasoning and tests where useful.
   - If implementation reveals a new product decision, update the spec and decision log before continuing.
   - Do not broaden scope simply because adjacent improvements are convenient.

9. **Run an independent acceptance gate**
   - Invoke `acceptance-verification` and/or delegate to `qa-verifier`.
   - For UI work, also delegate to `design-critic` after a rendered implementation is available.
   - Reviewer agents should remain read-only. They report findings; the implementing agent performs fixes afterward.
   - Re-run failed checks after fixes.

10. **Close the loop**
    - Mark the specification `Verified` only when all must-pass acceptance criteria have evidence and no blocking review findings remain.
    - Summarize delivered scope, deviations, evidence, and any intentionally deferred work.

## Status model

Use these states consistently:

`Draft -> Review -> Ready -> In Progress -> Verification -> Verified`

Use `Blocked` whenever unresolved information prevents a correct next step.

## Fast path for genuinely small work

For a low-risk change, create a compact spec with only:

- Context / problem
- Scope and non-goals
- Acceptance criteria
- Verification

Do not use the fast path to avoid thinking through a feature, interaction, data change, or refactor.

## Non-negotiable rules

- Do not equate a task description with a complete specification.
- Do not implement a non-trivial task with unreviewed or untestable acceptance criteria.
- Do not mark work complete because tests pass if the acceptance criteria were not checked.
- Do not let reviewer personas modify the implementation they are reviewing.
- Do not invent requirements to remove ambiguity; record assumptions or ask for a decision.
- Prefer a clear small spec over a long speculative document.
