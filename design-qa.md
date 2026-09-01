# Tieman Solution Motion + Assurance QA

## Visual truth

- Motion reference: `https://partshq.io/`
- PartsHQ early state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/partshq-hero-reference-early.png`
- PartsHQ processing state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/partshq-hero-reference-mid.png`
- Layered architecture reference: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_aFdQxP/Screenshot 2026-09-01 at 4.23.36 PM.png`
- Implementation route: `/deck/tieman-tankers`, slide 5 of 14
- Implementation early state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-early-v2.png`
- Implementation final desktop state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-final-stable.png`
- Mobile top state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-mobile-full.png`
- Mobile assurance state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-motion-mobile-bottom.png`
- Combined motion comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/partshq-tieman-motion-sequence-comparison.png`

PartsHQ is authoritative for motion behaviour: inactive connectors, one input activating, a shared engine resolving, then downstream outputs. The supplied layered-stack screenshot is authoritative for the source-to-context-to-application architecture. The existing SemanticLab deck remains authoritative for colour, typography, iconography, spacing and navigation.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| PartsHQ motion reference | 1265 × 712 | in-app browser viewport | processing state |
| Final desktop implementation | 1788 × 1169 | 1788 × 1169 browser viewport; centered 16:9 deck stage | settled looping state |
| Mobile implementation top | 390 × 844 | 390 × 844 viewport; 380 × 1941 slide stage | settled top state |
| Mobile implementation bottom | 390 × 844 | 390 × 844 viewport; stage scrollTop 1056px | assurance + footer state |

This is a behavioural reference, not a pixel clone. The motion sequence was compared in one four-frame visual input: PartsHQ waiting/processing above and the Tieman opening/settled states below. Desktop is the primary presentation surface. Mobile was checked for layout continuity, vertical reach and horizontal overflow.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Fonts and typography: the existing SemanticLab display/body system remains intact. The assurance labels use the deck's uppercase tracking and compact supporting copy without competing with the main architecture.
- Spacing and layout rhythm: the architecture retains four app cards, one dominant context layer and six source cells. The new 11.3cqw assurance rail sits beside—not over—the stack and spans its full height.
- Colours and tokens: near-black, off-white and electric lime use the existing deck tokens. Motion changes borders, lift and outline strength without introducing a new palette or gradient treatment.
- Image and icon fidelity: no raster asset was needed for the structural diagram. All signals and assurance principles use real Lucide icon components; no emoji, handcrafted SVG artwork or placeholder marks are present.
- Copy and content: the right rail explicitly brackets the architecture with Security, Governance and Australian data hosting. Detail text describes permissions/audit, rules/ownership and local data residency.
- Motion: the slide now uses the same three-beat logic as the PartsHQ hero: source systems resolve first, the context layer activates, then app/agent cards light in sequence. Small upward signal icons make the flow legible, and the assurance bracket draws in before its three guardrails resolve.
- Reduced motion: browser emulation confirmed `prefers-reduced-motion: reduce` disables every stack/bracket animation, hides travelling signals, leaves cards and assurance at opacity 1 and removes clipping.
- Responsiveness: at 390 × 844 there is no horizontal overflow (`documentElement.scrollWidth` is 390px). The architecture becomes a two-column card flow, and the assurance rail becomes a full-width three-column guardrail panel. Stage scrolling reached the assurance panel and the slide footer.
- Interaction and accessibility: Arrow Right navigates slide 5 to slide 6 and Arrow Left returns to slide 5. The architecture and assurance regions have semantic labels; decorative icons are hidden from assistive technology.
- Runtime: page identity, meaningful DOM content, slide count, heading, four application cards, six source cards and three assurance principles were verified. No framework overlay or application console error was present. Console warnings came only from the connected browser's extension content script.

## Comparison history

### Motion-reference pass

- PartsHQ revealed a useful narrative pattern rather than a visual style to copy: waiting connectors, a processing state, one active path and sequential node emphasis.
- Translation: Tieman source cards reveal first, six connection signals rise into the context layer, the context layer pulses as “Context live,” and four application cards resolve afterward.

### First implementation pass

- [P2] At the initial 160ms capture only the first source was visible, but the large empty area was intentional and resolved within the entrance sequence.
- Verification: the settled capture confirmed every card, connector, context capability and assurance item appeared in the correct final position. No duration or layout adjustment was required.

### Responsive pass

- [P2] Desktop connectors would have floated without meaning in the stacked mobile layout.
- Fix: travelling connector signals and line fragments are hidden in portrait/mobile while the source/context/application entrance and assurance resolution remain.
- Post-fix evidence: the mobile top and bottom captures show an intact two-column architecture and a fully readable three-principle assurance panel.

## Browser workflow

- The in-app browser was used to capture and inspect the live PartsHQ reference.
- The in-app browser could not open the local URL and returned `ERR_BLOCKED_BY_CLIENT`.
- The already-connected Chrome browser was used as the documented local-development fallback for desktop, mobile, keyboard, console and reduced-motion checks.

## Verification

- Desktop page: `SemanticLab × Tieman Tankers | Opportunity` at `/deck/tieman-tankers`.
- Slide 5 heading and `/ 14` continuity verified.
- Keyboard interaction verified: slide 5 → slide 6 → slide 5.
- Mobile viewport verified at 390 × 844 with zero horizontal overflow and complete vertical reach.
- Reduced-motion emulation verified and restored to the normal browser preference after the test.

## Follow-up polish

- P3 option only: the recurring signal loop could later be made presenter-triggered. The current automatic loop is intentionally quiet and keeps the deck keyboard-only.

## Result

final result: passed
