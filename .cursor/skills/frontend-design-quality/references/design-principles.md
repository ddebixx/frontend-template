# Frontend design principles

Use these as decision prompts, not as a universal visual style.

## 1. Establish hierarchy before decoration

A viewer should understand what matters first, second, and third from size, position, spacing, typography, and contrast before shadows or effects are considered.

## 2. Make composition respond to content

Do not force every block into the same card/grid pattern. Let important content occupy more space. Let secondary content recede. Use asymmetry, scale contrast, or whitespace when they improve meaning.

## 3. Use typography as structure

Define clear roles for display, heading, body, metadata, labels, and controls. Avoid too many sizes or weights. Tighten or loosen tracking intentionally. Preserve readable line length and rhythm.

## 4. Use a limited surface language

Choose a small set of border, radius, shadow, background, and divider behaviors. Inconsistent surface treatment makes interfaces look assembled rather than designed.

## 5. Use color with a job

Color should communicate brand, hierarchy, state, or emphasis. Do not use gradients as filler. Ensure interactive and semantic colors remain distinguishable and accessible.

## 6. Design whitespace, not empty pixels

Whitespace should create grouping, pacing, focus, and breathing room. Uniform padding everywhere usually weakens rhythm.

## 7. Make motion explain change

Use motion to connect states, preserve spatial continuity, or add restrained character. Prefer short purposeful transitions. Respect reduced-motion preferences.

## 8. Design the whole state space

For interactive UI, include loading, empty, error, success, disabled, focus, hover, selected, permission-denied, and long-content states when relevant.

## 9. Treat mobile as a composition

Do not merely stack desktop sections. Re-evaluate order, density, navigation, crop, type scale, controls, and interaction for small screens.

## 10. Resist common AI-generated visual tells

Be suspicious of:

- centered headline + subtitle + two pill buttons as the default hero
- purple/blue gradient accents without brand justification
- glassmorphism used as a substitute for hierarchy
- repeated three-column cards with icons and equal visual weight
- excessive 16-24 px border radii on every element
- every section centered and vertically symmetric
- decorative blobs, glows, or gradients that carry no information
- generic stock illustration when strong typography/content would be better
- huge display text that creates wrapping problems on realistic content
- animation on every scroll element

The alternative is not minimalism by default. The alternative is a coherent visual thesis that fits the product and content.
