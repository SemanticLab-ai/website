# Tieman Deck QA

## Redundant how-we-work slide removal — QA

- Source of truth: the user's browser annotation requesting removal of the complete `HOW WE WORK / Start small. Prove value. Expand safely.` slide.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-approach-removal/01-before-live.png`.
- Removed the slide component, its two data collections, four now-unused icon imports and all dedicated desktop and responsive styling.
- Final transition evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-approach-removal/02-diamond-final-local.png` advances directly to `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-approach-removal/04-operating-layer-final-local.png`.
- Renumbered the operating-layer, flow, security, pilot and next-step slides and restored the main deck total to 15. The evidence slide remains slide 9 and the double-diamond remains slide 10.
- Browser validation confirmed all five operating-layer milestones settle after the direct transition, the removed headline is absent, all counters show `/ 15`, and warning/error logs are empty.
- Final result: passed.

## Slide 10 double-diamond process with evidence preservation — QA

- Source visual truth: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_ZDZNNw/Screenshot 2026-09-02 at 10.07.40 AM.png` (1270 × 867px). The reference establishes the two-diamond `Discover → Define → Design → Deliver` structure, divergence/convergence labels, a central problem-definition decision and a left-to-right challenge-to-solution flow.
- Previous live evidence slide: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide9-double-diamond/01-before-live.png`.
- Restored evidence-slide proof: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide9-double-diamond/06-evidence-restored-local.png`. GameDay, PartsHQ and Podly remain together as slide 9, with all three metrics and descriptions unchanged.
- Final double-diamond implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide9-double-diamond/08-diamond-final-local.png` (browser-surface capture; 1280 × 720 CSS viewport; devicePixelRatio 1), slide 10 at final fragment 4.
- Reveal evidence: `07-diamond-initial-local.png`, `03-step1-local.png`, `04-step2-local.png` and `08-diamond-final-local.png` in the same folder. The four presenter-controlled steps reveal `Challenge + Discover`, `Define + Clear problem`, `Design`, then `Deliver + Validated solution + Learn, then repeat`.
- Full-view comparison: the implementation preserves the reference's paired-diamond hierarchy, central decision gate, left-to-right endpoints and diverge/converge terminology. The white, blue and teal source palette was intentionally translated to the existing Tieman dark canvas, SemanticLab lime accent, hairline borders and restrained elevated surfaces.
- Focused comparison was not required: the reference contains no photographic or detailed raster assets, and every diagram label, endpoint and transition is legible in the full-view capture. Standard Lucide arrows and loop iconography are used for directional affordances.
- Fonts and typography: the existing deck display and label styles are preserved. The headline remains the dominant reading layer; phase headings, diamond labels and endpoint copy remain legible without clipping or unintended wrapping.
- Spacing and layout rhythm: the diagram is centred beneath the headline with equal diamond proportions, balanced endpoints and a separate concluding principle rail. No overlap or footer collision is visible.
- Colors and visual tokens: only existing deck tokens are used (`--sl-canvas`, `--sl-surface-1`, `--sl-text-primary`, `--sl-border`, `--sl-accent`), so the visual is recognisably part of the same deck rather than imported reference styling.
- Image quality and asset fidelity: the reference is a geometric process model rather than a bitmap asset. It was rebuilt as semantic slide content so labels remain sharp and individually revealable at presentation scale; no raster placeholders or generated image assets were needed.
- Copy and content: slide 10 says `Find the right problem. Then build the right solution.` and cleanly separates problem framing from slide 11's delivery-loop story. The deck now totals 16 slides so the evidence slide is retained rather than replaced.
- Comparison history: the first local pass used 17.7cqw diamonds and 1.22cqw stage labels, which read too small against the reference at presentation scale (P2). The final pass increased the diamonds to 19.6cqw, stage labels to 1.35cqw and the central gate to 8.8cqw; the post-fix evidence is `08-diamond-final-local.png`.
- Browser validation: page identity and meaningful content passed; no framework overlay appeared; warning/error logs were empty. Slide 9 contains all three case studies, its next control opens the double-diamond, and the control after final fragment 4 advances to slide 11, where `Start small. Prove value. Expand safely.` renders.
- Residual gap: the mobile/portrait stacking rules were code-reviewed but the deck is a fixed 16:9 presentation surface, so this QA pass prioritised the presenter viewport rather than a separate mobile capture.
- Final result: passed.

## Assurance-label and Venn-spacing refinements — QA

- Source of truth: the user's two screenshot annotations requesting `Australian data hosting` become `Compliance` and more line height for the three-line platform name.
- Updated the assurance title to `Compliance` while retaining its existing map-pin icon and `Local data residency` supporting line.
- Compliance before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-compliance-spacing/01-compliance-before-live.png`; final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-compliance-spacing/03-compliance-after-local.png` at 1280 × 720 with the complete solution architecture revealed.
- Increased `Tieman / Intelligence / Platform` line height from `0.92` (16.7px rendered) to `1.08` (19.6px rendered) without changing its 18.2px size, 750 weight, centring or reveal timing.
- Venn before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-venn-platform-name/03-after-live.png`; final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-compliance-spacing/02-venn-after-local.png` at the same viewport and final fragment.
- Browser geometry verification confirmed all three platform-name lines remain inside the centre region. The final Venn reveal still hides and shows correctly, `Compliance` is visible in the assurance rail, and the old title is absent.
- Browser warning/error logs were empty and no framework overlay was present.
- Final result: passed.

## Slide 8 partnership-strip removal — QA

- Source of truth: the user's screenshot annotation requesting removal of the full-width `SemanticLab / AI + cloud + operational workflow design in one founder-led partnership.` strip from slide 8.
- Removed the strip, its divider and all dedicated desktop and responsive styling.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide8-studio-strip/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide8-studio-strip/02-after-local.png` at the same viewport and slide state.
- Collapsed the slide content grid from an occupied content row plus a 39.7px strip row to one 604.8px row, eliminating the empty bottom track and inherited row gap.
- Browser geometry verification confirmed both founder profiles remain equal at 351.6 × 456.6px with 98.2px clearance before the slide footer.
- The founder headline, portraits, bios, slide descriptor and navigation remain unchanged. Browser warning/error logs were empty, no framework overlay was present, and the next control advanced to the proof slide.
- Final result: passed.

## Slide 5 takeaway-strip removal — QA

- Source of truth: the user's screenshot annotation requesting removal of the `WHAT HAPPENS TODAY` takeaway strip from slide 5.
- Removed the full strip, including its label, sentence, divider and all dedicated desktop, responsive and reduced-motion styling.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide5-takeaway/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-slide5-takeaway/02-after-local.png` at the same viewport and systems-revealed state.
- Reduced the slide from two presenter fragments to one, eliminating the now-empty keypress that previously revealed the removed strip.
- Browser interaction verification confirmed all six system references remain hidden initially, appear on the single reveal, and the following keypress advances directly to the operational-impact slide.
- DOM verification found no takeaway element, label or full-size sentence inside the slide content. Browser warning/error logs were empty and no framework overlay was present.
- Final result: passed.

## Venn intersection platform-name refinement — QA

- Source of truth: the user's screenshot annotation requesting removal of `TIP` and a large, bold full platform name with one word per line.
- Removed the acronym completely and replaced the single italic line with `Tieman / Intelligence / Platform` across three centred lines.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-venn-platform-name/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/02/tieman-venn-platform-name/02-after-local.png` at the same viewport and final Venn fragment.
- Increased the full name from 9.2px italic supporting copy to 18.2px upright display type at weight 750. The existing intersection artwork, subtle glow and fragment-4 reveal remain unchanged.
- Browser geometry verification confirmed all three lines remain inside the 207.4 × 128px centre region, each word stays on one line, and no `TIP` text or acronym element remains.
- Hiding and revealing the final fragment correctly toggled the centre from hidden to visible. Browser warning/error logs were empty and no framework overlay was present.
- Final result: passed.

## Solution application-card refinement — QA

- Source of truth: the user's screenshot annotation requesting four revised application categories and a less white visual treatment.
- Updated the cards to `AI Agents`, `Automated Workflows`, `Dashboards` and `Custom Portals`; corrected the supplied `Dashbnoards` typo to `Dashboards`.
- Rewrote the short supporting lines to match each broader category and replaced the previous feature-specific icons with Bot, Workflow, Layout Dashboard and Portal icons.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-application-cards/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-application-cards/02-after-local.png` at the same viewport and fragment state.
- Replaced the four near-white surfaces with the deck's existing dark elevated surface, a restrained 7% lime wash, lighter lime-mixed borders and outlined lime icon discs. Card geometry and the four-column architecture remain unchanged.
- Browser verification confirmed all four cards have equal 143.2px heights, every title and supporting line stays inside its card, all old labels are absent, and the card grid remains hidden at fragment 2 before reappearing at fragment 3.
- Browser warning/error logs were empty and no framework overlay was present.
- Final result: passed.

## Context-to-source connector trim — QA

- Source of truth: the user's screenshot annotation showing the lower context-layer connectors extending too far into the box.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-connectors/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-connectors/02-after-local.png` at the same viewport and fragment state.
- Shortened each source connector from `2.75cqw` to `1.55cqw`, matching the rendered 19.5px gap between the context layer and source cards.
- Repositioned the travelling signal from `-2.55cqw` to `-1.1cqw` so it remains centred on the shorter connector path.
- Browser geometry verification reduced context-layer penetration from approximately 15.7px to 0.3px. All six connectors remain aligned to their source cards and visible from fragment 2 onward.
- Headline, architecture content, reveal sequence, source-card geometry and context-layer styling are unchanged. Browser warning/error logs were empty.
- Final result: passed.

## Tieman flow dark-mode conversion — QA

- Source of truth: the user's annotation requesting dark mode for the `How it works for Tieman` slide.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-flow-dark/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-flow-dark/02-after-local.png` at the same viewport and slide state.
- Replaced the slide's light tone with the existing Tieman dark canvas and subtle radial lime wash; no new visual language or layout was introduced.
- Converted the three-step rail from light-surface borders and text tokens to the standard dark-surface border, primary-text and lime-accent tokens. The outcome label now uses the same restrained lime accent as the step identifiers.
- Headline, three step titles and descriptions, outcome statement, footer descriptor, numbering and geometry remain unchanged.
- Browser verification confirmed meaningful content, no framework overlay, an empty warning/error console, dark-surface rules and the expected `deck-slide--dark` class. Previous/next navigation returned to the slide in the same dark state.
- Final result: passed.

## Closing-slide headline refinement — QA

