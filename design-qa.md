# Services and Strategy Engagement QA

## Visual truth

- Source visual: `/Users/raihanrazi/Downloads/50B45E4C-A390-461A-B518-B9BFA4615667.png`
- Implementation route: `/services`
- Final implementation capture: `tmp/design-qa/services-reference-viewport-final.png`
- Final side-by-side comparison: `tmp/design-qa/services-comparison-final.png`
- Supporting full-page captures: `tmp/design-qa/services-full-desktop-1440.png` and `tmp/design-qa/services-full-mobile-390.png`

The source is treated as visual direction, not a claims source. Its prices, packages, audience labels and commercial promises are deliberately replaced with an evidence-safe connected engagement path and qualification form.

## Normalisation

| Artifact | Pixel size | CSS viewport | Density | State |
| --- | ---: | ---: | ---: | --- |
| Source visual | 1024 × 1536 | Artboard reference | 1× comparison scale | Services top, capabilities and engagement model |
| Raw implementation capture | 1014 × 1521 | 1024 × 1536 | 1× | `/services`, page top, animations settled |
| Normalised implementation | 1024 × 1536 | 1024 × 1536 | 1× | Raw capture padded by 10 px right and 15 px bottom to account for in-app browser chrome |

The final comparison places the source and normalised implementation together at equal pixel dimensions. The hero and six-capability region remain readable at this scale, so no additional crop was needed for those details. The connected engagement path and qualification form are intentional product adaptations not represented accurately by the source; their focused evidence comes from the desktop and mobile full-page captures.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Typography: Cormorant Garamond and Inter reproduce the source's editorial serif / technical sans hierarchy. Desktop and 1024 px headline wrapping, card labels and small UI copy are balanced; the mobile headline now fits without clipping.
- Spacing and layout: the black hero, warm-paper capability grid and dark engagement region preserve the source's section rhythm. Six capability columns remain visible at the 1024 px reference width; tablet and mobile use progressively safer grids.
- Colors and tokens: obsidian, warm white and SemanticLab lime map consistently to the shared site tokens. Fine borders provide structure without introducing generic elevated cards or shadows.
- Image quality: the generated 1774 × 887 services particle asset matches the source's convergence motif, loads at natural resolution and blends into the pure-black hero without a visible panel edge.
- Copy and content: prices, durations, package names, “most popular” badges and unsupported response promises are absent. The replacement architecture remains focused on a qualified Strategy Engagement rather than a product trial.
- Icons: the existing Lucide family is used consistently at restrained stroke weights; there are no handcrafted SVG, CSS-art or placeholder substitutes.

## Comparison history

### Pass 1

- P2 — At 1024 px, the initial implementation collapsed the source's six capability columns into three, materially changing the reference density. The capability breakpoint now retains six columns at the reference viewport and uses smaller, measured card type.
- P2 — The fixed-header CTA wrapped to two lines at 1024 px. The compact header treatment now stays on one line without reducing its tap target.
- P2 — The initial 1024 px hero was too tall, preventing the reference viewport from reaching the capability system. The hero is now 610 px at this range, with the visual and type rescaled proportionally.
- Evidence: `tmp/design-qa/services-comparison-pass-1.png` and `tmp/design-qa/services-comparison-pass-2.png`.

### Pass 2

- P1 — The mobile hero headline clipped the word “Transformation”. The mobile display scale was reduced while retaining the source's two-line editorial impact.
- P2 — The generated particle raster exposed a near-black rectangular edge against the hero. The hero now uses the asset's pure-black ground, producing a seamless blend.
- P2 — Six-column card titles were crowded at 1024 px. Card padding and type scale are now tuned specifically for the reference range.
- Evidence: `tmp/design-qa/services-mobile-390x844.png`, `tmp/design-qa/services-mobile-390x844-pass-2.png` and `tmp/design-qa/services-comparison-final.png`.

### Final pass

- The final equal-size comparison confirms the intended hero composition, editorial type, black / warm-white / lime palette, abstract data motif, six connected capabilities and fine-line surfaces.
- The connected engagement model and qualification form intentionally replace the source's unsupported package and price cards.
- No remaining P0, P1 or P2 visual differences are actionable.

## Responsive, interaction and accessibility checks

- Browser-rendered at 1440 × 900, 1024 × 1536, 768 × 1024 and 390 × 844 CSS-pixel viewports.
- No horizontal overflow at any tested width.
- Mobile navigation opens and closes, updates `aria-expanded`, locks background scroll and closes before following the Strategy Engagement anchor.
- The Strategy Engagement anchor settles below the fixed header.
- Form inputs, selects, textareas, focus treatment and populated states were exercised with synthetic local data.
- Required fields, explicit labels, appropriate autocomplete values and semantic input types are present.
- The final mail-app handoff was not launched by the browser runner because it crosses into an external application; the generated `mailto:` path is covered by typecheck and production build. This is a residual interaction test gap, not a visual defect.
- Heading order begins with one `h1` and proceeds through section `h2` / card `h3` headings.
- All raster assets load with non-empty alternative text.
- Reduced-motion rules disable hero entrance animation and input transitions.
- Fresh final browser-console check: no warnings or errors.

## Follow-up polish

- P3 — Replace the current high-resolution raster logo lockup with the original approved vector asset when it is supplied.
- P3 — Confirm the final qualification fields and submission channel as part of the Strategy Engagement decision ticket; the present email-preparation flow is transparent and reversible.

## Result

final result: passed
