# Design review checklist

## Direction
- Does the rendered result clearly express the stated design direction?
- Are reference influences translated into principles rather than copied literally?
- Does the interface feel specific to this product/content rather than interchangeable with a template?

## Hierarchy and composition
- Is the primary action/content immediately clear?
- Are secondary elements visually subordinate?
- Is spacing creating intentional groups and rhythm?
- Are grids/alignment consistent where consistency helps and deliberately broken only when useful?

## Typography
- Are roles distinct and consistent?
- Are line lengths and line heights readable?
- Does text survive realistic long strings and localization-like expansion?

## Color and surfaces
- Is color doing a meaningful job?
- Are borders, radii, shadows, dividers, and backgrounds coherent?
- Is contrast sufficient for text, controls, focus, and states?

## Interaction
- Are hover, focus, active, selected, disabled, loading, success, and error states handled where relevant?
- Is keyboard navigation obvious and usable?
- Does motion help explain state and respect reduced motion?

## Responsive behavior
- Does layout adapt rather than just collapse?
- Are touch targets usable?
- Are navigation, image crops, typography, density, and ordering appropriate on small screens?
- Are there awkward orphaned lines, overflow, clipped content, or excessive whitespace?

## Content and realism
- Was the design checked with realistic content, not only ideal placeholder copy?
- Do empty and error states maintain hierarchy?

## Implementation quality
- Are existing tokens/components reused appropriately?
- Were new abstractions introduced only when they solve a repeated need?
- Is visual quality achieved without unnecessary runtime cost or fragile CSS?