- Source of truth: the user's final-slide annotation requesting stronger copy for `Define the first proof—before committing to implementation.`
- Revised headline: `Turn the opportunity into a clear first move.` The existing lime italic emphasis now lands on `clear first move.`
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-next-step-copy/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-next-step-copy/02-after-local.png` at the same viewport and slide state.
- The new line frames Solution Discovery as decisive forward movement and links the opportunity narrative to an actionable pilot decision without introducing new terminology.
- Browser verification confirmed the old headline is absent, the CTA and all three discovery outputs remain present, and the new headline retains clean separation from the supporting copy, CTA and output rail.
- Previous/next navigation returned to the revised final slide with an empty warning/error console and no framework overlay.
- No layout, supporting copy, CTA, image treatment, output labels or footer descriptor changed.
- Final result: passed.

## Pilot recommendation dark-mode conversion — QA

- Source of truth: the user's annotation requesting dark mode for the `Pilot recommendation` slide.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-pilot-dark/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-pilot-dark/02-after-local-desktop.png` at the same viewport and slide state.
- Replaced the slide's light tone with the existing Tieman dark canvas and subtle radial lime wash; no new visual language or layout was introduced.
- Converted the supporting copy and capability descriptions from light-surface text tokens to dark-surface text tokens, all rules from `--sl-border-on-light` to `--sl-border`, and the section numbering to the standard lime accent.
- Headline, supporting sentence, three capability rows, phase-one promise, footer descriptor and slide numbering are unchanged.
- Browser verification confirmed meaningful content, no framework overlay, an empty warning/error console and the expected `deck-slide--dark` class. Previous/next navigation returned to the slide in the same dark state.
- Final result: passed.

## Security headline refinement — QA

- Source of truth: the user's security-slide annotation requesting stronger copy for `Trust is part of the architecture—not a later control.`
- Revised headline: `Trust is built into every layer.` The existing lime italic emphasis now lands on `every layer.`
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-security-copy/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-security-copy/02-after-local.png` at the same viewport and slide state.
- The shorter construction is direct, confident and connects the conclusion to the six adjacent layers of control without introducing new terminology.
- Browser verification confirmed the old line is absent, all six security controls remain present, and the headline retains a 69.1px horizontal gap from the control grid with no clipping or collision.
- No layout, control copy, slide descriptor or visual styling changed.
- Final result: passed.

## AI operating-layer roadmap — QA

- Source of truth: the user's slide annotation requesting that the static operating-layer stack become an animated timeline or roadmap.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-operating-roadmap/01-before-live.png` at 1280 × 720.
- Animation evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-operating-roadmap/02-roadmap-initial-local.png`, `03-roadmap-mid-local.png` and `04-roadmap-final-local.png` at the same viewport and slide state.
- Rebuilt the right-hand stack as a left-to-right five-milestone roadmap: `Source systems → Connected data layer → Semantic layer → Business meaning → Applications & agents`.
- Preserved every original layer title and descriptor while reversing the visual order into a chronological build sequence. Added a short roadmap label and one interpretation line without changing the slide headline or governance language.
- The connecting rail draws once from left to right. Milestones then arrive in a 180ms stagger, with binary visibility and transform-only movement; `Applications & agents` resolves as the sole lime-filled outcome node.
- `Governed throughout` appears last as the continuous foundation beneath the roadmap. Reduced-motion styling resolves the rail, milestones and governance state immediately.
- The responsive treatment converts the horizontal roadmap into a vertical milestone timeline with the same content order and a top-to-bottom rail.
- Browser timing verification at 320ms found only the first two milestones visible; at 1.57s all five milestones, the full rail and governance row were settled. Navigating away and back replayed the entrance cleanly.
- Desktop geometry leaves 176.8px between the roadmap and governance row and 25.1px before the footer; no content clips or overlaps. Browser warning/error logs were empty.
- Final result: passed.

## Agile value-loop visual — QA

- Source of truth: the user's slide annotation requesting an agile-practices visual that shows where value is added and how iteration informs the next build.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agile-loop/01-before-live.png` at 1280 × 720.
- Final local evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agile-loop/02-after-local.png` at the same viewport and slide state.
- Added a distinct `Build → Validate → Learn → Add value` delivery loop in the existing empty centre of the slide. The value-producing step receives the only lime-tinted surface; every other step remains on the established dark canvas.
- Added a restrained return rail and loop icon with the explicit conclusion `Learning informs the next build.` so the method reads as iterative rather than a one-way sequence.
- Preserved `Understand / Shape / Prove / Expand` as the strategic engagement framework underneath, including all original copy, numbering and ordering.
- The new visual uses the deck's existing hairline rules, small uppercase labels, Lucide iconography, restrained lime accent and square geometry. No new design language or image assets were introduced.
- Desktop layout verification found 122.9px between the heading and loop, 99.8px between the loop and stage rail, and 25.1px between the principle and slide footer; no element clips or overlaps.
- The responsive treatment converts the loop to a readable single-column sequence and removes the inline arrow connectors while preserving the feedback statement.
- Browser verification confirmed slide navigation away and back, all four loop steps, all four original stages, the feedback statement and an empty warning/error console.
- Final result: passed.

## Proof-slide attribution cleanup — QA

- Source of truth: the user's slide annotation requesting removal of the labels above every project name and the bottom previous-role disclaimer.
- Final desktop evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-proof-cleanup/01-proof-final-local.png` at 1280 × 720.
- Removed `Raihan · previous role`, `SemanticLab product` and `Naila · previous role` from the proof data and rendered identity blocks.
- Removed the full-width previous-role disclaimer and its responsive styling.
- Simplified the proof grid from an occupied content row plus an empty note row to one content row, eliminating inherited bottom spacing.
- GameDay, PartsHQ and Podly remain unchanged, as do all metrics, supporting descriptions, numbering, rules and typography.
- Browser verification confirmed all three names, zero identity labels, no disclaimer, three equal 130.5px rows and no warning/error logs.
- Final result: passed.

## Founder portrait framing — QA

- Source of truth: the user-selected founder slide in the main SemanticLab deck at `/deck`, captured at `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-headshots/01-reference-founders.png`.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-headshots/03-tieman-before-1280.png` at 1280 × 720.
- Final evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-headshots/05-tieman-final-local.png` at the same viewport and slide state.
- The original 350 × 160px landscape slots were only 46% as tall as they were wide and enlarged the portrait assets by 150–165%, creating a visibly cut-off band.
- Matched the main deck's portrait treatment: near-square 350 × 333px frames, `object-fit: cover`, no transform scaling, and the reference face positions (`50% 17%` for Raihan and `50% 22%` for Naila).
- Both source assets retain their natural dimensions and now show complete heads and substantially more upper torso. The profile block ends 66px before the studio rail, with no clipping or collision.
- Typography, copy, image assets, founder order, dark-mode palette and overall slide composition are unchanged.
- Browser verification confirmed the intended slide identity, intrinsic image dimensions, final crop geometry and an empty warning/error console.
- Final result: passed.

## Unified context-layer refinement — QA

- Source of truth: the user's slide 07 annotations requesting a less dominant context layer, separate component entrances and removal of the duplicated `CONTEXT LIVE` label.
- Before evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-layer/01-before-live.png`.
- Final desktop evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-layer/06-context-final-local.png`.
- Reveal evidence: `04-context-early-local.png` and `05-context-mid-local.png` in the same folder show the context identity followed by the six capabilities resolving in order.
- Replaced the full lime fill with the established dark surface token, a restrained 9% lime wash, a thin mixed border and a lime inset rail. Typography, geometry, architecture order, icons and copy remain within the existing deck system.
- Removed the `CONTEXT LIVE` label and its unused icon import completely; DOM verification confirms it is absent.
- Preserved the existing presenter-controlled architecture sequence. Fragment 2 now staggers the shield, layer label, headline and six context chips from 100–620ms, so the component detail appears one item at a time without adding another keypress.
- Reduced-motion styling suppresses the stagger while leaving every context item visible.
- Browser verification confirmed the final surface resolves to `--sl-surface-2`, all six items settle at opacity `1`, the mobile viewport has zero horizontal overflow and no browser warning/error logs were reported.
- Final result: passed.

## Slide 05 reveal simplification and copy — QA

- Source of truth: the user's three slide 05 annotations requesting removal of the intermediate convergence state and exact updates to the headline and takeaway.
- Desktop evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-question-reveal/step-0-question.png`, `step-1-systems.png` and `step-2-takeaway.png` at 1280 × 720.
- Mobile evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-question-reveal/mobile-step-2.png` at 390 × 844.
- Headline now reads `A simple question becomes a series of searches across systems.`; takeaway and footer descriptor now read `The answer exists but the context has to be reconstructed`.
- Slide 05 now has two fragments: the first keypress reveals the six system answer fragments in their original distributed positions; the second reveals the takeaway. The next keypress advances directly to slide 06.
- Bounding-box verification confirmed all six system fragments keep identical x/y positions between fragments 1 and 2, removing the redundant convergence motion completely.
- Browser verification confirmed keyboard navigation, correct fragment count and step data, zero mobile horizontal overflow and no browser warning/error logs.
- Final result: passed.

## Redundant opportunity-summary removal — QA

- Source of truth: the user's annotation identifying the standalone `WHAT TIEMAN IS TRYING TO ACHIEVE` opportunity summary as redundant.
- Desktop transition evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-opportunity-removal/slide-06-impact.png` followed directly by `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-opportunity-removal/slide-07-solution.png` at 1280 × 720.
- Mobile evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-opportunity-removal/slide-07-solution-mobile.png` at 390 × 844.
- Removed the redundant component, its five-step flow data and its now-unused responsive styling. No other slide component or visual treatment was changed.
- The definitive story sequence now advances directly from challenge impact slide `06 / 15` to the architecture solution slide `07 / 15`; the next complete architecture reveal advances to Why SemanticLab at `08 / 15`.
- Reverse navigation returns from the solution directly to the fully revealed challenge-impact state. All five solution fragments remain presenter-controlled.
- Browser verification confirmed meaningful rendered content, correct slide labels and numbering, no framework overlay, zero mobile horizontal overflow and no browser warning/error logs.
- Final result: passed.

## Story landscape entrance restoration and simplification — QA

