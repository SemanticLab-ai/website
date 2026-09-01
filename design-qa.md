# Tieman Solution Slide Fragment + Spacing QA

## Visual truth

- User annotation: slide 5 left too much unused space beneath the architecture, the cards needed to be larger, the layers needed more separation, and every layer needed to reveal on a presenter key press.
- Before implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-live-preview.png`
- Final desktop fragment 0: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-0.png`
- Final desktop fragments 1–4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-1.png` through `tieman-solution-fragment-4.png`
- Before/after spacing comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-spacing-before-after.png`
- Mobile source reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-1.png`
- Mobile final state, top/bottom: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-4-top.png` and `tieman-solution-fragment-mobile-4-bottom.png`
- Implementation route: `/deck/tieman-tankers`, slide 5 of 14.

The user annotation is authoritative for composition and interaction. The existing SemanticLab deck remains authoritative for typography, colour, iconography and navigation.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Desktop implementation | 1788 × 1169 | 1788 × 1169 browser viewport; centered 16:9 stage | fragments 0–4 |
| Mobile implementation | 390 × 844 | 390 × 844 viewport; 1900px scrollable stage | fragments 1 and 4 |

This is a composition and behavioural refinement rather than a pixel clone. Desktop is the primary presentation surface. Mobile was checked for content order, complete reach and horizontal overflow.

## Findings and fixes

- [P2] Excess unused space beneath the architecture made the solution feel undersized. Fixed by stretching the diagram through the available content row, enlarging all three architecture tracks and keeping a clean final gap before the footer.
- [P2] The source, context and application layers read as one compressed block. Fixed with larger inter-layer gaps, longer connectors and larger cards, icons and supporting copy.
- [P1] The automatic entrance sequence did not give the presenter control. Fixed with four fragments: data sources → unified context → apps and agents → secure-by-design bracket. Arrow Right, Space, Enter and the next button reveal one fragment; one additional action advances to slide 6. Arrow Left reverses the fragment sequence.
- [P2] On mobile, preserving the desktop visual order would put the first revealed fragment below invisible layers. Fixed by reordering the responsive flow to sources → context → applications → assurance.
- No actionable P0, P1 or P2 findings remain after the fixes.

## Visual verification

- Desktop final geometry: applications 234.6px high, context 208.6px high, sources 178.2px high and assurance bracket 673.2px high. The architecture ends at 985.5px, with the footer beginning at 1020.9px; nothing clips or collides.
- The combined before/after image shows the final architecture using the lower canvas while preserving distinct layer gaps and footer separation.
- At 390 × 844, `documentElement.scrollWidth` equals 390px. The stage scrolls from 0 to 1056px, reaching the complete assurance panel and footer.
- Mobile fragment 1 places the source layer at 443.3px and leaves context, applications and assurance hidden, confirming the reveal order is legible above the fold.
- Final mobile state places the assurance panel at 437.6–667.6px after scrolling and the footer bottom at 749.6px.

## Interaction and accessibility

- Slide 5 starts at fragment 0 with all architecture layers hidden.
- The four reveal states were captured and checked independently.
- At fragment 4 the next control is labelled `Next slide`; before completion it is labelled `Reveal next layer`.
- The previous control is labelled `Hide previous layer` while a fragment can be reversed.
- Slide 5 fragment 4 → slide 6 → Arrow Left returns to slide 5 fragment 4; another Arrow Left hides assurance.
- Reduced-motion emulation leaves fragment navigation intact, sets the layer transition duration to `0s` and removes travelling signals.
- Non-fragment decks retain the original next/previous behaviour.

## Browser workflow

- The in-app browser was used to inspect the live preview and the user-selected region.
- Localhost was blocked by the in-app browser, so the connected Chrome/local headless Chrome fallback was used for local desktop, mobile, keyboard, controls and reduced-motion checks.
- No application console error or framework overlay was present.

## Result

final result: passed
