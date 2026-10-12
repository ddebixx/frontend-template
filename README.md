# Cursor Spec + Design Quality Kit

An additive workflow layer for an existing `.cursor/rules` setup. It deliberately does **not** replace framework, architecture, testing, or code-style rules already present in a project.

## Why this split

- **Rules** define persistent non-negotiable constraints.
- **Skills** define repeatable multi-step procedures.
- **Subagents** provide independent context for critique and verification.

That separation prevents a large always-on rule file from becoming a workflow manual and reduces self-review bias by keeping critics read-only and context-separated.

## Included

```text
.cursor/
  rules/
    core/
      00-delivery-contract.mdc
      10-project-constraints.mdc
    frontend/
    testing/
    tooling/
  skills/
    spec-driven-development/
    frontend-design-quality/
    acceptance-verification/
  agents/
    spec-critic.md
    architecture-critic.md
    design-critic.md
    qa-verifier.md
docs/
  specs/
    README.md
    _template.md
```

## Default delivery flow

```text
request
  -> spec-driven-development
  -> spec-critic
  -> implementation plan
  -> architecture-critic (when relevant)
  -> implementation
  -> frontend-design-quality (for UI work)
  -> design-critic (for UI work)
  -> acceptance-verification / qa-verifier
  -> PASS -> complete
       |
       -> FAIL -> implementation fixes -> verify again
```

## Recommended usage

### New non-trivial feature

```text
/spec-driven-development Implement saved dashboard filters.
```

The workflow should create/update the spec before code, challenge it, create a plan, implement, then verify.

### UI redesign

```text
/frontend-design-quality Redesign the project detail page according to the active spec and current brand.
```

The design skill should first define the design direction and acceptance criteria, not immediately generate JSX/CSS.

### Final gate

```text
/acceptance-verification Verify the current implementation against docs/specs/<feature>.md.
```

Or explicitly ask the parent Agent to delegate to `qa-verifier`.

## Review persona policy

Critics are intentionally `readonly: true`.

A reviewer should **not** fix its own findings. The parent/implementing agent receives the findings, performs revisions, then starts a fresh review. This is important: otherwise "review" easily degrades into the same reasoning context approving its own work.

## Adoption strategy

Start with this workflow for new features and high-risk changes. Keep specs compact for low-risk work. After several real tasks, tighten the gate based on where the agent still guesses, over-engineers, or misses acceptance criteria.

## Existing rules

Engineering standards stay file-scoped under `.cursor/rules/frontend/`, `.cursor/rules/testing/`, and `.cursor/rules/tooling/`. Always-on rules are only the delivery gate and the stack lock in `.cursor/rules/core/`. Specification templates, review checklists, and implementation procedures stay in skills and reviewer subagents.