- Source of truth: the original SemanticLab fragmented-landscape motion already present in repository history and the user's slide 4 annotation asking for that initial animation back.
- Entrance evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-landscape-animation/01-entrance-initial-local.png`, `02-entrance-mid-local.png` and `03-entrance-final-local.png` at 1280 × 720.
- Updated-headline evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-landscape-copy/01-headline-desktop-local.png`. The exact heading is `The knowledge exists, but in different systems.` and the existing second-line emphasis is preserved.
- Simplified final state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-landscape-simplified/01-simplified-desktop-local.png` at 1280 × 720.
- Restored the established 1.35-second topology fade/scale and 680ms staggered system-node entrance with the original 220–720ms delays. No geometry, copy, colour, typography or asset changes were introduced.
- Computed-state verification confirmed the nodes begin at staggered opacity values, all settle at opacity `1`, and the backdrop settles at its existing `0.64` opacity.
- The tanker-job card, its six connectors and the bottom `THE REALITY` consequence section were removed. Slide 4 now has fragment count `0`, and its next control advances directly to slide 5.
- Reduced-motion rules now suppress the restored entrance while preserving the complete static composition.
- No browser warning or error logs were reported.
- Final result: passed.

## Vision copy correction — QA

- Source of visual truth: the user's slide 3 annotation requesting the exact headline `Three emerging themes` and removal of the grey `THREE THEMES.` line.
- Desktop evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-copy/01-vision-copy-desktop-local.png` at 1280 × 720.
- Mobile evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-copy/02-vision-copy-mobile-local.png` at 390 × 844.
- The scoped copy change preserves the established SemanticLab composition, display type, lime accent, Venn imagery, fragment sequence and navigation without introducing new visual language.
- DOM verification confirmed the exact new headline, absence of both old headline strings, retention of `One connected opportunity.`, zero mobile horizontal overflow and no browser warning/error logs.
- Final result: passed.

## Clean-route story merge and cover subtitle — QA

- Source of visual truth: the user's cover annotation and instruction to merge the `?challenges=story` sequence into the main deck.
- Desktop evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-main-route/01-cover-clean-route-desktop.png` at 1280 × 720.
- Mobile evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-main-route/02-cover-clean-route-mobile.png` at 390 × 844.
- The cover subtitle and footer descriptor now read `Tieman Tankers · Data & AI Transformation`; the title, partner lockup, imagery, composition and navigation are unchanged.
- The clean `/deck/tieman-tankers` route now selects the story-led challenges sequence by default. The previous comparison sequence remains available only through `?challenges=current`, so no slide implementation was deleted.
- Browser verification stepped through the definitive Venn vision reveal and confirmed that the next slide on the clean route is `The knowledge exists, but in different systems.` with the `Where knowledge lives` control label.
- Required fidelity surfaces passed: the existing display/UI typography is unchanged; spacing and layout rhythm are unchanged; SemanticLab colours and imagery are unchanged; the new subtitle remains readable at desktop and mobile sizes; all existing copy outside the scoped subtitle is unchanged.
- The in-app browser reported no warning or error logs at either viewport.
- Final result: passed.

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
- Agenda source cover: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-source-cover.png`
- Agenda source adjacent slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-source-current-slide-2.png`
- Agenda desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-local.png`
- Agenda mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-mobile.png`
- Agenda source/implementation context board: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-context-board.png`
- Vision design-language source: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-source-current-slide-2.png`
- Rejected vision draft: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-local-final.png`
- Interim clean-list vision: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-clean-1280.png`
- User-selected vision layout reference: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_oJhF3q/Screenshot 2026-09-01 at 8.01.56 PM.png`
- Vision desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-objectives-final.png`
- Vision mobile implementation, top and scrolled: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-objectives-mobile.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-objectives-mobile-scrolled.png`
- Vision source/implementation context board: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-objectives-context-board.png`
- Mobile source reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-1.png`
- Mobile final state, top/bottom: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-solution-fragment-mobile-4-top.png` and `tieman-solution-fragment-mobile-4-bottom.png`
- Implementation route: `/deck/tieman-tankers`; vision slide 3 of 15 and solution slide 6 of 15.

The user annotation is authoritative for composition and interaction. The existing SemanticLab deck remains authoritative for typography, colour, iconography and navigation.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Desktop implementation | 1788 × 1169 | 1788 × 1169 browser viewport; centered 16:9 stage | fragments 0–4 |
| Source-only before/after | 1588 × 1260 each | 1588 × 1260 browser viewport; centered 16:9 stage | fragment 1 |
| Source-label comparison | 1280 × 720 each | Both 16:9 slide stages normalised to 1280 × 720 and combined side by side | fragment 1 |
| Processing before/after | 1280 × 720 each | Equal-size 16:9 browser captures combined side by side at 1× density | fragment 2 |
| Agenda context board | 1280 × 720 each | Cover, adjacent existing slide and new agenda combined at equal 16:9 size and 1× density | slide 2 |
| Vision context board | Source normalised from 1586 × 929 to 1280 × 720; implementation 1280 × 720 | User-selected slide reference and new vision slide combined side by side at equal 16:9 size and 1× density | slide 3 |
| Mobile implementation | 390 × 844 | 390 × 844 viewport; 1900px scrollable stage | fragments 1 and 4 |
| Agenda mobile | 390 × 844 | 390 × 844 viewport at 1× density | slide 2 |
| Vision mobile | 390 × 844 | 390 × 844 viewport at 1× density; top and scrolled states | slide 3 |

This is a composition and behavioural refinement rather than a pixel clone. Desktop is the primary presentation surface. Mobile was checked for content order, complete reach and horizontal overflow.

## Findings and fixes

- [P2] Excess unused space beneath the architecture made the solution feel undersized. Fixed by stretching the diagram through the available content row, enlarging all three architecture tracks and keeping a clean final gap before the footer.
- [P2] The source, context and application layers read as one compressed block. Fixed with larger inter-layer gaps, longer connectors and larger cards, icons and supporting copy.
- [P1] The automatic entrance sequence did not give the presenter control. Fixed with four fragments: data sources → unified context → apps and agents → secure-by-design bracket. Arrow Right, Space, Enter and the next button reveal one fragment; one additional action advances to slide 6. Arrow Left reverses the fragment sequence.
- [P2] The source-only fragment showed six vertical connectors and ran card/signal loops before any destination layer existed. Fixed by removing source-card and signal animations and setting every connector to zero opacity in fragment 1. The source-to-context connectors and motion now begin only in fragment 2.
- [P2] The `TIEMAN DATA + KNOWLEDGE` label sat above the six source cards, competing with the connector origin and reading like a separate incoming layer. Fixed by placing the label directly below the source-card grid in every reveal state, with a compact responsive margin.
- [P2] Processing motion competed with the content because source cards, application cards, the context panel, the live mark and assurance items all pulsed alongside the travelling connector signals. Fixed by removing animation from every box and supporting label, retaining only the connector signals, slowing them to 7.6s, reducing their peak opacity to `0.58`, reducing their size to `0.64cqw`, and reducing connector-line opacity from `0.48` to `0.3`.
- [P2] The deck moved directly from the transformation cover into the vision/problem narrative without orienting the audience. Fixed by inserting a dedicated agenda as slide 2 with the six requested sections and shifting every existing slide index, heading id, footer count and control label to a 15-slide sequence.
- [P2] The previous slide 3 described system fragmentation instead of articulating Tieman's executive vision. The first replacement compressed the brief into a north-star outcome and four objective cards.
- [P1] The user found that first replacement too generic and said it did not communicate the vision. Fixed by removing the outcome-dashboard composition and rebuilding the slide around the user's preferred strategic statement and all eight operational knowledge domains in a clean, numbered two-column list.
- [P2] The clean eight-domain list communicated scope but still diluted the primary ambition. The user selected the existing operating-layer slide as a stronger layout reference. Fixed by mirroring its left-statement/right-rail composition, highlighting the throughput objective and condensing the brief into five strategic objectives.
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
- The agenda context board shows the new slide using the same dark canvas, lime accent, display type, small uppercase kicker, hairline rules and footer/navigation treatment as the adjacent source slides. The full 1280 × 720 view keeps every label readable, so no additional desktop focused crop was needed; the separate 390 × 844 capture is the focused responsive evidence.
- Agenda DOM verification contains exactly: Tieman's vision, Problem statement, The opportunity, Why us?, Case studies and Next steps. Its footer and presentation controls report `02 / 15` and `Agenda`.
- Keyboard Arrow Right moves from agenda slide 2 to the existing context/vision slide at `03 / 15`; Arrow Left returns to agenda. The first cover reports `01 / 15`.
- At 390 × 844, the complete agenda, footer and controls fit in one viewport and `documentElement.scrollWidth` equals 390px.
- Agenda fidelity surfaces passed: typography uses the deck's existing display and UI fonts; spacing follows the established left-copy/right-content rhythm; colours and rules use existing SemanticLab tokens; no new image assets were needed; all requested copy is present and correctly capitalised.
- Agenda browser checks passed for page identity, meaningful DOM content, framework-overlay absence, desktop and mobile screenshots, keyboard interaction and an empty warning/error console.
- The final vision context board confirms the implementation closely follows the user-selected operating-layer reference: bold statement on the left, five evenly sized ruled rows on the right, first row highlighted in lime, and a supporting foundation rail beneath the objectives.
- Vision fidelity surfaces passed: display and UI typography use the existing deck families and weights; the 0.82 / 1.18 composition and row rhythm match the chosen source; all colours and rules use existing SemanticLab tokens; no image asset was needed for this text-led slide; copy is condensed into one business ambition and five objectives without introducing technical architecture.
- The 1280 × 720 full-view comparison keeps every important label readable, so no desktop focused crop was needed. The separate 390 × 844 top and scrolled captures provide the focused responsive evidence and confirm the north-star card, all four objectives, footer and controls are reachable without horizontal clipping.
- Vision DOM verification contains the strategic statement and all five objectives: Increase throughput, Find knowledge faster, Align every team, Reduce delivery risk and Preserve + protect knowledge. Its footer and presentation controls report `03 / 15` and `Tieman's vision`.
- Vision browser checks passed for meaningful DOM content, Arrow Right navigation, mobile scrolling, responsive footer reach and an empty warning/error console.
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

## Venn vision alternate — QA

### Source and implementation evidence

