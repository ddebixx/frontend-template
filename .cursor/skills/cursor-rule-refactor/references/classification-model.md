# Cursor instruction classification model

Use this reference when deciding where an existing instruction belongs.

| Signal | Best destination | Reason |
|---|---|---|
| Applies to every task and is non-negotiable | Always-on rule | Permanent context is justified |
| Applies whenever certain files are edited | Glob-scoped rule | Deterministic relevance |
| Applies by domain but not cleanly by files | Description-scoped rule | Agent can load it intelligently |
| Has ordered steps, inputs, outputs, or a checklist | Skill | Procedural knowledge should load on demand |
| Challenges, audits, or independently verifies work | Subagent | Separate context reduces self-review bias |
| Large background knowledge or template | Reference/doc | Useful context without behavioral overhead |
| Generic advice already expected from a capable coding agent | Remove or omit | Avoid context dilution |

## Strong always-on candidates

- security invariants that apply repository-wide
- project-wide restrictions on generated files
- requirements to preserve public contracts unless change is explicit
- requirements to inspect existing patterns before creating abstractions
- the minimal delivery gate for non-trivial work

## Weak always-on candidates

Move these out unless the project has an unusual reason to keep them global:

- long code-style manuals
- React patterns
- Playwright conventions
- API endpoint templates
- commit/PR procedures
- debugging steps
- UI design checklists
- code-review checklists
- framework documentation
- examples longer than the rule they support

## Skill indicators

Count these as signals, not automatic decisions:

- numbered workflow with three or more steps
- repeated `before`, `then`, `after`, `verify`
- explicit deliverable or report format
- branching decision tree
- repeated manual invocation language
- rule instructs agent to create/update several artifacts in sequence

## Subagent indicators

- `review`, `critic`, `challenge`, `audit`, `verify`, `skeptical`
- instructions to find flaws rather than implement
- requests for independent judgment
- role requires a fresh context to avoid anchoring

## Mixed-rule handling

A single old `.mdc` may contain multiple destination types. Split it by responsibility instead of forcing the whole file into one category.

Example:

```text
old frontend.mdc
  naming conventions       -> contextual frontend rule
  design review checklist  -> design-critic subagent
  feature build workflow   -> spec-driven-development skill
  architecture background  -> docs/ai/frontend-architecture.md
```

Record each split in the migration report.
