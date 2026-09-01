# Tieman Solution Slide Fragment + Spacing QA

## Visual truth

- User annotation: slide 5 left too much unused space beneath the architecture, the cards needed to be larger, the layers needed more separation, and every layer needed to reveal on a presenter key press.
- Before implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-live-preview.png`
- Final desktop fragment 0: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-0.png`
- Final desktop fragments 1–4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-1.png` through `tieman-solution-fragment-4.png`
- Before/after spacing comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-spacing-before-after.png`
- Source-only state before: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-state-before.png`
- Source-only state after: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-state-after.png`
- Source-only before/after comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-state-before-after.png`
- Context-connected state after: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-state-after.png`
- Source-label position before: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-label-before.png`
- Source-label position after: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-label-after-1280.png`
- Source-label before/after comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-label-before-after.png`
- Source-label context-connected state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-label-context-after.png`
- Source-label mobile state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-source-label-mobile-after.png`
- Processing treatment before: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-processing-before.png`
- Processing treatment after: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-processing-after.png`
- Processing before/after comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-processing-before-after.png`
- Processing mobile state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-processing-mobile-after.png`
- Mobile source reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-1.png`
- Mobile final state, top/bottom: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-4-top.png` and `tieman-solution-fragment-mobile-4-bottom.png`
- Implementation route: `/deck/tieman-tankers`, slide 5 of 14.

The user annotation is authoritative for composition and interaction. The existing SemanticLab deck remains authoritative for typography, colour, iconography and navigation.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Desktop implementation | 1788 × 1169 | 1788 × 1169 browser viewport; centered 16:9 stage | fragments 0–4 |
| Source-only before/after | 1588 × 1260 each | 1588 × 1260 browser viewport; centered 16:9 stage | fragment 1 |
| Source-label comparison | 1280 × 720 each | Both 16:9 slide stages normalised to 1280 × 720 and combined side by side | fragment 1 |
| Processing before/after | 1280 × 720 each | Equal-size 16:9 browser captures combined side by side at 1× density | fragment 2 |
| Mobile implementation | 390 × 844 | 390 × 844 viewport; 1900px scrollable stage | fragments 1 and 4 |

This is a composition and behavioural refinement rather than a pixel clone. Desktop is the primary presentation surface. Mobile was checked for content order, complete reach and horizontal overflow.

## Findings and fixes

- [P2] Excess unused space beneath the architecture made the solution feel undersized. Fixed by stretching the diagram through the available content row, enlarging all three architecture tracks and keeping a clean final gap before the footer.
- [P2] The source, context and application layers read as one compressed block. Fixed with larger inter-layer gaps, longer connectors and larger cards, icons and supporting copy.
- [P1] The automatic entrance sequence did not give the presenter control. Fixed with four fragments: data sources → unified context → apps and agents → secure-by-design bracket. Arrow Right, Space, Enter and the next button reveal one fragment; one additional action advances to slide 6. Arrow Left reverses the fragment sequence.
- [P2] The source-only fragment showed six vertical connectors and ran card/signal loops before any destination layer existed. Fixed by removing source-card and signal animations and setting every connector to zero opacity in fragment 1. The source-to-context connectors and motion now begin only in fragment 2.
- [P2] The `TIEMAN DATA + KNOWLEDGE` label sat above the six source cards, competing with the connector origin and reading like a separate incoming layer. Fixed by placing the label directly below the source-card grid in every reveal state, with a compact responsive margin.
- [P2] Processing motion competed with the content because source cards, application cards, the context panel, the live mark and assurance items all pulsed alongside the travelling connector signals. Fixed by removing animation from every box and supporting label, retaining only the connector signals, slowing them to 7.6s, reducing their peak opacity to `0.58`, reducing their size to `0.64cqw`, and reducing connector-line opacity from `0.48` to `0.3`.
- [P2] On mobile, preserving the desktop visual order would put the first revealed fragment below invisible layers. Fixed by reordering the responsive flow to sources → context → applications → assurance.
- No actionable P0, P1 or P2 findings remain after the fixes.

## Visual verification

- Desktop final geometry: applications 234.6px high, context 208.6px high, sources 178.2px high and assurance bracket 673.2px high. The architecture ends at 985.5px, with the footer beginning at 1020.9px; nothing clips or collides.
- The combined before/after image shows the final architecture using the lower canvas while preserving distinct layer gaps and footer separation.
- The focused 1588 × 1260 source-only comparison shows the previous floating connector lines and active source borders removed. No typography, spacing, colour, icon, image or copy changes were introduced by this correction.
- Browser-computed fragment-1 state: all six connector pseudo-elements report opacity `0`; all six source cards and signals report `animation-name: none`; all six signals report opacity `0`.
- Browser-computed fragment-2 state: all six connectors report opacity `0.48`; source-card and signal animations report `running`; the unified context layer is visible.
- Browser-computed label geometry at fragment 1 places the label below the source-card grid (`label.y > grid.y + grid.height`). The side-by-side 16:9 comparison confirms the only visible change is the label's move from above to below the six cards.
- At fragment 1, the moved label does not change the static source state: all connector opacities remain `0` and every source animation remains `none`. At fragment 2, the label remains below the cards while the existing connector geometry continues to originate above them.
- At 390 × 844, `documentElement.scrollWidth` equals 390px. The stage scrolls from 0 to 1056px, reaching the complete assurance panel and footer.
- At 390 × 844 in fragment 1, the label remains below the final row of source cards and the page still has no horizontal overflow.
- Processing fragment 2 reports `animation-name: none` for all six source cards, the context panel and the context-live icon; all six connector signals report `tiemanStackSignalUp` and `animation-play-state: running`.
- Processing fragment 3 reports `animation-name: none` for all four application cards while all four application connector signals remain running. Fragment 4 reports `animation-name: none` for all three assurance items.
- The 1280 × 720 before/after comparison confirms the composition, typography, copy, icons, imagery and spacing are unchanged; the only static visual difference is the intended reduction in connector prominence. Focused computed-style inspection was used for the time-based difference because a single still cannot prove the absence of pulsing.
- Required fidelity surfaces passed: fonts and typography are unchanged; spacing and layout rhythm are unchanged; the existing SemanticLab palette is preserved with only the requested connector-opacity reduction; icon and image assets are unchanged and remain sharp; copy and content are unchanged.
- At 390 × 844 in fragment 2, all six source cards and the context panel remain static, all six connector signals run, and `documentElement.scrollWidth` equals 390px.
- Mobile fragment 1 places the source layer at 443.3px and leaves context, applications and assurance hidden, confirming the reveal order is legible above the fold.
- Final mobile state places the assurance panel at 437.6–667.6px after scrolling and the footer bottom at 749.6px.

## Interaction and accessibility

- Slide 5 starts at fragment 0 with all architecture layers hidden.
- The four reveal states were captured and checked independently.
- Fragment 1 is a static source-system inventory with no implied connection. Fragment 2 introduces the connections and processing motion alongside the context layer; reversing from fragment 2 fully clears every signal and active border again.
- At fragment 4 the next control is labelled `Next slide`; before completion it is labelled `Reveal next layer`.
- The previous control is labelled `Hide previous layer` while a fragment can be reversed.
- Slide 5 fragment 4 → slide 6 → Arrow Left returns to slide 5 fragment 4; another Arrow Left hides assurance.
- Reduced-motion emulation leaves fragment navigation intact, sets the layer transition duration to `0s` and removes travelling signals.
- Non-fragment decks retain the original next/previous behaviour.

## Browser workflow

- The in-app browser was used to inspect the live preview and the user-selected region.
- The in-app browser loaded the local preview for the source-only and context-connected state checks at 1588 × 1260.
- Earlier full desktop, mobile, keyboard, controls and reduced-motion checks used the connected Chrome/local headless Chrome fallback after a previous local in-app navigation was blocked.
- No application console error or framework overlay was present.

## Result

final result: passed