- Selected ImageGen visual target: `/Users/raihanrazi/.codex/generated_images/01a05b75-a5e0-7190-a0b7-e2447ba74e29/exec-93efc900-33a7-496f-b0c0-967231c1a384.png`
- User-annotated implementation before the alignment correction: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-before.png`
- Before/source comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-comparison-before.png`
- Final source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-final-comparison.png`
- Focused diagram comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-focused-comparison.png`
- Final reveal sequence, fragments 0–4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-final-sequence.png`
- Final desktop fragment 4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-final-1588x1260.png`
- Final mobile fragment 4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-alignment-mobile-final.png`
- User close-up identifying the incorrect floating centre: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_laEqbf/Screenshot 2026-09-01 at 9.23.01 PM.png`
- User evidence / exact-intersection comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-user-vs-exact.png`
- Exact-intersection reveal sequence, fragments 0–4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-exact-sequence.png`
- Exact-intersection desktop fragment 4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-exact-step-4.png`
- Exact-intersection mobile fragment 4: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-exact-mobile-viewport.png`
- Core-copy source state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-exact-intersection-live.png`
- Core-copy desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-core-copy-desktop-final.png`
- Core-copy mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-core-copy-mobile-final.png`
- Core-copy full-view comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-core-copy-before-after-full.png`
- Core-copy focused comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-vision-venn-core-copy-before-after-focused.png`
- Alternate implementation route: `/deck/tieman-tankers?vision=venn`; the existing `/deck/tieman-tankers` vision slide remains unchanged.

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Selected concept | 1672 × 941 | Normalised to 1588 × 894 for direct comparison | fully revealed concept |
| Desktop implementation | 1588 × 1260 | 1588 × 1260 CSS viewport; 1588 × 894 centred 16:9 stage; devicePixelRatio 1 | fragments 0–4 |
| Full comparison board | 3176 × 894 | Source and implementation at equal 1588 × 894 size | fragment 4 |
| Focused comparison board | 1900 × 800 | Matching 950 × 800 diagram regions combined side by side | fragment 4 |
| Mobile implementation | 390 × 844 | 390 × 844 CSS viewport; devicePixelRatio 1 | fragment 4 |

### Findings, fixes and iteration history

- Pass 0 — blocked: the user-annotated state was mathematically symmetric but visibly undersized. The circles left excess canvas, the lower copy sat too low in its lobes, the headline was optically below the diagram, and the shared-centre copy was cramped inside an undersized highlight.
- [P2] Circle scale and presentation balance. Fixed by increasing the circle box from `31.5cqw` to `35.2cqw`, using an `18.7cqw` centre distance and recalculating the exact equilateral rise to `16.195cqw`. This enlarges both the diagram and the shared overlap while preserving equal geometry.
- [P2] Outcome-copy alignment. Fixed by replacing hand-tuned top-circle offsets with a true 50% horizontal anchor, mirroring the two lower copy centres around the diagram axis and placing both lower headings on the same vertical baseline.
- [P2] Headline/diagram optical alignment. Fixed by moving the headline anchor from 50% to 47% of the content height and aligning the visible circle group to the top and footer rhythm of the selected concept.
- Pass 1 — blocked: circle scale and lobe alignment were corrected, but the shared-centre asset and title remained visually weaker than the enlarged overlap.
- [P2] Shared-centre hierarchy. Fixed by centring the core on the mathematical centroid, expanding the generated intersection asset to `22.5cqw`, increasing the operating-platform title and preserving a single compact supporting line.
- [P2] Mobile copy collision and readability. The first 390px state allowed the top bullets and lower-lobe content to compete with the centre. Fixed by giving the top copy a 190px centred measure, giving each lower lobe a mirrored 160px measure, tightening vertical rhythm, increasing readable type and pinning the final copy bounds to exactly 0–380px inside the 380px diagram.
- Pass 2 — invalidated by user evidence: the bright core was a separately scaled approximation and did not trace the three visible circle boundaries. Although centred, it read as a floating rounded shape rather than the Venn's actual intersection.
- [P1] Shared-centre geometry. Fixed by measuring the circle asset's 1,132px visible diameter inside its 1,254px source canvas, applying that radius to the exact equilateral CSS geometry, and generating desktop and mobile transparent raster masks from the mathematical intersection of all three circles.
- [P2] Shared-centre scale and hierarchy. Fixed by replacing the inset 22.5cqw core artwork with a full-diagram intersection mask. The new lime region terminates precisely on all three circle boundaries and is 202 × 196px in the checked desktop state, compared with the prior 185 × 181px visible centre.
- Pass 3 — passed: the user-evidence comparison, complete five-state sequence, desktop view and mobile view contain no remaining actionable P0, P1 or P2 mismatch.
- [P2] Core-copy density. The final intersection still contained a label, three-line title and supporting sentence, making the centre feel crowded. Fixed by retaining only `Tieman's` and `intelligent platform`, forcing the requested two-line composition and centre-aligning the group.
- Pass 4 — passed: the full-view and focused before/after comparisons confirm the copy reduction is isolated to the shared centre. The desktop and mobile final captures show both lines fully contained by the lime intersection.
- No actionable P0, P1 or P2 findings remain after the final comparison.

### Geometry and visual verification

- Desktop browser-computed circle boxes are equal at 558.97 × 558.97px. Centre distances are 296.9518px, 296.9596px and 296.9531px; the maximum variance is less than 0.01px.
- The shared core is centred on the triangle centroid with a 0.01px horizontal offset and a 0.84px optical vertical offset.
- The two lower outcome headings share the same `679.42px` top position. Their copy centres sit 242.16px to either side of the `1025.83px` diagram axis.
- Mobile browser-computed centre distances are 139.9920px, 139.9920px and 140px; the maximum variance is less than 0.01px.
- At 390 × 844 the left and right lower copy bounds are exactly `0–160px` and `220–380px`; `documentElement.scrollWidth` equals the 390px viewport.
- The final source/implementation board confirms the alternate retains the selected composition: statement left, three translucent lime circles right, content in the outer lobes and a bright central system reveal.
- The focused comparison verifies the title, indices, outcome headings, supporting statements and central operating-platform label at readable scale. No additional crop was required after this focused pass.
- The final sequence board confirms fragments accumulate in the intended order: statement only → operational efficiency → future intelligence → risk and resilience → Tieman's intelligent operating platform.
- The exact-intersection comparison confirms the final lime centre is no longer an independently positioned shape. Its apex and two lower corners are the three pairwise boundary intersections, while each curved side is contributed by one source circle.
- Fragment 3 contains only the three translucent circles and their natural dark overlap; the bright intersection and centre copy remain fully absent until fragment 4.
- The final desktop `intelligent platform` line measures 155.27 × 17.81px at x=948.20–1103.47px. At its tightest row, the lime intersection spans x=945–1106px, preserving approximately 3px of clearance on both sides; clearance increases toward the lower edge.
- The 390 × 844 capture preserves the same two-line hierarchy inside the responsive intersection without clipping or horizontal overflow.
- Required fidelity surfaces passed: typography uses the existing display and UI families with increased internal readability; spacing is derived from one symmetric geometry; colours remain on the existing dark-canvas/lime token system; both visible Venn assets are optimised transparent raster images with no masking halo or compression artifact; all requested outcome and operating-platform copy is present.
- The generated circle and exact-intersection visuals are real raster assets. No placeholder, inline SVG, handcrafted SVG, CSS-drawn diagram or emoji is used.
- The in-app browser warning/error console is empty.

### Interaction and responsive checks

- Fragment visibility was measured in every state: 0 visible layers → 1 outcome → 2 outcomes → 3 outcomes → 3 outcomes plus the shared core. Arrow Right and Arrow Left change exactly one state per keypress.
- The next control remains `Reveal next layer` until fragment 4, then advances to the problem slide.
- Reduced-motion emulation reports `0s` transition duration for every circle and the shared centre while preserving the controlled fragment sequence.
- The alternate is isolated behind `?vision=venn`; removing the query restores the previously approved objective-rail vision slide.
- The desktop and mobile implementations keep every outcome, the shared centre, footer and presenter controls reachable without horizontal overflow.

## Result

final result: passed

## Tieman discovery-theme Venn refinement — QA

### Source and implementation evidence

- User Venn reference: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_bfGs6U/Screenshot 2026-09-02 at 12.52.16 AM.png`
- Desktop reveal sequence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/01-step-1.png`, `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/02-step-2.png`, `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/03-step-3.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/04-step-4-final.png`
- Mobile final reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/05-mobile-final.png`
- Focused source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-refinement/08-source-final-comparison.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / state |
| --- | ---: | --- |
| User Venn reference | 921 × 805 | cropped final Venn state |
| Desktop sequence captures | 1280 × 720 each | 1280 × 720; devicePixelRatio 1; fragments 01–04 |
| Mobile final | 390 × 844 | 390 × 844; devicePixelRatio 1; fragment 04 |
| Focused comparison | 1388 × 600 | source and implementation Venn regions normalised to 600px height |

The focused comparison is the primary evidence for the reduced outer-circle prominence, revised theme copy and stronger TIP centre. Full-view desktop and mobile captures verify the surrounding discovery narrative and final conclusion.

### Findings, fixes and iteration history

- Pass 0 — blocked: the outer green rings dominated the content, the centre label read as another annotation, and the slide framed the content as predetermined strategic outcomes rather than themes heard from Tieman.
- [P1] Discovery narrative. Fixed by changing the eyebrow to `What we heard`, the headline to `Three themes kept emerging.`, and the three themes to Operational efficiency, Future capability, and Risk & resilience.
- [P1] Final synthesis. Fixed by making `TIP` the dominant centre acronym, adding `Tieman Intelligence Platform` beneath it, and revealing `Three themes. One connected opportunity.` with the centre on the fourth keypress.
- [P2] Circle prominence. Fixed by reducing the approved outer-circle asset opacity from 0.68 to 0.46 and softening saturation/brightness while retaining the original geometry and raster assets.
- [P2] Centre emphasis. Fixed with a restrained 24% accent-colour drop shadow on the existing intersection asset; no substitute gradient or CSS-drawn shape was introduced.
- Pass 1 — passed: the comparison shows visibly quieter outer rings, a clearer centre hierarchy and no geometry drift. The mobile state retains the complete four-part narrative without horizontal overflow.

### Fidelity and interaction verification

- Fonts and typography: the existing display and UI families remain in use; `TIP` uses a strong 700 weight, while the platform name and final opportunity line use the established italic display treatment.
- Spacing and layout rhythm: circle placement, overlap geometry, copy anchors and footer clearance are unchanged; the final conclusion reserves its space before reveal, preventing layout shift.
- Colours and visual tokens: all existing dark, lime and muted-text tokens are preserved; only opacity and an accent-derived shadow were adjusted.
- Image quality and asset fidelity: the approved circle and intersection PNG assets remain sharp and unmodified; no placeholder, generated substitute or code-drawn asset was used.
- Copy and content: all requested discovery-theme, future-capability, risk, TIP and connected-opportunity wording is present; `intelligent operating system` is removed.
- Interaction: Operational efficiency, Future capability and Risk & resilience appear on keypresses one through three; TIP and the connected-opportunity conclusion appear together on keypress four.
- Responsive behaviour: the 390 × 844 final state keeps the complete acronym, platform name, three themes and conclusion visible without clipping.
- Browser verification: every fragment state and the mobile final state rendered without warning or error console logs.

### Result

final result: passed

## Tieman cover positioning copy — QA

### Evidence and state

- Source visual truth: the user annotation on the slide 01 headline with the approved headline and subtitle copy.
- Desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-cover-copy/01-cover-desktop-local.png` at 1280 × 720 CSS pixels and devicePixelRatio 1.
- Mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-cover-copy/02-cover-mobile-local.png` at 390 × 844 CSS pixels and devicePixelRatio 1.
- State: slide 01 cover. A focused comparison was not needed because the complete headline, subtitle, partner lockup and hero image are clearly legible in both full-view captures.

### Findings and verification

- Pass 0 — blocked: the cover framed the engagement as `Connected data & AI` and used the longer `Tieman Tankers · Connected Data & AI Transformation Brief` subtitle.
- [P1] Positioning copy. Fixed with the approved `Connected intelligence for Tieman's next chapter.` headline and `Tieman Data & AI Transformation` subtitle; the frame descriptor now mirrors the new subtitle.
- Pass 1 — passed: the headline retains a strong two-line desktop composition and a readable mobile stack without truncation or horizontal overflow.
- Fonts and typography: the existing display family, optical weight, line height and italic lime `next chapter` emphasis are preserved.
- Spacing and layout rhythm: the partner lockup, title, subtitle and image composition retain their established alignment and separation.
- Colours and visual tokens: the black-to-image shade, white headline and lime emphasis remain unchanged.
- Image quality and asset fidelity: the approved tanker photograph and Tieman logo are unchanged and remain correctly cropped.
- Copy and content: the headline and subtitle match the approved wording; the previous title and subtitle are absent from the cover.
- Interaction: deck navigation, keyboard controls and fullscreen behaviour remain unchanged.
- Browser verification: the desktop and mobile cover states rendered without warning or error console logs.

