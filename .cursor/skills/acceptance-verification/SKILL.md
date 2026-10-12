---
name: acceptance-verification
description: Independently verify completed or near-completed implementation against an approved specification and its acceptance criteria before claiming the work is done. Use after feature implementation, meaningful refactors, behavioral bug fixes, integration work, or UI changes. Build a requirement-to-evidence matrix, inspect the actual diff and relevant runtime states, run appropriate existing checks, distinguish implementation failures from specification gaps, and return a strict PASS, FAIL, or BLOCKED verdict without modifying the implementation during the verification pass.
---

# Acceptance verification

Verification is a separate phase from implementation. During the verification pass, inspect and test; do not fix the code you are judging.

## Workflow

1. **Locate the contract**
   - Read the approved specification, implementation plan, relevant project rules, and changed code.
   - If no specification or testable acceptance criteria exist for non-trivial work, return `BLOCKED: missing verification contract` rather than inventing criteria after the fact.

2. **Establish the change surface**
   - Identify changed files, public interfaces, user flows, data/state changes, dependencies, and likely regression areas.
   - Note any implementation behavior not represented in the spec.

3. **Create the acceptance matrix**
   - Use [references/verification-report-template.md](references/verification-report-template.md).
   - Map every `must` acceptance criterion to concrete evidence.
   - Do not treat one passing test suite as proof of unrelated criteria.

4. **Run appropriate project checks**
   - Inspect existing package scripts, CI configuration, and test conventions before choosing commands.
   - Run relevant build, typecheck, lint, unit, integration, or E2E checks when available.
   - Do not invent commands or tools that are not configured.
   - Record command and result summaries as evidence.

5. **Verify behavior, not only code shape**
   - For UI work, inspect the rendered interface when browser tooling is available.
   - Exercise relevant happy paths and negative paths.
   - Check loading, empty, error, permission, long-content, responsive, keyboard, and reduced-motion states when required by the spec.
   - For APIs/data flows, verify inputs, outputs, validation, failure handling, compatibility, and persistence semantics where applicable.

6. **Check for regressions and scope leakage**
   - Look for unintended behavior changes outside the specified scope.
   - Flag hidden coupling, stale code paths, missing cleanup, broken tests, incompatible contracts, or new behavior without specification coverage.

7. **Separate failure types**
   - `Implementation failure`: the spec is clear but implementation does not satisfy it.
   - `Specification gap`: correct behavior cannot be determined from the spec.
   - `Environment blocked`: required verification cannot run in the available environment.
   - `Deferred by design`: explicitly waived criterion with documented reason; never silently convert a failure into a deferral.

8. **Return a strict verdict**
   - `PASS`: every must-pass criterion has sufficient evidence and no blocking findings remain.
   - `FAIL`: one or more must-pass criteria fail or there is a critical/high regression.
   - `BLOCKED`: verification cannot be completed because the contract or environment is insufficient.

9. **Hand findings back to the implementing agent**
   - Do not edit implementation files during this verification pass.
   - After fixes, perform a new verification pass rather than assuming the finding is resolved.

## Evidence standard

Prefer direct evidence over inference:

`runtime behavior > automated test targeted to criterion > static inspection > assumption`

A code path that appears correct is not the same as a verified user-visible outcome when runtime verification is available.
