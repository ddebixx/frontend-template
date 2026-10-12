---
name: frontend-design-quality
description: Produce and review distinctive, professional frontend design for pages, components, product interfaces, marketing sites, portfolios, and redesigns. Use when work includes meaningful visual hierarchy, layout, typography, color, responsive behavior, interaction, motion, accessibility, or art direction. Inspect the existing product and design system first, define a deliberate visual direction, add design-specific acceptance criteria, implement without generic AI-generated UI patterns, then validate the rendered result across representative states and viewports with an independent design critic when available.
---

# Frontend design quality

Treat design as a system of deliberate decisions, not decoration applied after implementation.

## Workflow

1. **Inspect before designing**
   - Read the current UI, component library, tokens, typography, assets, content, routes, and relevant project rules.
   - Reuse existing design language when it is intentional and coherent.
   - Do not force a default component-library aesthetic onto a project with a different visual identity.

2. **Identify the design type and user job**
   - Product/app UI: prioritize comprehension, state clarity, density, and task completion.
   - Marketing/editorial: prioritize narrative, hierarchy, rhythm, and brand expression.
   - Portfolio/creative work: prioritize the work itself, art direction, pacing, and distinctive composition.
   - Data-heavy UI: prioritize scanability, comparison, and information hierarchy over decoration.

3. **Define a design direction before implementation**
   - Add or update a `Design direction` section in the active specification.
   - State 3-5 concrete visual principles, not vague adjectives alone.
   - Define typography roles, spacing/rhythm, composition, color behavior, surface treatment, imagery, motion, and responsive intent.
   - When references are provided, extract principles from them. Do not clone their composition or identity.
   - Use [references/design-principles.md](references/design-principles.md) to pressure-test the direction.

4. **Translate direction into acceptance criteria**
   - Include observable design criteria: hierarchy, interaction, responsive behavior, focus states, content overflow, empty/loading/error states, and reduced-motion behavior where relevant.
   - Avoid criteria such as "looks modern" or "looks premium" without concrete evidence.

5. **Design with real constraints**
   - Use realistic content lengths and actual data shapes when available.
   - Design all important states, not only the ideal screenshot.
   - Preserve semantic HTML, keyboard usability, contrast, focus visibility, and zoom behavior.
   - Prefer a small coherent set of visual rules over many ornamental effects.

6. **Avoid generic generated-interface defaults**
   - Do not default to a centered hero, gradient headline, floating glass cards, three equal feature cards, excessive pills, identical rounded rectangles, or decorative gradients without a design reason.
   - Do not make every section use the same spacing and alignment.
   - Do not add motion simply because a library is available.
   - Do not hide weak hierarchy behind shadows, blur, gradients, or oversized headings.
   - See [references/design-principles.md](references/design-principles.md) for stronger alternatives.

7. **Implement within the project system**
   - Reuse good primitives and tokens.
   - Introduce new tokens/components only when they solve a repeated design need.
   - Preserve content semantics and behavior while improving presentation.
   - Keep responsive composition intentional instead of merely stacking desktop blocks.

8. **Review the rendered result**
   - Prefer browser/rendered inspection over judging JSX/CSS alone.
   - Check representative widths such as ~1440, ~1024, ~768, and ~390 px when applicable.
   - Check long copy, short copy, empty/loading/error states, keyboard focus, hover/active/disabled states, and reduced motion where relevant.
   - Use [references/design-review-checklist.md](references/design-review-checklist.md).

9. **Delegate independent critique**
   - Use `design-critic` after a render exists.
   - Ask for severity-ranked findings tied to the stated design direction and acceptance criteria.
   - Fix high-severity issues, then review again.

## Design decision hierarchy

When choices conflict, prefer this order:

1. User comprehension and task success
2. Content and information hierarchy
3. Accessibility and robust interaction
4. Project brand / visual identity
5. Responsive behavior
6. Performance and maintainability
7. Decorative novelty

## Output expectation

For substantial UI work, the result should include:

- a concise design direction in the spec
- explicit design acceptance criteria
- implementation using project conventions
- rendered responsive review
- independent design critique
- a short note of intentional trade-offs or deviations
