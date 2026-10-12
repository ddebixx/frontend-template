# Rules migration report template

Use this structure for `docs/ai/rules-migration-report.md`.

# Cursor Rules Migration Report

## Summary

- Original active rule files: N
- New always-on rule files: N
- New contextual rule files: N
- Skills created/updated: N
- Subagents created/updated: N
- References/docs created: N
- Removed obsolete instructions: N
- Unresolved conflicts: N

## Before / after architecture

```text
[before tree]
```

```text
[after tree]
```

## Migration map

| Source | Section | Requirement | Destination type | Destination | Status | Rationale |
|---|---|---|---|---|---|---|
| `.cursor/rules/example.mdc` | Testing | E2E tests must... | contextual-rule | `.cursor/rules/testing/playwright.mdc` | preserved | File-scoped standard |

Use statuses: `preserved`, `consolidated`, `rewritten-equivalent`, `removed`, `needs-human-decision`.

## Duplicate guidance consolidated

Document duplicate or near-duplicate instructions and the canonical destination.

## Conflicts

For each conflict include:

- sources
- conflicting statements
- repository evidence
- chosen behavior or `needs-human-decision`

## Always-on context review

Describe what remains always-on and why each item justifies permanent context.

## Skills extracted

For each skill explain the workflow that moved out of rules and its trigger.

## Subagents extracted

For each subagent explain why independent context improves the review.

## Removed instructions

List every intentional removal and why it is safe.

## Verification

- [ ] Every original rule file accounted for
- [ ] Every material requirement mapped
- [ ] No contradictory active rules remain
- [ ] Always-on content reduced or justified
- [ ] Globs validated against repository paths
- [ ] Skills are discoverable and focused
- [ ] Reviewer agents are focused and non-overlapping
- [ ] Legacy originals preserved outside active rule path
