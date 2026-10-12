---
name: cursor-rule-refactor
description: Audit and refactor an existing Cursor `.cursor/rules` setup into a lean architecture of always-on constraints, file-scoped contextual rules, reusable skills, independent reviewer subagents, and supporting documentation. Use when a project has accumulated many Cursor rules, duplicated guidance, workflow-heavy `.mdc` files, oversized `alwaysApply` context, or when migrating to spec-driven development and reviewer personas without losing existing engineering standards.
---

# Cursor Rule Refactor

Refactor the project's AI instructions without weakening its existing standards. Treat this as a migration of behavior, not a rewrite from memory.

## Workflow

1. Inspect the repository before changing anything.
2. Inventory every file under `.cursor/rules/` and `.cursor/commands/` if present.
3. Run `scripts/audit_cursor_rules.py --root . --output docs/ai/rules-audit-inventory.md` when Python is available.
4. Read every rule semantically; do not classify from filename alone.
5. Classify each instruction using `references/classification-model.md`.
6. Produce a migration map before editing files.
7. Detect duplicates, contradictions, stale patterns, and oversized always-on context.
8. Refactor into the target architecture below.
9. Preserve original rules outside the active `.cursor/rules` directory until the migration has been verified.
10. Validate that every material original requirement has a destination.
11. Produce `docs/ai/rules-migration-report.md` using `references/migration-report-template.md`.

## Target architecture

Use this structure as the default. Adapt names to the project when existing conventions are better.

```text
.cursor/
  rules/
    core/
      00-delivery-contract.mdc
      10-project-constraints.mdc
    frontend/
      ...file-scoped engineering rules...
    testing/
      ...file-scoped test rules...
    tooling/
      ...tool-specific rules...
  skills/
    ...repeatable workflows...
  agents/
    ...independent reviewers/verifiers...
docs/
  ai/
    rules-audit-inventory.md
    rules-migration-report.md
  specs/
    ...feature specifications...
```

Do not create empty categories merely to match the example.

## Classification rules

### Keep as an always-on rule only when all are true

- The instruction is non-negotiable across almost every task.
- It is short enough to justify permanent context cost.
- Violating it would produce consistently unacceptable output.
- It is not a procedure with several steps.
- It does not describe a temporary persona.

Examples: do not expose secrets; inspect existing patterns before introducing a new abstraction; never modify generated build artifacts unless explicitly requested.

Keep total always-on content deliberately small. If the same standard can be triggered by file scope or description, prefer contextual loading.

### Keep as a contextual rule when

- The guidance is a persistent engineering standard for a specific file type, directory, framework, test layer, or domain.
- The agent should follow it whenever matching code is touched.
- The guidance does not need a start-to-finish workflow.

Prefer `globs` for deterministic file scope. Prefer a precise `description` only when relevance cannot be expressed by files.

### Convert to a skill when

- The rule describes a repeatable multi-step process.
- The process has an input, sequence, decision points, and output.
- It is useful on demand rather than in every model context.
- Examples include feature specification, implementation planning, debugging, migrations, release checks, design direction, documentation updates, or acceptance verification.

Do not copy every sentence from the old rule into `SKILL.md`. Keep the skill as a control plane; move detailed standards or templates into `references/`.

### Convert to a subagent when

- Independent judgment is more important than procedural reuse.
- The role should challenge the main agent's assumptions.
- The role benefits from isolated context.
- The role should review rather than implement.

Good candidates: spec critic, architecture critic, design critic, security reviewer, accessibility reviewer, QA verifier.

Make reviewers read-only where Cursor/tool configuration supports it. Require findings with evidence and severity. Do not let a reviewer fix and approve its own findings in the same pass.

### Convert to documentation/reference when

- The content is project knowledge, architecture background, domain definitions, examples, large checklists, or templates.
- It should be consulted when relevant but should not itself alter agent behavior globally.

## Migration requirements

Create a migration table with one row per original rule file and, for mixed files, one row per logical section.

For every migrated item record:

- source file and heading
- original behavior/requirement
- destination type: `core-rule`, `contextual-rule`, `skill`, `subagent`, `reference`, `remove`
- destination path
- rationale
- preservation status

Never delete a material requirement merely because it is duplicated. Consolidate duplicates into one canonical instruction and list all source locations in the report.

Mark an instruction `remove` only when it is demonstrably obsolete, contradictory to the current codebase, redundant with a stronger canonical rule, or generic model advice with no project-specific value. Explain every removal.

## Conflict resolution

When two existing rules conflict:

1. Inspect current code and configuration for evidence of the actual convention.
2. Prefer the convention consistently implemented in the repository.
3. Prefer newer, more specific, or file-scoped guidance over generic guidance when evidence is otherwise equal.
4. Do not silently choose when the conflict changes product behavior, public API, security posture, or architecture materially. Record it as a migration decision requiring human review.

## Spec-driven development integration

If the project contains non-trivial feature work, keep a small always-on delivery gate and delegate detailed behavior to skills.

The gate should require:

```text
request -> spec -> critique -> implementation plan -> implementation -> verification
```

Do not place the full specification template, review checklist, or implementation procedure in an always-on rule.

Prefer these reusable project skills when present:

- `spec-driven-development`
- `frontend-design-quality`
- `acceptance-verification`

Prefer these independent reviewer subagents when present:

- `spec-critic`
- `architecture-critic`
- `design-critic`
- `qa-verifier`

## Rule-writing standards

For every `.mdc` rule:

- Keep one clear responsibility.
- Use valid Cursor frontmatter.
- Set `alwaysApply: true` only for genuinely universal constraints.
- Use specific `globs` when the rule maps to files.
- Use a precise `description` for intelligently selected rules.
- Remove motivational prose, generic senior-developer persona text, and redundant explanations.
- Express requirements as direct, testable instructions.
- Keep examples only when they disambiguate a project-specific convention.

## Validation gate

Do not call the refactor complete until all checks pass:

- Every original `.mdc` file appears in the migration report.
- Every material requirement has a destination or an explicit removal rationale.
- No active duplicate rules give conflicting guidance.
- Always-on content is materially smaller than before unless the project was already minimal.
- File-scoped rules use correct globs.
- Workflow-heavy content has moved to skills.
- Reviewer/persona content has moved to subagents where independent context is useful.
- The spec-driven workflow remains discoverable without forcing the full workflow into every prompt.
- Original rules are backed up outside active `.cursor/rules/` before destructive deletion.

End with a concise summary of what changed, what was intentionally preserved, any unresolved conflicts, and the expected context reduction.
