# SemanticLab Design System QA

## Visual truth

- Source brand guideline: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_ITZUm4/Screenshot 2026-08-25 at 9.46.06 PM.png`
- Implementation route: `/design-system`
- Desktop hero capture: `/tmp/semanticlab-design-system-qa/final-hero.png`
- Desktop full-page capture: `/tmp/semanticlab-design-system-qa/final-full.png`
- Mobile hero capture: `/tmp/semanticlab-design-system-qa/design-system-mobile-hero-top.png`
- Full comparison input: `/tmp/semanticlab-design-system-qa/brand-system-comparison.png`
- Focused captures: `/tmp/semanticlab-design-system-qa/final-identity.png`, `/tmp/semanticlab-design-system-qa/final-colour.png`, `/tmp/semanticlab-design-system-qa/final-typography.png` and `/tmp/semanticlab-design-system-qa/final-motion.png`

The source is a compact brand board, while the implementation is an extended living reference page. The comparison therefore judges the same foundation surfaces—identity, palette, typography, meaning, values and motion—rather than pretending the two artifacts have identical information architecture.

## Normalisation

| Artifact | Pixel size | CSS viewport | Density / state |
| --- | ---: | ---: | --- |
| Source guideline | 1521 × 1005 | supplied board | 1× source bitmap |
| Desktop hero | 1430 × 993 | 1440 × 1000 | 1×, page top |
| Desktop full page | 1430 × 10381 | 1440 × 1000 | 1×, all sections |
| Mobile hero | 380 × 822 | 390 × 844 | 1×, page top |
| Comparison | 3072 × 1024 | source plus four implementation regions | Source occupies the left half; identity, colour, typography and motion occupy equal right-hand panels |

The in-app browser bitmap excludes its scrollbar gutter, which explains the small difference between CSS viewport and saved pixel width. Focused regions are required because the full route is much taller than the source board and its token labels would not remain legible at full-page comparison scale.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Fonts and typography: every heading, label and body sample resolves to Inter. The weight range, negative display tracking, uppercase labels and italic emphasis reproduce the board without reintroducing a second type family. On Warm White, small labels use Graphite instead of low-contrast lime.
- Spacing and layout rhythm: the implementation keeps the guideline's fine one-pixel dividers, connected grids, broad black fields and intentional light editorial panels. A 4px spacing base, 1440px shell and 80–128px section rhythm are coded as reusable tokens.
- Colours and tokens: browser-computed swatches are exactly RGB `139 255 77`, `246 246 244`, `168 175 148`, `51 54 58` and `11 11 13`, matching the approved five-colour palette. Opacity and colour-mix values are used only for semantic borders and interaction states.
- Image quality and asset fidelity: the approved high-resolution raster lockup and data landscape are reused. The logo is source-cropped without redrawing it, and the motion example retains the source artwork rather than substituting CSS art or a generated placeholder.
- Copy and content: the reference route uses the approved Data + Focus + Intelligence = Impact logic, five brand values and evidence-safe commercial terms from `CONTEXT.md`. It does not introduce client claims, packages, prices or trial language.
- Interaction and accessibility: rail navigation, section anchors, focus rings, labelled input, visible hover/focus states and reduced-motion behavior are present. The route is `noindex, nofollow`, unlinked from public navigation and absent from the shared marketing chrome.

## Comparison history

### Pass 1

- P2 — The initial no-tagline crop ended before the final “b” in SemanticLab and clipped the lowest row of the symbol. The source crop bounds and composite aspect ratio were expanded. Evidence: `/tmp/semanticlab-design-system-qa/logo-grid.png` and `/tmp/semanticlab-design-system-qa/logo-grid-pass-2.png`.
- P2 — Small lime labels on Warm White were too low-contrast. Light-surface eyebrow, type metadata and surface labels now use approved Graphite while lime remains the primary dark-surface signal.
- P2 — Native hash navigation competed with React Router scroll restoration. Shared section links now position targets deterministically below the 78px desktop or 72px mobile header.

### Final pass

- The combined comparison confirms the approved mark, five exact colours, Inter typography, grid structure, restrained icon language and connected data motion.
- Direct rail navigation positions the target at 78px below the desktop header.
- Both data-landscape layers change transform independently after 2.6 seconds.
- Fresh browser logs contain no application warnings or errors.

## Responsive, interaction and build checks

- Browser-rendered at 1440 × 1000, 1024 × 768 and 390 × 844 CSS-pixel viewports.
- The reference route reports zero horizontal overflow at every tested viewport.
- Home, Work, Services and Founders retain Inter headings, the corrected no-tagline lockup and zero desktop horizontal overflow.
- Home retains the shared lockup, menu control and zero horizontal overflow at 390 × 844.
- Keyboard focus uses a 1px Signal Lime outline, 4px offset and a visible lime focus ring.
- The design-system route emits `noindex, nofollow`; `robots.txt` disallows `/design-system`.
- `git diff --check`, `npm run typecheck` and `npm run build` pass.
- Production build emits only the existing stale Browserslist-data advisory.

## Follow-up polish

- P3 — Add original approved light-background logo and monogram/app-icon files when supplied. The design system deliberately refuses to synthesise them from CSS or approximate SVG artwork; the present production lockup and symbol use the approved dark raster only.

## Result

final result: passed
