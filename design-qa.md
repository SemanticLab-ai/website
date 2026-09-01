# Tieman Fragmented Estate Slide QA

## Visual truth

- Layout reference 1: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_wDFlzq/Screenshot 2026-09-01 at 4.21.21 PM.png`
- Layout reference 2: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_BJRPIo/Screenshot 2026-09-01 at 4.22.59 PM.png`
- Generated SemanticLab topology asset: `public/images/deck/tieman/fragmented-topology.png`
- Implementation route: `/deck/tieman-tankers`, slide 2 of 13
- Desktop settled implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-fragmentation-desktop-v1.png`
- Desktop animation entry: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-fragmentation-entering-clean.png`
- Mobile top implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-fragmentation-mobile-v1.png`
- Mobile bottom implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-fragmentation-mobile-bottom-v1.png`
- Following problem slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-problem-after-fragmentation.png`

The two supplied slides are authoritative for the scattered circular-node composition and the fragmented-estate idea. SemanticLab staging is authoritative for palette, typography, particle texture and presentation voice. Tieman's identified software estate is represented with live HTML labels and Lucide icons; the generated image is deliberately text-free.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | Density and state |
| --- | ---: | ---: | --- |
| Layout reference 1 | 1590 × 810 | supplied slide frame | source bitmap |
| Layout reference 2 | 1599 × 834 | supplied slide frame | source bitmap, connected state |
| Generated topology asset | 1672 × 941 | full-bleed 16:9 slide backdrop | source bitmap |
| Desktop implementation | 1439 × 941 | 1672 × 941 configured browser viewport; centered 16:9 slide stage | 1× capture, settled after 1450ms |
| Desktop entry implementation | 1439 × 941 | 1672 × 941 configured browser viewport; centered 16:9 slide stage | 1× capture, 300ms entry state |
| Mobile top implementation | 390 × 844 | 390 × 844 viewport | 1× capture, settled state |
| Mobile bottom implementation | 390 × 844 | 390 × 844 viewport, scrolled to slide footer | 1× capture, settled state |

The desktop screenshot utility excludes browser chrome and captures the visible canvas, so its pixel width differs from the configured viewport. The reference and implementation use different frame proportions and art direction; comparison used complete-slide views in a single visual pass rather than a misleading pixel overlay. The full desktop capture provides composition evidence, while the mobile top and bottom captures provide focused evidence that every live label, icon and consequence statement remains readable and reachable.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Typography: the headline, kicker and explanatory copy use the existing Tieman deck hierarchy and preserve readable wraps at desktop and mobile sizes.
- Spacing and layout rhythm: desktop keeps the reference's scattered-node rhythm with a clean headline zone; mobile intentionally changes to a two-column node grid so the content does not collide or overflow.
- Colours and tokens: the reference's white/navy/red treatment is intentionally translated into SemanticLab near-black, off-white and electric-lime tokens. No off-brand accent colours or gradients were introduced.
- Image quality: the 1672 × 941 generated backdrop is sharp at the slide's target aspect ratio. Its detail stays away from the headline and does not compete with live text.
- Copy and content: the six nodes use Tieman-specific sources—Epicor, SolidWorks, PDM, Word + PDF, Excel and People—rather than the generic technology labels in the references.
- Iconography: all app/source icons are real Lucide SVG components. App names, roles and the consequence statement remain live HTML.
- Motion: the backdrop and nodes reveal in a short stagger, followed by the consequence rail. The 300ms and settled captures confirm the intended progression. `prefers-reduced-motion` disables the animation.
- Interaction: Home, Arrow Left and Arrow Right were exercised through all 13 slides. Slide 2 advances to the existing problem statement as intended, and mobile vertical scrolling reaches the complete slide.
- Runtime: all 13 slide headings rendered in sequence, all images loaded, and the app console stayed clean. Browser-extension warnings observed in connected Chrome were unrelated to the deck; the in-app browser console returned no application errors.

## Intentional differences from the references

- Dark SemanticLab staging art direction replaces the source slide's light canvas and red connection state.
- The generated particle topology replaces the generic dotted-grid backdrop.
- Six consistently sized Tieman system nodes replace the reference's generic, variably sized technology nodes.
- The headline is left aligned to match the deck's editorial system rather than centered.
- The animation reveals context progressively; it does not reproduce the reference's red dashed-line state.

## Comparison history

### Initial render

- The first browser render exposed a transient Vite dependency pre-bundle overlay after introducing direct Lucide icon imports.
- Reloading after the dependency refresh removed the development-only overlay; it did not recur in the clean post-fix captures.

### Final comparison

- Both source references, the settled desktop implementation and the mobile implementation were inspected together in one visual comparison pass.
- The final implementation preserves the references' core hierarchy: statement first, distributed sources second, fragmentation consequence last.
- Desktop, animation-entry, mobile-top and mobile-bottom evidence confirms the responsive and motion states.
- No visual fixes were required after the final comparison.

## Browser workflow

- The in-app browser successfully rendered the local slide and returned a clean console, but local keyboard and click events did not reach the presentation state.
- The connected Chrome browser was therefore used for interactive keyboard, animation and mobile-scroll QA.

## Verification

- Browser-rendered at a configured 1672 × 941 desktop viewport and a 390 × 844 mobile viewport.
- Verified the 300ms entry state and 1450ms settled state.
- Verified all six nodes, the consequence rail, footer and keyboard navigation.
- Verified the following problem slide and the full 13-slide sequence.
- Verified no broken images or application console errors.
- `git diff --check` and the aggregate `npm run check` pass, including preview and production artifact assertions plus both Cloudflare dry runs.

## Follow-up polish

- P3 option only: vary desktop node sizes slightly for a closer match to the source's orbital rhythm. The current consistent sizing is retained for SemanticLab brand restraint and label legibility.

## Result

final result: passed
