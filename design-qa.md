# Animated Landscape and Brand Typography QA

## Visual truth

- Work-hero reference: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_C9Lond/Screenshot 2026-08-25 at 9.44.47 PM.png`
- Wordmark reference: `/var/folders/p0/k97nw9bj41bb7ms006s3bmth0000gn/T/TemporaryItems/NSIRD_screencaptureui_ygXGBR/Screenshot 2026-08-25 at 9.45.32 PM.png`
- Supporting approved brand board: `/Users/raihanrazi/Downloads/1BC6DC6C-5CEB-4DE8-8E8F-71D0CB68FE44.png`
- Final implementation capture: `/tmp/semanticlab-wave-typography-qa/work-desktop-final.png`
- Motion-phase capture: `/tmp/semanticlab-wave-typography-qa/work-desktop-motion-later.png`
- Equal-scale side-by-side comparison: `/tmp/semanticlab-wave-typography-qa/work-comparison.png`
- Mobile captures: `/tmp/semanticlab-wave-typography-qa/work-mobile.png` and `/tmp/semanticlab-wave-typography-qa/home-mobile.png`

The work-hero image is the composition reference. The wordmark and approved brand board are the typography references; the brand board explicitly specifies Inter.

## Normalisation

| Artifact | Pixel size | CSS viewport | State |
| --- | ---: | ---: | --- |
| Work reference | 1853 × 706 | supplied desktop capture | Hero at rest |
| Implementation | 1844 × 702 | 1854 × 706 | `/work`, entrance settled, one wave phase |
| Comparison | 2400 × 500 | both panels cover-fitted to equal 1200 × 458 surfaces | Reference and implementation in one visual input |
| Mobile | 380 × 822 | 390 × 844 | `/work` and `/`, entrance settled |

The browser capture excludes its scrollbar gutter, which accounts for the small pixel difference between CSS viewport and saved bitmap. The comparison cover-fits both panels to the same measured surface. The complete hero remains visible, so no additional detail crop was required.

## Findings

- No actionable P0, P1 or P2 findings remain.
- Typography: the previous Cormorant Garamond display / Inter UI split is replaced by Inter throughout the marketing design. Display emphasis remains italic and lime, preserving the hierarchy while matching the primary wordmark direction.
- Composition: the work heading keeps the reference's three-line reading pattern: “Work that carries” / “strategy into” / “operation.”
- Motion: the source landscape is preserved as a real raster asset. A masked primary surface and lower-opacity undertow move on different durations and paths to create a slow submerging wave without changing the visual language.
- Accessibility: the animation is decorative, the duplicate undertow is hidden from assistive technology, and `prefers-reduced-motion` removes the entrance and continuous wave animations.
- Responsive behavior: Home and Work have no horizontal overflow at 1854 × 706 or 390 × 844. The mobile landscape remains behind content and does not obscure actions or labels.
- Implementation consistency: Home, Work, Services and Founders all resolve their primary `h1` to Inter with no horizontal overflow at the desktop test viewport.

## Comparison history

### Pass 1

- P2 — Directly swapping the serif headline to Inter made the work title wrap as “Work that” / “carries strategy” / “into operation,” changing the reference rhythm. The work display size, line height and measure were retuned so the original three-line grouping is restored.
- P2 — A single moving raster read as a drifting panel rather than a submerged surface. A separately masked undertow layer now supplies depth and a slower counter-motion.

### Final pass

- The combined comparison confirms the intended left-copy / right-landscape balance, lime emphasis, three-line title and dark visual treatment.
- Runtime transforms on both landscape layers changed after 3.2 seconds, confirming continuous independent motion.
- Fresh console inspection contained no warnings or errors from the application.

## Responsive and interaction checks

- Browser-rendered at 1854 × 706 and 390 × 844 CSS-pixel viewports.
- `/`, `/work`, `/services` and `/founders` were checked at desktop width; all primary headings use Inter and all pages report zero horizontal overflow.
- `/` and `/work` were visually checked at mobile width; both report zero horizontal overflow.
- “Explore the work” navigates to `/work#recent-work`; the target settles below the fixed header.
- `npm run typecheck`, `npm run build` and `git diff --check` pass.
- Production build emits only the existing stale Browserslist-data advisory.

## Result

final result: passed
