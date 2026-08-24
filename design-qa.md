# Homepage redesign QA

## Visual target

- Primary source: `/Users/raihanrazi/Downloads/DA5DE270-F7D4-4949-9389-976E07FE4CFB.png`
- Supporting identity source: `/Users/raihanrazi/Downloads/1BC6DC6C-5CEB-4DE8-8E8F-71D0CB68FE44.png`
- Supporting system source: `/Users/raihanrazi/Downloads/21791030-E755-4E01-8989-8C6D3918A3EA.png`
- Implementation route: `/`

The primary source is an art direction, not an approved claims source. The implementation deliberately replaces its illustrative logos, testimonials, prices and metrics with non-quantified content and real founder photography.

## Captures

| Surface | Viewport | Capture |
| --- | ---: | --- |
| Desktop | 1440 × 900 | `tmp/design-qa/home-desktop-1440.png` |
| Tablet | 768 × 1024 | `tmp/design-qa/home-tablet-768.png` |
| Mobile | 390 × 844 | `tmp/design-qa/home-mobile-390.png` |
| Mobile menu | 390 × 844 | `tmp/design-qa/home-mobile-menu-390.png` |

All captures use standard CSS-pixel density in the Codex in-app browser. Full-page captures were used for the page; a viewport capture was used for the mobile menu state.

## Comparison history

### Pass 1

- P1 — The shared shell filled the full desktop width because `flex: 1` overrode its explicit width. Removed the growth rule and confirmed a 32 px desktop edge margin.
- P1 — Founder photography was lazy and therefore absent from full-page capture. Made the two founder images eager because they are core homepage content.
- P2 — The grayscale filter could defer the large founder image in an offscreen browser paint pass. Removed the redundant filter; the supplied portraits are already monochrome.
- P2 — Mobile and tablet layouts needed separate framework and capability grids. Confirmed 2-column framework / 1-column capabilities at mobile and 3-column framework / 2-column capabilities at tablet.

### Pass 2

- Reference and implementation were opened together at desktop scale.
- Hero composition, editorial type, black / warm-white / lime palette, data landscape, connected framework, founder section and fine-line surface treatment match the supplied direction.
- The removed proof strip is an intentional content-integrity change. Four disciplines keep the hero rhythm without presenting invented evidence.
- No remaining P0, P1 or P2 visual findings.

## Functional and accessibility checks

- `Request a Strategy Engagement` is the only prominent global conversion and opens a pre-addressed email journey.
- Desktop navigation and same-page framework anchor work; the anchor settles below the fixed header.
- Mobile navigation opens and closes, updates `aria-expanded`, locks body scroll and exposes the same destinations.
- Heading order contains one `h1` followed by section `h2` elements.
- All raster images load with non-empty alternative text.
- All icon-only controls have accessible labels; no empty-purpose links were found.
- No horizontal overflow at 1440, 768 or 390 CSS pixels.
- Reduced-motion CSS disables the two entrance animations and smooth scrolling.
- Fresh-browser console check: no warnings or errors.

## Result

final result: passed