### Result

final result: passed

## Agenda “Why us” label — QA

### Evidence and state

- Source visual truth: the user annotation on agenda item 04 requesting removal of the question mark.
- Desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-copy/01-agenda-desktop-local.png` at 1280 × 720 CSS pixels and devicePixelRatio 1.
- Mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-copy/02-agenda-mobile-local.png` at 390 × 844 CSS pixels and devicePixelRatio 1.
- State: slide 02, standard agenda state. A focused comparison was not needed because the request changed one punctuation character and the full agenda remains readable in both captures.

### Findings and verification

- Pass 0 — blocked: agenda item 04 read `Why us?`.
- [P1] Agenda copy. Fixed by removing only the question mark so the item reads `Why us`.
- Pass 1 — passed: the revised item retains its established alignment, hierarchy and row height at desktop and mobile widths.
- Fonts and typography: the family, weight, size and line height are unchanged.
- Spacing and layout rhythm: no row, divider, gutter or alignment value changed.
- Colours and visual tokens: the dark surface, white label and lime index remain unchanged.
- Image quality and asset fidelity: the agenda contains no changed image asset.
- Copy and content: only the targeted punctuation was removed; all other agenda items remain unchanged.
- Interaction: slide navigation and keyboard controls remain unchanged.
- Browser verification: the desktop and mobile agenda states rendered without warning or error console logs.

### Result

final result: passed

## Definitive Tieman vision slide — QA

### Source and implementation evidence

- Source visual truth: the previously approved and QA-reviewed Tieman Venn vision slide.
- Default-route initial state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-definitive/01-default-route-initial.png`
- Default-route final reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-definitive/02-default-route-final.png`
- Default-route mobile final reveal: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-venn-definitive/03-default-route-mobile-final.png`

### Normalisation and state

| Artifact | Pixel size | CSS viewport | State |
| --- | ---: | ---: | --- |
| Desktop initial | 1280 × 720 | 1280 × 720; devicePixelRatio 1 | canonical route, slide 03, fragment 00 |
| Desktop final | 1280 × 720 | 1280 × 720; devicePixelRatio 1 | canonical route, slide 03, fragment 04 |
| Mobile final | 390 × 844 | 390 × 844; devicePixelRatio 1 | canonical route, slide 03, fragment 04 |

The approved Venn slide is the source itself; these captures verify that the same component and four-step reveal now appear without a `vision` query parameter. A separate focused comparison was unnecessary because no visual property of the approved component changed.

### Findings, fixes and verification

- Pass 0 — blocked: the standard deck route still selected the objectives-list vision slide unless `?vision=venn` was supplied.
- [P1] Canonical direction. Fixed by placing the Venn slide directly in the canonical slide sequence, retaining its four fragments, and removing the runtime vision-variant prop and loader selection.
- Pass 1 — passed: `/deck/tieman-tankers` now opens the Venn version by default, and the legacy `?vision=objectives` URL also resolves to the same definitive Venn slide.
- Fonts and typography: the approved strategic-vision hierarchy, lime italic emphasis and outcome typography are unchanged.
- Spacing and layout rhythm: the circle geometry, overlap, central intersection, headline column and footer alignment are unchanged.
- Colours and visual tokens: the dark surface, green circle treatment and lime centre remain unchanged.
- Image quality and asset fidelity: the approved circle and intersection assets are reused without replacement or resampling.
- Copy and content: all three outcomes and the `Tieman's intelligent platform` centre label remain unchanged.
- Interaction: the three circles and centre still appear across four presenter-controlled keypresses.
- Responsive behaviour: the 390 × 844 canonical-route capture contains all outcomes and the centre state without horizontal overflow.
- Browser verification: the canonical route and the former objectives query both rendered the Venn slide with no warning or error console logs.

### Result

final result: passed

## Slide 08 headline copy — QA

### Evidence and state

- Source visual truth: the user annotation on `h2#deck-slide-8-title` in the deployed slide 08.
- Desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-08-headline/01-slide-08-headline-local.png` at a 1280 × 720 CSS viewport and devicePixelRatio 1.
- Mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-08-headline/02-slide-08-headline-mobile-local.png` at a 390 × 844 CSS viewport and devicePixelRatio 1.
- State: slide 08 before architecture fragments reveal; the headline is visible in its normal presentation state.
- Focused comparison was not needed because the annotation requested a one-word deletion and the full-view captures keep the complete line wrapping and surrounding composition readable.

### Findings and verification

- Pass 0 — blocked: the selected headline began with `Create`, contrary to the requested wording.
- [P1] Headline copy. Fixed by removing only `Create`, producing `One trusted foundation for Tieman's data and AI.`
- Pass 1 — passed: the desktop title remains balanced across two lines, and the mobile title wraps cleanly without truncation or overflow.
- Fonts and typography: family, weight, italic lime emphasis, size and line height are unchanged.
- Spacing and layout rhythm: no geometry, margin or padding changed; the shorter headline creates intentional breathing room without disturbing the architecture.
- Colours and visual tokens: the existing dark surface, white display text and lime emphasis remain unchanged.
- Image quality and asset fidelity: no image, icon or decorative asset changed.
- Copy and content: only the targeted word was removed; slide 07 retains its existing headline and all slide 08 supporting copy is unchanged.
- Interaction: slide navigation and the keypress-controlled architecture reveal sequence remain unchanged.
- Browser verification: desktop and mobile states rendered without warning or error console logs.

### Result

final result: passed

## Slide 08 final-reveal summary copy — QA

### Source and implementation evidence

- Source visual truth: the user annotation on the deployed slide 08 summary, supported by the approved header capture at `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_V2Nrd6/Screenshot 2026-09-01 at 11.23.35 PM.png`
- Final desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-08-copy/01-slide-08-copy-final-local.png`
- Final mobile implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-08-copy/02-slide-08-copy-mobile-local.png`
- Focused source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-08-copy/03-header-copy-comparison.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Approved header source | 1511 × 217 | Cropped desktop slide header | previous slide 08 summary |
| Final desktop | 1280 × 720 | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 08, fragment 05 |
| Focused comparison | 1280 × 368 | Source and implementation header regions normalised to 1280 × 184 and stacked | previous → revised copy |
| Final mobile | 390 × 844 | 390 × 844 browser viewport; devicePixelRatio 1 | slide 08, fragment 05 |

The focused comparison isolates the changed copy region. The full desktop and mobile captures verify the revised sentence inside the complete responsive composition.

### Findings, fixes and iteration history

- Pass 0 — blocked: the supporting paragraph described connecting Tieman's existing data but did not articulate the operational value available after the foundation exists.
- [P1] Solution payoff. Fixed by replacing only the summary with the approved sentence: `Once that foundation exists, applications and agents can operate on information that is connected, contextualised and governed.`
- Pass 1 — passed: the revised sentence remains within the established right-hand measure at desktop, stays fully legible on mobile and preserves the intended hierarchy.

### Fidelity and interaction verification

- Fonts and typography: the existing family, size, weight, line height and muted hierarchy are unchanged; the new sentence wraps cleanly without truncation.
- Spacing and layout rhythm: no component geometry changed; the desktop header balance and mobile stacking remain intact.
- Colours and tokens: the dark canvas, lime accent and supporting-copy token remain unchanged.
- Image quality and asset fidelity: the copy-only change introduced no new imagery or icon changes.
- Copy and content: the requested sentence appears verbatim and the superseded sentence is absent from slide 08.
- Interaction: the summary is absent after fragment 04 and appears only on the fifth and final keypress reveal, preserving the approved sequence.
- Responsive behaviour: the 390 × 844 capture contains the full sentence without clipping or horizontal overflow.
- Browser verification: the local story route produced no warning or error console logs.

### Result

final result: passed

## Slide 08 opportunity label and closing reveal — QA

### Source and implementation evidence

- User-selected header source: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_V2Nrd6/Screenshot 2026-09-01 at 11.23.35 PM.png`
- Initial local reveal state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/34-slide-08-opportunity-initial-local.png`
- Final local reveal state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/35-slide-08-opportunity-final-local.png`
- Focused source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/36-slide-08-opportunity-header-comparison.png`
- Final mobile capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/37-slide-08-opportunity-final-mobile.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User header source | 1511 × 217 | Cropped desktop slide header | selected header treatment |
| Initial and final local captures | 1280 × 720 each | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 08, fragment 00 and fragment 05 |
| Focused comparison | 3022 × 217 | Source and implementation header regions normalised to 1511 × 217 each | source → final |
| Mobile capture | 390 × 844 | 390 × 844 browser viewport; devicePixelRatio 1 | slide 08, fragment 05 |

The focused comparison covers the exact annotated header region. The initial, final and mobile captures verify the new interaction order and that the preserved architecture remains visually contained.

### Findings, fixes and iteration history

- Pass 0 — blocked: slide 08 still used `What Tieman is trying to achieve`, and the supporting paragraph was visible before any architecture layer had appeared.
- [P1] Narrative label. Fixed by replacing the slide 08 kicker with the requested `The opportunity` while leaving slide 07 unchanged.
- [P1] Reveal order. Fixed by adding a fifth controlled fragment: sources → unified context → apps and agents → assurance bracket → supporting paragraph.
- Pass 1 — passed: browser snapshots confirm that the paragraph is absent through fragment 04, appears only at fragment 05, and the next control advances the deck only after that final reveal.

