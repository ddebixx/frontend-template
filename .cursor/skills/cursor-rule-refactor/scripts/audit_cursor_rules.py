#!/usr/bin/env python3
"""Create a deterministic inventory of Cursor rules before semantic refactoring."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


def parse_frontmatter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("---"):
        return {}, text
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return {}, text
    meta: dict[str, str] = {}
    for line in lines[1:end]:
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip()
    return meta, "\n".join(lines[end + 1 :])


def normalize_bool(value: str | None) -> bool | None:
    if value is None:
        return None
    v = value.strip().lower()
    if v == "true":
        return True
    if v == "false":
        return False
    return None


def signal_counts(body: str) -> tuple[int, int]:
    workflow_terms = [
        r"\bstep\b",
        r"\bfirst\b",
        r"\bthen\b",
        r"\bafter\b",
        r"\bbefore\b",
        r"\bworkflow\b",
        r"\bplan\b",
        r"\bchecklist\b",
        r"\bverify\b",
    ]
    review_terms = [
        r"\breview(?:er)?\b",
        r"\bcritic\b",
        r"\bchallenge\b",
        r"\baudit\b",
        r"\bskeptical\b",
        r"\bverif(?:y|ier|ication)\b",
    ]
    lower = body.lower()
    workflow = sum(len(re.findall(term, lower)) for term in workflow_terms)
    review = sum(len(re.findall(term, lower)) for term in review_terms)
    return workflow, review


def preliminary_type(meta: dict[str, str]) -> str:
    always = normalize_bool(meta.get("alwaysApply"))
    globs = meta.get("globs", "").strip()
    description = meta.get("description", "").strip()
    if always is True:
        return "always-on"
    if globs:
        return "file-scoped"
    if description:
        return "intelligent/dynamic"
    return "manual/unspecified"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=".", help="Repository root")
    parser.add_argument(
        "--output",
        default="docs/ai/rules-audit-inventory.md",
        help="Markdown output path relative to root",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    rules_dir = root / ".cursor" / "rules"
    files = sorted(rules_dir.rglob("*.mdc")) if rules_dir.exists() else []

    rows: list[str] = []
    total_lines = 0
    always_lines = 0

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        meta, body = parse_frontmatter(text)
        line_count = len(text.splitlines())
        total_lines += line_count
        if normalize_bool(meta.get("alwaysApply")) is True:
            always_lines += line_count
        workflow, review = signal_counts(body)
        rel = path.relative_to(root).as_posix()
        desc = meta.get("description", "").replace("|", "\\|")
        globs = meta.get("globs", "").replace("|", "\\|")
        rows.append(
            f"| `{rel}` | {preliminary_type(meta)} | {line_count} | "
            f"{workflow} | {review} | `{globs}` | {desc} |"
        )

    output = root / args.output
    output.parent.mkdir(parents=True, exist_ok=True)
    content = "\n".join(
        [
            "# Cursor Rules Audit Inventory",
            "",
            "> Deterministic inventory only. Workflow/review signal counts are heuristic; perform semantic classification before migration.",
            "",
            f"- Rule files: **{len(files)}**",
            f"- Total rule lines: **{total_lines}**",
            f"- Lines in `alwaysApply: true` rules: **{always_lines}**",
            "",
            "| Rule | Current trigger | Lines | Workflow signals | Review signals | Globs | Description |",
            "|---|---:|---:|---:|---:|---|---|",
            *rows,
            "",
            "## Interpretation",
            "",
            "- High workflow signals: inspect for extraction into a skill.",
            "- High review signals: inspect for extraction into a subagent.",
            "- Large always-on files: inspect for contextual scoping or references.",
            "- Do not migrate from these heuristics alone; read the rule content.",
            "",
        ]
    )
    output.write_text(content, encoding="utf-8")
    print(output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
