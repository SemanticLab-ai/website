# SemanticLab Founders Photo and Favicon QA

## Visual truth

- Founder photo source: `/Users/raihanrazi/Downloads/unnamed.jpg`
- Approved logo source: `public/images/brand/semanticlab-logo-dark.png`
- Implementation route: `/founders`
- Desktop implementation: `/tmp/semanticlab-founder-photo-build/implementation-desktop-life.png`
- Tablet implementation: `/tmp/semanticlab-founder-photo-build/implementation-tablet-life.png`
- Mobile image implementation: `/tmp/semanticlab-founder-photo-build/implementation-mobile-life.png`
- Mobile copy implementation: `/tmp/semanticlab-founder-photo-build/implementation-mobile-life-copy.png`
- Founder photo comparison: `/tmp/semanticlab-founder-photo-build/reference-vs-desktop.png`
- Favicon comparison: `/tmp/semanticlab-founder-photo-build/favicon-source-vs-output.png`

The source founder image defines the subject, colour and photographic treatment. The existing SemanticLab page defines the layout, typography, palette and spacing. The approved dark logo artwork defines the favicon mark.

## Normalisation

| Artifact | Pixel size | CSS viewport / rendered size | Density and state |
| --- | ---: | ---: | --- |
| Original founder photo | 2316 × 3088 | supplied portrait | source bitmap |
| Optimised founder photo | 1200 × 1600 | intrinsic image | production JPEG |
| Desktop implementation | 1430 × 993 | 1440 × 1000; image 318 × 397 | 1×, Life section |
| Tablet implementation | 890 × 989 | 900 × 1000; image 441 × 551 | 1×, Life section |
| Mobile image implementation | 380 × 822 | 390 × 844; image 344 × 430 | 1×, Life section |
| Mobile copy implementation | 380 × 822 | 390 × 844; copy 344px wide | 1×, Life section |
| Founder comparison | 2190 × 1000 | source and desktop implementation side by side | source scaled to 1000px high |
| Favicon comparison | 1024 × 512 | approved mark crop and output side by side | both 512 × 512 |

The in-app browser bitmap excludes its scrollbar gutter, explaining the ten-pixel difference between CSS viewport and saved screenshot width.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Fonts and typography: the new image does not alter the established Inter hierarchy. The kicker, display headline, italic emphasis and body copy retain their approved weights, tracking and wrapping at all tested widths.
- Spacing and layout rhythm: desktop uses a connected three-column editorial grid. Tablet promotes the heading to a full-width row with image and copy below. Mobile stacks heading, image and copy without horizontal overflow.
- Colours and visual tokens: the photograph remains in natural colour against Warm White, providing the intended human contrast without introducing any new interface colours. Borders and text continue to use existing tokens.
- Image quality and asset fidelity: the supplied 2316 × 3088 photo is optimised to a 1200 × 1600 JPEG and displayed at a native 4:5 crop. Both founders remain fully recognisable at desktop, tablet and mobile widths. The favicon uses a source crop from the approved production logo; it is not redrawn or approximated.
- Copy and content: the Life Beyond the Laptop copy is unchanged. The meaningful image alternative text identifies Naila Rahman and Raihan Razi and provides the travel context.
- Favicon delivery: the document links the 512 × 512 PNG, 48 × 48 ICO fallback and Apple touch icon. The old letter-S SVG is removed.
- Interaction and accessibility: the page has no new interactive surface. The image is lazy-loaded, decodes asynchronously and creates no page overflow. Browser logs contain no warnings or errors.

## Comparison history

### Final pass

- The founder source and desktop comparison confirms that the warm, candid photograph is preserved and framed cleanly within the existing editorial section.
- Tablet and mobile captures confirm the intended responsive reflow and complete visibility of the image and accompanying copy.
- The approved mark and favicon output comparison are visually identical after square padding and downsampling.
- No visual fixes were required after the final comparison.

## Verification

- Browser-rendered at 1440 × 1000, 900 × 1000 and 390 × 844 CSS-pixel viewports.
- Zero horizontal overflow at tablet and mobile widths.
- Founder photo loads at 1200 × 1600 intrinsic pixels.
- Favicon link metadata resolves to `/favicon.png` and `/favicon.ico`.
- `git diff --check`, `npm run typecheck` and `npm run build` pass.
- Production build emits only the existing stale Browserslist-data advisory.

## Follow-up polish

- No P3 polish items are required for this change.

## Result

final result: passed