### Fidelity and interaction verification

- Fonts and typography: the existing uppercase tracked kicker, display headline and muted supporting-copy styles remain unchanged; only the requested kicker copy changed.
- Spacing and layout rhythm: the summary retains its original right-column footprint while hidden, preventing any architecture or headline reflow between fragments.
- Colours and tokens: the dark canvas, lime accent and token-derived muted copy colour are preserved exactly.
- Image quality and asset fidelity: no image or icon asset changed; all existing architecture icons and marks remain intact.
- Copy and content: slide 08 now reads `The opportunity`; the supporting paragraph remains verbatim and appears only after the other four component groups.
- Interaction: five keypresses reveal exactly one meaningful layer each. DOM checks verified source systems at step 01, context at 02, apps at 03, assurance at 04 and the paragraph at 05.
- Responsive behaviour: the 390 × 844 final state keeps the kicker, headline and complete paragraph legible without horizontal clipping; the architecture remains reachable by scrolling.
- Browser verification: the local story route produced no warning or error console logs.

### Result

final result: passed

## Slide 10 dark proof treatment — QA

### Source and implementation evidence

- User-selected light slide and dark-mode request: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_hGni6O/Screenshot 2026-09-01 at 11.54.30 PM.png`
- Pre-change local implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-proof-dark/01-proof-light-before-local.png`
- Final dark desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-proof-dark/02-proof-dark-pass-1-local.png`
- Normalised full-slide comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-proof-dark/03-proof-light-dark-comparison.png`
- Responsive implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-proof-dark/04-proof-dark-mobile-local.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User source | 1590 × 973 | Source includes surrounding black canvas around an approximately 1583 × 893 slide | slide 10 light treatment |
| Final desktop | 1280 × 720 | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 10 dark treatment |
| Full-slide comparison | 2560 × 720 | Source slide cropped to 1583 × 893, normalised to 1280 × 720 and combined with the implementation | light → dark |
| Mobile capture | 390 × 1800 | 390px CSS viewport; devicePixelRatio 1 | complete responsive slide 10 content |

The full-slide comparison is sufficient because the requested change is a global theme conversion. It shows the complete composition, all three proof rows, attribution note, footer and slide numbering at equal 16:9 dimensions; no image or dense control requires a focused crop.

### Findings, fixes and iteration history

- Pass 0 — blocked: slide 10 was the only proof slide using a white surface, interrupting the dark executive narrative established by slides 08 and 09.
- [P1] Theme discontinuity. Fixed by removing the light slide tone and remapping proof-specific borders, indices, metrics, labels, descriptions and attribution copy to the SemanticLab dark canvas tokens.
- Pass 1 — passed: the normalised comparison shows the exact approved structure and evidence preserved on the dark canvas, with no actionable P0, P1 or P2 issue at desktop or mobile widths.

### Fidelity and responsive verification

- Fonts and typography: the heading, italic emphasis, proof names, metrics, labels and attribution hierarchy are unchanged. Line breaks and optical weights remain consistent with adjacent dark slides.
- Spacing and layout rhythm: the two-column executive layout, three equal proof rows, rules, bottom note and footer clearance are preserved exactly.
- Colours and tokens: the former light background and dark-text tokens are replaced with `--sl-canvas`, `--sl-text-primary`, `--sl-accent` and `--sl-border`. No off-system colour remains in the proof component.
- Image quality and asset fidelity: the slide is intentionally text-led and contains no imagery or custom icon asset. No placeholder, generated asset or code-drawn substitute was introduced.
- Copy and content: GameDay, PartsHQ, Podly, all metrics, all descriptions and the previous-role attribution remain verbatim and in the same order.
- Responsive behaviour: at 390px width, the proof rows collapse to one readable column, every label and metric remains visible, the attribution note and footer are reachable, and no horizontal clipping occurs.
- Browser verification: the local story route rendered slide 10 in dark mode at desktop and responsive widths with an empty warning/error console.

### Result

final result: passed

## Slide 09 founder headshot framing — QA

### Source and implementation evidence

- User-reported crop defect: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_NCGEhh/Screenshot 2026-09-01 at 11.54.00 PM.png`
- Pre-fix local slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/48-why-us-headshots-before-local.png`
- Final desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/64-why-us-headshots-desktop-approved.png`
- Final focused source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/66-why-us-headshots-comparison-approved.png`
- Responsive capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/65-why-us-headshots-mobile-approved.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User source | 960 × 445 | Cropped desktop founder-card region | slide 09 crop defect |
| Final desktop | 1280 × 720 | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 09 |
| Focused comparison | 1744 × 370 | Both founder-card regions normalised to 872 × 370 and combined side by side | defect → corrected framing |
| Mobile captures | 390 × 844 and 390 × 1800 | 390px CSS viewport; devicePixelRatio 1 | slide 09 top and complete responsive content |

The focused comparison is required because the defect is confined to the two portrait windows; the full desktop capture verifies that the correction preserves the surrounding slide composition, copy, footer and controls.

### Findings, fixes and iteration history

- Pass 0 — blocked: `object-fit: cover` enlarged both tall source portraits to fill shallow landscape windows, cutting off Raihan's hair and most of both faces.
- [P1] Portrait crop. Fixed by giving each portrait a dedicated overflow-clipped media window, switching to contained source geometry and applying person-specific scale and focal origins. Both complete heads and faces are now visible without changing the card dimensions.
- Pass 1 — blocked: the first contained treatment was safe but reduced both people too far, reading as full-body portraits rather than headshots.
- [P2] Portrait scale. Fixed by tightening Raihan to `scale(1.65)` at a 36% vertical origin and Naila to `scale(1.5)` at a 38% vertical origin. This keeps the faces prominent while leaving visible headroom; the media wrapper prevents either transform from entering the copy row.
- Pass 2 — passed: the final focused comparison and responsive captures show both heads fully framed with no overlap, clipping or horizontal overflow.

### Fidelity and responsive verification

- Fonts and typography: the heading, founder names, role labels and biographies are unchanged; their weight, wrapping, line height and hierarchy match the existing slide.
- Spacing and layout rhythm: desktop keeps the two-column profile rail and all original card heights, borders and padding. The new media wrapper clips only the portrait surface and does not alter the text grid or slide footer clearance.
- Colours and tokens: the dark deck canvas, lime accent, muted copy and hairline borders remain unchanged. A white media background matches both source portraits and removes visible letterbox seams.
- Image quality and asset fidelity: the existing high-resolution Raihan and Naila source images are reused. No generated, placeholder or substitute asset was introduced; only crop scale and focal position changed.
- Copy and content: no slide copy, labels, descriptors, order or navigation changed.
- Responsive behaviour: at 390px width, both portrait cards stack in full, each head remains visible, and the complete founder section is reachable without horizontal clipping.
- Browser verification: the local story route rendered slide 09 at desktop and responsive widths with an empty warning/error console.

### Result

final result: passed

## Operational impact slide — QA

### Source and implementation evidence

- User-provided slide 05 source: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_c4qGBR/Screenshot 2026-09-01 at 9.48.33 PM.png`
- Existing live deck capture before reordering: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-source.png`
- Final desktop browser capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-desktop-final.png`
- Final slide-canvas capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-stage-final.png`
- Normalised source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-final-comparison.png`
- Mobile pass-one evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-mobile-top.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-mobile-bottom.png`
- Mobile post-fix evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-mobile-top-pass-2.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-05-impact-mobile-bottom-pass-2.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User source | 1589 × 896 | 16:9 source slide | original ripple-effect slide |
| Final slide canvas | 1588 × 893 | 1588 × 893.25 CSS slide; devicePixelRatio 1 | slide 05 |
| Full-view comparison | 3178 × 896 | Source and implementation normalised to 1589 × 896 and combined side by side | source → slide 05 |
| Mobile captures | 390 × 844 each | 390 × 844 CSS viewport; devicePixelRatio 1 | slide 05 top and scrolled lower state |

The full-view comparison shows the complete source and implementation at equal 16:9 slide dimensions. A separate focused crop was not required: the source contains no imagery or dense component detail beyond the single pipeline, and the final standalone slide-canvas capture preserves all typography and rule work at native size.

### Findings, fixes and iteration history

- Pass 0 — blocked: the source used a light presentation surface, occupied only the top third of the slide and disconnected its four consequence labels from the seven-stage operating flow. It also sat at slide 07, after the opportunity and solution, so it no longer functioned as the operational consequence of the challenges story.
- [P1] Story order and theme. Fixed by moving the ripple-effect content to slide 05 directly after `Challenges`, shifting `The opportunity` and `The solution` to slides 06 and 07, and rebuilding the slide on the deck's dark canvas.
- [P1] Operational meaning. Fixed by showing one tanker job from Sales through Production, then mapping four explicit failure modes to the handovers where fragmented context becomes clarification loops, engineering rework, long-lead surprises and revision risk.
- [P2] Sparse composition and weak consequence hierarchy. Fixed by using the established SemanticLab executive-heading grid, a ruled seven-stage flow, four progressively emphasised impact panels and a full-width cumulative-cost statement.
- Pass 1 — blocked on mobile only: desktop contained no actionable visual issue, but the stage and consequence indices inherited a `cqw` font size at the portrait breakpoint and rendered at 2.204px.
- [P2] Mobile index legibility. Fixed with a breakpoint-specific selector matching the desktop specificity and setting both index systems to 0.62rem. The post-fix browser measurement is 9.92px, and the second mobile captures show every stage and impact number clearly.
- Pass 2 — passed: desktop, mobile, slide ordering, keyboard navigation and browser-console checks contain no remaining actionable P0, P1 or P2 issue.

### Fidelity and responsive verification

- Fonts and typography: the existing deck display and UI families, display weights, italic lime emphasis, uppercase tracked labels and numeric hierarchy are preserved. The headline now carries the presentation moment while the process and consequence copy remains scannable.
- Spacing and layout rhythm: the redesigned slide fills the 16:9 stage with a clear headline → process → consequence → conclusion sequence. Seven equal process cells and four equal impact panels align to the same rules and footer grid.
- Colours and tokens: the implementation uses `--sl-canvas`, `--sl-text-primary`, `--sl-accent` and `--sl-border`, with only token-derived colour mixing for progressive impact emphasis.
- Image and icon fidelity: this is a text-led operational diagram with no source imagery or icon requirement. No placeholder, custom SVG, CSS illustration, emoji or substitute asset was introduced.
- Copy and content: the slide preserves the source statement `A gap upstream becomes a delay downstream`, contains all seven operating stages and explains the operational cost in Tieman-specific language.
- Interaction: Arrow Right advances from slide 05 `Operational impact` to slide 06 `The opportunity`, then to slide 07 `The solution`; Arrow Left returns in the reverse order.
- Responsive behaviour: the 390 × 844 layout has `documentElement.scrollWidth === 390`, a single-column job flow, readable consequence panels and a reachable footer. The in-app browser warning/error console is empty.

