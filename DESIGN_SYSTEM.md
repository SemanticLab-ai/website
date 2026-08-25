# SemanticLab Design System

This is the implementation source of truth for SemanticLab's visual identity and shared interface language.

## Source of truth

- Living reference: `/design-system` (intentionally unlinked and `noindex`)
- Design tokens: `app/styles/semantic-tokens.css`
- Foundation data: `app/design-system/foundations.ts`
- Approved dark logo artwork: `public/images/brand/semanticlab-logo-dark.png`
- Shared logo rendering: `app/components/BrandLockup.tsx`
- Shared ambient data motion: `app/components/marketing/shared/AnimatedDataLandscape.tsx`

The supplied brand guideline is the visual authority. When the implementation and this document differ, resolve the implementation against the guideline before adding a new rule.

## Brand logic

```text
Data + Focus + Intelligence = Impact
```

The design system should feel:

- Strategic: purpose-led, structured and specific.
- Human-centred: understandable, calm and empathetic.
- Intelligent: connected, responsive and insight-driven.
- Scalable: reusable, composable and ready to evolve.
- Trusted: restrained, accessible and evidence-led.

## Colour

Only the approved palette should define branded surfaces.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Signal Lime | `--sl-color-lime` | `#8BFF4D` | Primary action, intelligence and deliberate emphasis |
| Warm White | `--sl-color-white` | `#F6F6F4` | Primary text and light editorial surfaces |
| Intelligence Sage | `--sl-color-sage` | `#A8AF94` | Supporting text and quiet data |
| Graphite | `--sl-color-graphite` | `#33363A` | Structure, dividers and elevated detail |
| Obsidian | `--sl-color-black` | `#0B0B0D` | Default canvas and text on light surfaces |

Use lime sparingly. A useful default balance is 70% obsidian, 20% warm white, 8% sage/graphite and 2% lime.

Signal Lime is a dark-surface accent. On Warm White, use Graphite or Obsidian for readable text; do not use lime for small labels or body copy.

Opacity and colour mixing may create functional borders, pressed states and overlays. Do not introduce a new named brand colour for those states.

## Typography

- Family: Inter Variable.
- Display and titles: weight `450`, tracking `-0.055em` to `-0.04em`.
- Body: weight `350` to `450`, line-height around `1.65`.
- Labels: weight `600` to `650`, uppercase, tracking `0.19em`.
- Emphasis: Inter italic in Signal Lime.

Do not add a second display family. Hierarchy comes from scale, weight, space and deliberate italic emphasis.

## Logo

- Website navigation and footer use the symbol + SemanticLab wordmark without the tagline.
- The tagline is supporting brand language, not part of the default interface lockup.
- Keep at least one outer-dot width of clear space around the artwork.
- Never recolour, stretch, outline, glow or reconstruct the mark.
- Do not synthesise a light-background or app-icon asset in CSS or SVG. Use approved production artwork when supplied.
- Use the cropped source regions in `BrandLockup` rather than duplicating or redrawing the logo.

## Layout

- Maximum shell: `1440px`.
- Desktop gutter: `32px`; mobile gutter: `18px`.
- Spacing base: `4px`, exposed as `--sl-space-1` through `--sl-space-10`.
- Section rhythm: `80px` to `128px`, reduced on mobile.
- Borders: one-pixel structural dividers.
- Radius: low by default; pills are reserved for decisive primary actions.

Prefer connected grids over collections of floating cards. Avoid glassmorphism, soft decorative shadows and rounded containers that do not express a functional grouping.

## Interface primitives

- Primary action: Signal Lime fill, Obsidian text, pill shape.
- Secondary action: transparent surface, Graphite border, explicit directional icon.
- Text link: short label, visible direction, strong hover/focus state.
- Fields: square or lightly rounded, always labelled, with supporting copy kept visible.
- Kicker: Signal Lime, uppercase, letter-spaced label.
- Surfaces: Obsidian default; Warm White for deliberate editorial contrast.

Use the existing `strategy-button`, `semantic-text-link`, `semantic-kicker`, `semantic-shell` and surface classes before creating another primitive.

## Motion

Motion must reveal connection or state.

- Fast (`160ms`): hover, focus and small control changes.
- Base (`320ms`): panels and connected transitions.
- Slow (`900ms`): hero entrances and meaningful scene changes.
- Ambient (`12–15s`): data landscapes only.

Every continuous or entrance animation must stop under `prefers-reduced-motion: reduce`.

## Imagery and icons

- Use the approved data-field artwork for intelligence, systems and connected motion.
- Use supplied photography and brand artwork at their intended aspect ratio.
- Use one restrained line-icon family; Lucide is the current interface family.
- Do not recreate brand marks, illustrations or product imagery with CSS art, emoji or approximate SVGs.

## Language

Use the commercial language in `CONTEXT.md`:

- Product Innovation Partner
- Strategy Engagement
- Built Product
- Evidence-Backed Claim

Avoid product trials as the primary funnel and do not publish unsupported client logos, metrics, testimonials, packages, prices or outcomes.

## Contribution rules

1. Use an existing token before adding a new value.
2. Add a semantic role only when the existing role cannot express the need.
3. Demonstrate new shared primitives on `/design-system`.
4. Verify dark/light contrast, keyboard focus, reduced motion and mobile wrapping.
5. Keep `/design-system` out of public navigation, robots and the sitemap.
