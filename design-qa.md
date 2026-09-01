# Tieman Solution Stack Slide QA

## Visual truth

- Source visual: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_aFdQxP/Screenshot 2026-09-01 at 4.23.36 PM.png`
- Implementation route: `/deck/tieman-tankers`, slide 5 of 14
- Initial desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-stack-desktop-v1.png`
- Final desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-stack-desktop-stable.png`
- Mobile top implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-stack-mobile-v1.png`
- Mobile bottom implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-stack-mobile-bottom-v1.png`

The supplied screenshot is authoritative for the architecture: applications and AI capabilities above one wide governance/context layer, with existing data sources below it. The existing SemanticLab Tieman deck is authoritative for dark-canvas art direction, type, palette, spacing and navigation.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | Density and state |
| --- | ---: | ---: | --- |
| Source visual | 1523 × 779 | supplied landscape slide | source bitmap |
| Initial desktop implementation | 1439 × 941 | 1672 × 941 configured browser viewport; centered 16:9 stage | 1×, settled state |
| Final desktop implementation | 1788 × 1169 | 1788 × 1169 connected-browser viewport; 1788 × 1006 centered 16:9 stage | 1×, settled state |
| Mobile top implementation | 390 × 255 | 390 × 844 CSS viewport | 1×, browser panel capture of visible top region |
| Mobile bottom implementation | 390 × 255 | 390 × 844 CSS viewport, slide stage scrolled to 820px | 1×, browser panel capture of visible bottom region |

The source and implementation have different frame proportions and the implementation includes the deck's persistent headline and footer. Full views were compared in a single visual input without a pixel overlay. Desktop is the primary fidelity surface. The connected Chrome screenshot API captured only the visible 390 × 255 panel region during mobile emulation, so mobile visual claims are supplemented by browser-measured CSS rectangles and scroll evidence rather than treated as full-frame fidelity evidence.

## Full-view comparison

- The implementation preserves the source's three-part visual hierarchy: applications and agents, one dominant shared layer, and existing source systems.
- The SemanticLab translation deliberately replaces the source's generic vendor logos and pale red/blue fields with Tieman-specific names, Lucide icons, off-white application cards, a vivid lime context layer and a dark source rail.
- The final desktop capture and the source screenshot were opened together in the same comparison pass.

## Focused evidence

- The application cards, unified context layer and source rail are large enough to read in the complete desktop capture, so a separate desktop crop was not required.
- Mobile browser measurements confirm a 344px content width, two 166px application-card columns, a 344px context layer, two 171.5px source-card columns and no horizontal overflow.
- The mobile slide measures 1664px high within an 844px scroll viewport. Scrolling reached 820px, placing the complete footer at 710–750px inside the viewport.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Fonts and typography: the slide uses the existing SemanticLab deck font family, light display weight, italic lime emphasis, uppercase layer labels and compact supporting text. The headline wraps in two deliberate lines at presentation size.
- Spacing and layout rhythm: the final diagram begins immediately after the heading block, uses four equal application cards, one full-width context layer and six equal source cells. Vertical connectors align with the relevant layers.
- Colours and tokens: near-black, off-white and electric lime reuse the existing SemanticLab tokens. The context layer is the strongest colour block so the shared foundation reads before any individual application.
- Image and icon fidelity: the reference contains vendor-specific marks that are not relevant to Tieman. All replacements use real Lucide SVG icon components; no generated placeholder logos, emoji or handcrafted SVG artwork is used.
- Copy and content: sources are Epicor, SolidWorks, PDM, Word + PDF, Excel and People. The context capabilities are Job context, BOM + parts, Revisions, Evidence, Permissions and Ownership. The application layer uses four credible examples without implying a fixed product scope.
- Motion: sources reveal first, the context layer resolves second, and application cards reveal last. `prefers-reduced-motion` presents the final stack immediately.
- Interaction and accessibility: Home and Arrow Right were used to traverse all 14 slides. Slide numbers and headings were verified in sequence; the new solution slide advances to the ripple-effect slide. The diagram has a semantic region label, lists, headings and decorative icons hidden from assistive technology.
- Runtime: all 14 headings rendered, all slide numbers report `/ 14`, and no application console errors or warnings were present. Connected Chrome reported only unrelated extension warnings.

## Comparison history

### Initial pass

- [P2] The diagram sat too low in the frame, leaving a large gap after the headline, and the applications/source layer labels were clipped outside the content boundary.
- Fix: changed the diagram from bottom alignment to start alignment, moved the layer labels into the visible flow and lengthened the source connectors to preserve the layered relationship.
- Evidence: `tieman-solution-stack-desktop-v1.png` records the initial state.

### Post-fix pass

- The final desktop implementation was reopened alongside the source visual.
- The layer labels are visible, the stack begins directly below the editorial heading, and the source-to-context-to-application relationship is clear.
- Evidence: `tieman-solution-stack-desktop-stable.png`.
- No P0, P1 or P2 findings remain.

## Browser workflow

- The in-app browser was selected first. It could not open the local URL and returned `ERR_BLOCKED_BY_CLIENT`.
- The already-connected Chrome browser was used as the documented fallback for local visual, interaction, responsive and console QA.

## Verification

- The aggregate `npm run check` and `git diff --check` pass, including preview and production artifact assertions plus both Cloudflare dry runs.
- Desktop page identity: `SemanticLab × Tieman Tankers | Opportunity` at `/deck/tieman-tankers`.
- Verified meaningful DOM content and no framework overlay after the one-time Vite icon dependency refresh.
- Verified the solution slide in settled and build-animation states.
- Verified 14-slide keyboard traversal and slide-number continuity.
- Verified mobile two-column card grids, zero horizontal overflow and complete vertical reach.

## Follow-up polish

- P3 option only: add a presenter-triggered second fragment that highlights one example app after the whole stack has assembled. The current automatic build is retained for a simple executive narrative.

## Result

final result: passed