### Result

final result: passed

## BOM consequence state — QA

### Source and implementation evidence

- User-selected operational-impact state: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_9Cbrmb/Screenshot 2026-09-01 at 11.18.25 PM.png`
- Final desktop browser capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/19-impact-bom-state-local.png`
- Focused source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/20-impact-bom-comparison.png`
- Final downstream state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/21-impact-final-state-local.png`
- Mobile top and lower-state captures: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/22-impact-bom-mobile-top.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/24-impact-bom-mobile-bottom.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User source | 1523 × 367 | Cropped desktop slide region | previous fragment 04, Purchasing active |
| Final desktop | 1280 × 720 | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 06, fragment 04, BOM active |
| Focused comparison | 2416 × 289 | Source and implementation regions normalised to 1200 × 289 with a 16px gutter | previous state → added BOM state |
| Mobile captures | 390 × 844 each | 390 × 844 browser viewport; devicePixelRatio 1 | slide 06, fragment 04, top and scrolled lower state |

The focused comparison uses the selected slide region as the visual truth for pipeline geometry, typography, active-state treatment, signal styling and consequence hierarchy. The different active stage and copy are intentional: the requested BOM consequence has been inserted before the unchanged Purchasing state.

### Findings, fixes and iteration history

- Pass 0 — blocked: the impact sequence skipped from Engineering directly to Purchasing, so BOM had no corresponding presenter-controlled consequence state.
- [P2] Missing BOM consequence. Fixed by inserting fragment 04 as `BOM — Cross-team query` with the supporting line `Spec-to-design gaps send teams chasing answers.`
- [P2] Fragment sequencing. Fixed by increasing the slide from five to six controlled reveals, mapping the signal to the BOM cell at 50%, and moving Purchasing and Production to fragments 05 and 06 without changing their copy.
- Pass 1 — passed: the equal-size focused comparison, complete desktop sequence and mobile captures contain no remaining actionable P0, P1 or P2 issue.

### Fidelity and interaction verification

- Fonts and typography: the new title and detail reuse the existing impact-state sizes, weights and line heights; both remain centred and unclipped on desktop and mobile.
- Spacing and layout rhythm: the BOM state uses the same seven-column pipeline, active-cell fill, centred signal and consequence spacing as the selected reference.
- Colours and tokens: no new colours were introduced; the state uses the existing canvas, lime accent, border and text-mix tokens.
- Image and icon fidelity: no image asset was added or replaced. The existing alert icon is reused exactly.
- Copy and content: the short label `Cross-team query` and the supporting line communicate spec-to-design misalignment and cross-department chasing while matching the brevity of the surrounding states.
- Interaction: Arrow Right and the reveal control advance through Sales, Specification, Engineering, BOM, Purchasing and Production one state at a time; the cumulative result appears only on fragment 06.
- Responsive behaviour: at 390 × 844, the active BOM cell, title and supporting sentence are fully readable without clipping, and the persistent presenter controls remain reachable.
- Browser verification: the local route `/deck/tieman-tankers?challenges=story` rendered the new state, preserved the downstream Purchasing and Production states, and produced no warning or error console logs.

### Result

final result: passed

## Challenges story comparison — QA

### Source and implementation evidence

- Existing challenges slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-narrative-audit/01-current-challenges.png`
- Existing operational-impact slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-narrative-audit/02-current-operational-impact.png`
- Existing systems-landscape slide: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-narrative-audit/03-current-where-context-lives.png`
- Final landscape, initial and revealed: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/01-landscape-state-0.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/11-landscape-state-1-fixed.jpg`
- Final question sequence, fragments 0–3: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/03-question-state-0.png`, `04-question-state-1.jpg`, `05-question-state-2.jpg` and `06-question-state-3.jpg`
- Final impact sequence, fragments 0, 1, 3 and 5: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/07-impact-state-0.jpg` through `10-impact-state-5.jpg`
- Normalised source/implementation comparisons: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/compare-landscape.jpg`, `compare-question.jpg` and `compare-impact.jpg`
- Mobile landscape, question and impact evidence: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/14-mobile-landscape-scrolled.jpg`, `16-mobile-question-state-3-fixed.jpg`, `17-mobile-impact-state-5.jpg` and `18-mobile-impact-bottom.jpg`
- Comparison route: `/deck/tieman-tankers?challenges=story`. The existing `/deck/tieman-tankers` route remains unchanged. The comparison also composes with the Venn alternate at `?vision=venn&challenges=story`.

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Existing and revised desktop captures | 1588 × 1260 each | 1588 × 1260 browser viewport; centred 16:9 deck stage | slides 04–06 and every requested fragment |
| Comparison boards | 2016 × 794 each | Source and implementation normalised to matching 1000 × 794 panels with a 16px gutter | fully revealed state |
| Mobile captures | 390 × 844 each | 390 × 844 browser viewport | fully revealed top and scrolled lower states |

The existing slides are the visual truth for typography, dark-canvas treatment, lime accent, hairline rules, system icons, topology asset, footer and presenter controls. The approved narrative brief is authoritative for the new three-step progression: data fragmentation → human reconstruction → operational consequence.

### Findings, fixes and iteration history

- [P1] The active sequence repeated the same fragmentation argument across three visually strong slides. Fixed by isolating a comparison variant in which each slide has one distinct job: locate the knowledge, humanise the friction with a real question, then show one gap compounding across the operating flow.
- [P2] The first landscape pass placed the tanker-job card too close to the PDM node. Fixed by moving the card to `left: 55cqw; top: 23.6cqw`, preserving clear separation from both PDM and SolidWorks while keeping all six connector paths legible.
- [P2] The first 390 × 844 question state allowed the longest answer labels to clip in the two-column grid. Fixed by reducing the icon track, using `minmax(0, 1fr)`, removing intrinsic minimum width and enabling safe label wrapping. The final capture contains the complete `Customer specification`, `Working assumptions` and `Decision rationale` copy.
- Pass 2 — passed: the equal-size comparison boards, complete fragment sequence, 390 × 844 top/scrolled states, original-route check and combined-query check contain no remaining actionable P0, P1 or P2 issue.

### Fidelity and interaction verification

- Typography and hierarchy: all three slides reuse the deck's display/UI families, light executive headings, italic lime emphasis and small uppercase labels. Each slide reads as one presentation moment rather than a dashboard.
- Layout and spacing: the landscape preserves the approved topology composition, the question slide centres one practical question between six answer fragments, and the impact slide uses one ruled seven-stage flow with a single moving consequence state.
- Colours, icons and imagery: every colour comes from the existing SemanticLab token system. The existing `fragmented-topology.png` and Lucide system icons are reused; the tanker-job and missing-context markers use Lucide `Truck` and `CircleAlert` icons. No placeholder, emoji, custom SVG or CSS-drawn illustration was introduced.
- Copy and narrative: slide 04 concludes that the systems work but context is fragmented; slide 05 states that the answer exists but must be reconstructed; slide 06 resolves the business impact as more coordination, more waiting and less throughput.
- Presenter control: slide 04 has one fragment, slide 05 has three fragments and slide 06 has five fragments. Arrow Right, Space, Enter and the next control reveal exactly one state at a time; Arrow Left reverses exactly one state. No box or card uses autonomous animation.
- Motion: meaning-bearing movement is limited to short fragment transitions and the impact signal travelling across the process. The existing reduced-motion media rule removes those transitions without changing content order or fragment control.
- Responsive behaviour: the 390 × 844 captures show the complete two-column systems map and question fragments without horizontal clipping, and the single-column operating flow, final consequence, footer and presenter controls are all reachable by scrolling.
- Preservation: the default route still reports `16` slides and reaches the existing `Critical information exists. But it is fragmented.` slide at position 04. The combined Venn/story query reaches the new landscape at position 04. Both clean local tabs have empty warning/error consoles.
- Automated verification: `npm run check` passed source assertions, preview and production builds, flattened-artifact assertions, `wrangler versions upload --dry-run` for preview and `wrangler deploy --dry-run` for production.

### Result

final result: passed

## Challenges slide — QA

### Source and implementation evidence

- User-provided content brief: fragmentation makes critical information difficult to search, compare, govern and reuse, creating manual interpretation, slow handovers, revision risk, duplicated work and delays across Sales, Engineering, Purchasing, Planning and Production.
- Existing slide 04 visual source: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-source.png`
- Dark-mode implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-desktop-pass-1.png`
- Normalised full-slide before/after comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-before-after.png`
- Focused content comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-focused-comparison.png`
- Updated agenda: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-agenda-challenges-desktop.png`
- Mobile implementation, top and ripple-effect states: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-mobile-top.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-slide-04-challenges-mobile-bottom.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| Existing and revised desktop captures | 1588 × 1260 each | 1588 × 1260 CSS viewport; 1588 × 894 centred 16:9 stage; devicePixelRatio 1 | slide 04 |
| Full-slide comparison | 3200 × 894 | Both 1588 × 894 stages combined side by side with a 24px gutter | slide 04 |
| Focused comparison | 3040 × 650 | Matching 1508 × 650 content regions combined side by side | slide 04 |
| Mobile captures | 390 × 844 each | 390 × 844 CSS viewport; devicePixelRatio 1 | slide 04 top and scrolled impact state |

### Findings and fixes

- [P1] The previous light slide framed the issue as a generic disconnected-data problem and did not communicate the operational consequences in the user's new brief. Fixed by rebuilding slide 04 as a dark-mode `Challenges` slide with a clear fragmentation statement, four numbered friction points and a five-part ripple-effect rail.
- [P2] The source slide's prose structure made search, comparison, governance, reuse and downstream impact difficult to scan during a presentation. Fixed by separating the message into executive headline → four recurring information tasks → five operational consequences.
- [P2] The agenda still described slide 04 as `Problem statement`. Fixed by changing the single agenda item and the slide navigation label to `Challenges`.
- Pass 1 — passed: the full-slide and focused comparisons show the requested dark-mode redesign using the established SemanticLab statement-left/ruled-rail-right composition. Desktop, mobile, agenda, navigation and console checks contain no remaining actionable P0, P1 or P2 issue.

### Fidelity and responsive verification

- Fonts and typography: the slide retains the deck's existing display and UI families, light display weight, italic lime emphasis, uppercase tracked labels and numbered rail hierarchy. All copy remains readable at 1588 × 1260 and 390 × 844.
- Spacing and layout rhythm: the desktop uses the deck's established two-column statement/rail composition, with a full-width consequence band above the footer. Rules, gaps and footer clearance match adjacent dark slides. Mobile collapses to one readable column and preserves the intended narrative order.
- Colours and tokens: the light surface was intentionally replaced with `--sl-canvas`, `--sl-text-primary`, `--sl-accent` and `--sl-border`; no off-system colours were introduced.
- Image and icon fidelity: this is a text-led information slide and requires no illustrative asset or icon. No placeholder, custom SVG, CSS illustration, emoji or substitute graphic was introduced.
- Copy and content: the slide explicitly contains `Search`, `Compare`, `Govern`, `Reuse`, all five requested consequences and the complete department sequence `Sales · Engineering · Purchasing · Planning · Production`. The agenda contains the one-word item `Challenges`.
- At 390 × 844, the responsive flow has `documentElement.scrollWidth === 390`, the ripple-effect section and slide footer are reachable, and the in-app browser warning/error console is empty.

### Result

final result: passed

## Context landscape restoration — QA

### Source and implementation evidence

- User-provided restoration target: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_9AhTah/Screenshot 2026-09-01 at 10.18.18 PM.png`
- Restored desktop browser capture: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-landscape-restored-desktop.png`
- Normalised source/restoration comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-landscape-restoration-comparison.png`
- Responsive captures: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-landscape-restored-mobile-top.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-context-landscape-restored-mobile-bottom.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User source | 1586 × 938 | Source capture contained approximately 23px of surrounding vertical canvas above and below the 16:9 slide | original `Where context lives` state |
| Restored desktop | 1588 × 1260 | 1588 × 1260 CSS viewport; 1588 × 893 centred slide; devicePixelRatio 1 | slide 06 of 16 |
| Full comparison | 3172 × 892 | Both slide canvases cropped to 1586 × 892 and combined side by side | source → restoration |
| Mobile captures | 390 × 844 each | 390 × 844 CSS viewport; devicePixelRatio 1 | top and scrolled lower state |

The full-view comparison is sufficient because it shows every layout-critical element at equal slide dimensions: headline, supporting copy, all six system nodes, topology backdrop, consequence statement, footer and slide number. No additional focused crop was required.

### Findings and verification

- [P1] The `Where context lives` slide had been removed from the active slide array during earlier story restructuring. Fixed by restoring its original component, topology asset, node layout, motion and responsive treatment as a new slide without replacing any current slide.
- [P2] Re-inserting the slide before slide 05 would have contradicted the user's approved `Operational impact` position. Fixed by preserving slide 05 exactly and placing the restored context landscape at slide 06; the opportunity and solution move intact to slides 07 and 08.
- Pass 1 — passed: the normalised comparison shows the restored slide reproduces the selected composition and content with no actionable P0, P1 or P2 difference.

### Fidelity and responsive verification

- Fonts and typography: the original deck display hierarchy, italic lime emphasis, tracked labels and centred system-node labels are restored without copy changes or clipping.
- Spacing and layout rhythm: desktop node sizes and positions, heading measure, topology crop, consequence rail and footer alignment match the selected source. Mobile converts the six circles to a balanced two-column grid.
- Colours and tokens: the slide uses the existing dark canvas, lime accent, light node surfaces, border and text tokens. No new palette was introduced.
- Image and icon fidelity: the original `fragmented-topology.png` raster asset and existing Lucide system icons are reused. No placeholder or approximate replacement asset was introduced.
- Copy and content: all source copy and all six systems—Epicor, SolidWorks, PDM, Word + PDF, Excel and People—are present verbatim.
- Interaction and preservation: keyboard navigation verifies slide 05 remains `Operational impact`, slide 06 is `Where context lives`, slide 07 is `The opportunity` and slide 08 is `The solution`. The total deck count is 16, confirming that the restoration adds rather than replaces a slide.
- Responsive behaviour: at 390 × 844, `documentElement.scrollWidth === 390`, the complete system grid and consequence statement are reachable, and the browser warning/error console is empty.

### Result

final result: passed

## Slide 08 opportunity header — QA

### Source and implementation evidence

- User-selected header target: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_V2Nrd6/Screenshot 2026-09-01 at 11.23.35 PM.png`
- Initial slide 08 implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/26-slide-08-header-initial-local.png`
- Fully revealed pass-one implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/27-slide-08-header-full-local.png`
- Pass-one focused comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/28-slide-08-header-comparison.png`
- Final fully revealed desktop implementation: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/29-slide-08-header-full-pass-2-local.png`
- Final focused comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/30-slide-08-header-comparison-pass-2.png`
- Mobile top and lower-state captures: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/31-slide-08-header-mobile-top.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/32-slide-08-header-mobile-lower.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User header target | 1511 × 217 | Cropped desktop slide header | approved opportunity header |
| Final desktop | 1588 × 1260 | 1588 × 1260 browser viewport; 1588 × 893 centred slide; devicePixelRatio 1 | slide 08, fragment 04 |
| Final focused comparison | 3038 × 217 | Source and implementation header regions at 1511 × 217 with a 16px gutter | target → slide 08 |
| Mobile captures | 390 × 844 each | 390 × 844 browser viewport; devicePixelRatio 1 | slide 08, fragment 04, top and scrolled lower state |

The focused comparison isolates the requested header, while the full-slide capture proves that its larger hierarchy does not collide with the existing layered architecture, assurance bracket or footer.

### Findings, fixes and iteration history

- Pass 0 — blocked: slide 08 still used `Connect what Tieman already has. Build whatever comes next.`, so the solution architecture did not carry the user's preferred opportunity framing.
- [P1] Header message. Fixed by moving the exact kicker, headline and supporting paragraph from the selected target onto slide 08 and updating the frame descriptor to the same trusted-foundation idea.
- Pass 1 — blocked: the correct copy inherited slide 08's smaller 3.4cqw solution heading and wrapped after `Tieman's`, which weakened the balance and emphasis of the selected header.
- [P2] Header scale and wrapping. Fixed by matching the selected foundation-header geometry: 4.35cqw display size, 57cqw measure, 0.9 line height, 35cqw copy column and the matching supporting-copy treatment.
- Pass 2 — passed: the focused comparison now reproduces the selected hierarchy, line break, emphasis and right-column balance, while the complete solution stack remains contained in the 16:9 slide.

### Fidelity and responsive verification

- Fonts and typography: the existing deck display and UI families are preserved. The lime italic emphasis remains on `data and AI`, and the desktop title wraps after `foundation` as in the target.
- Spacing and layout rhythm: the header uses the same two-column geometry as the selected source; all four revealed architecture layers retain clear separation and footer clearance.
- Colours and tokens: the implementation uses the existing dark canvas, lime accent and token-derived supporting-copy colour with no off-system values.
- Image and icon fidelity: the requested change contains no image asset. Existing Lucide architecture icons remain unchanged and no placeholder or substitute art was introduced.
- Copy and content: the kicker, headline and supporting paragraph match the selected header verbatim; slide 07 and all slide 08 architecture content remain in place.
- Interaction: slide 08 still reveals source systems, unified context, applications and the security/governance/hosting bracket one layer per keypress; all four states were exercised in the browser.
- Responsive behaviour: at 390 × 844 the header remains legible, the supporting copy does not clip, and the lower architecture layers remain reachable by scrolling.
- Browser verification: the local story route rendered the revised header at slide 08 with every layer revealed and produced no warning or error console logs.

### Result

final result: passed

## Slide 08 source-system stagger — QA

### Source and implementation evidence

- User-selected source-system row: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_vbnZyh/Screenshot 2026-09-01 at 11.53.26 PM.png`
- Pre-reveal local state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/39-source-stagger-before-local.png`
- 180ms and 460ms stagger states: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/40-source-stagger-180ms-local.png` and `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/41-source-stagger-460ms-local.png`
- Completed local state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/42-source-stagger-complete-local.png`
- Four-state motion comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/43-source-stagger-sequence-comparison.png`
- Focused static source/implementation comparison: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/44-source-stagger-static-comparison.png`
- Mobile completed state: `/Users/raihanrazi/.codex/visualizations/2026/09/01/01a05b75-a5e0-7190-a0b7-e2447ba74e29/tieman-story-build/45-source-stagger-mobile-local.png`

### Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | State |
| --- | ---: | ---: | --- |
| User row source | 1287 × 139 | Cropped desktop source-system row | approved static row |
| Local sequence captures | 1280 × 720 each | 1280 × 720 browser viewport; devicePixelRatio 1 | slide 08, fragment 00 → fragment 01 |
| Motion comparison | 2560 × 360 | Four 640 × 360 equal panels | before, 180ms, 460ms, complete |
| Focused static comparison | 2574 × 139 | Source and completed implementation row normalised to 1287 × 139 each | source → complete |
| Mobile capture | 390 × 844 | 390 × 844 browser viewport; devicePixelRatio 1 | fragment 01 complete |

The focused comparison proves the completed row preserves the selected static layout. The four-state board is the primary evidence for the requested one-at-a-time entrance.

### Findings, fixes and iteration history

- Pass 0 — blocked: all six source-system cells became visible as one undifferentiated group when fragment 01 was revealed.
- [P2] Motion hierarchy. Fixed with a 380ms opacity-and-rise entrance staggered by 110ms across Epicor, SolidWorks, PDM, Word + PDF, Excel and People. The full sequence completes in under one second and does not delay later keypress-controlled layers.
- Pass 1 — passed: the four-state comparison shows a clear left-to-right progression while the completed state remains visually identical to the supplied source row.

### Fidelity and interaction verification

- Fonts and typography: labels, roles, weights, line heights and wrapping are unchanged throughout the animation.
- Spacing and layout rhythm: every cell keeps its existing grid track, border and padding; the entrance uses only opacity and a 0.5cqw vertical offset, so no reflow occurs.
- Colours and tokens: the animation introduces no new colour or surface token; lime icons, muted roles and hairline borders remain unchanged.
- Image quality and asset fidelity: no asset or icon changed. The existing source-system icons remain sharp and correctly aligned.
- Copy and content: Epicor, SolidWorks, PDM, Word + PDF, Excel and People remain complete and in the approved order.
- Interaction: one keypress still reveals the entire source layer; the cells then sequence automatically within that fragment. Subsequent context, app, assurance and summary keypresses are unchanged.
- Motion accessibility: the existing `prefers-reduced-motion: reduce` treatment disables the stagger and shows all six cells immediately when fragment 01 is revealed.
- Responsive behaviour: the completed 390 × 844 state preserves the two-column mobile grid without clipping or overflow.
- Browser verification: the local story route produced no warning or error console logs.

### Result

final result: passed
