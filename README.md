# SemanticLab Website

> Marketing website for SemanticLab — an AI product studio building tools that work as hard as you do.

## What is SemanticLab?

SemanticLab is a founder-led AI product studio based in Melbourne, Australia. We build focused AI products across multiple verticals:

| Product | Status | Color | Category | URL |
|---------|--------|-------|----------|-----|
| **Image Enhancer** | Live | Vector Rose `#C75B7A` | E-Commerce | `/products/image-enhancer` |
| **SmartApply** | Beta | Smart Indigo `#6366f1` | Career | `/products/smartapply` (external app) |
| **Visual Search** | Coming Soon | Neural Teal `#2A7C7D` | E-Commerce | `/products/visual-search` |
| **Commerce AI** | Coming Soon | Signal Amber `#F0A750` | E-Commerce | — |
| **Agent Bridge** | Coming Soon | Neural Teal `#2A7C7D` | E-Commerce | — |

## Tech Stack

- **Framework**: React Router 7 (framework mode, SSR)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **TypeScript**: Strict mode
- **Fonts**: Playfair Display (display/headings) + DM Sans (body) + JetBrains Mono (code)
- **Icons**: Lucide React

## Brand Colors

```
Vector Rose:    #C75B7A  (Primary CTA, Image Enhancer brand)
Vector Rose Dark: #A84A65
Neural Teal:    #2A7C7D  (Secondary actions)
Neural Teal Dark: #1F5E5F
Signal Amber:   #F0A750  (Highlights)
Signal Amber Dark: #D8923F
Smart Indigo:   #6366f1  (SmartApply brand)
Smart Indigo Dark: #4f46e5
Charcoal:       #1A1A1A  (Text)
Pearl:          #FAFAFA  (Background)
Slate:          #4A4A4A  (Secondary text)
```

Colors are defined in `app/app.css` under `@theme` and mapped to Tailwind utility classes via `colorMap` in `app/lib/utils.ts`.

## Project Structure

```
website/
├── app/
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components
│   │   ├── shared/
│   │   │   ├── ProductCard.tsx          # Reusable product card (live/beta/coming-soon badges)
│   │   │   └── ComingSoonBadge.tsx
│   │   ├── marketing/
│   │   │   ├── home/
│   │   │   │   ├── UmbrellaHero.tsx     # Homepage hero — dual CTA (IE + SA)
│   │   │   │   ├── SocialProofBar.tsx   # Honest credibility indicators
│   │   │   │   ├── FeaturedProduct.tsx  # Dual-product showcase (IE + SA workflows)
│   │   │   │   ├── ProductGrid.tsx      # All products grid (3-col)
│   │   │   │   └── UmbrellaCTA.tsx      # Bottom CTA — dual product CTAs
│   │   │   ├── image-enhancer/
│   │   │   │   ├── IEHero.tsx
│   │   │   │   ├── IEPipeline.tsx
│   │   │   │   ├── IEBeforeAfter.tsx
│   │   │   │   ├── IEFeatures.tsx
│   │   │   │   ├── IEIntegrations.tsx
│   │   │   │   ├── IETargetAudience.tsx
│   │   │   │   └── IEPricingTeaser.tsx
│   │   │   ├── smartapply/
│   │   │   │   ├── SAHero.tsx           # Smart-indigo themed hero
│   │   │   │   ├── SAHowItWorks.tsx     # 3-step: Artifacts → Role → Generate
│   │   │   │   └── SAFeatures.tsx       # ATS, tailoring, parsing, cover letters
│   │   │   └── visual-search/
│   │   │       └── ...
│   │   ├── Navigation.tsx               # Sticky nav with products dropdown + beta badges
│   │   ├── Footer.tsx                   # Dual-CTA footer (IE + SA)
│   │   └── FoundersSection.tsx          # Homepage founders teaser
│   │
│   ├── lib/
│   │   ├── utils.ts                     # cn() helper + colorMap (all 4 brand colors)
│   │   ├── products.ts                  # Product registry (5 products, categories)
│   │   └── pricing.ts                   # Pricing tiers
│   │
│   ├── types/
│   │   └── products.ts                  # Product interface (status, color, category, externalHref)
│   │
│   ├── routes/
│   │   ├── home.tsx                     # Homepage
│   │   ├── founders.tsx                 # Founders page
│   │   ├── products/
│   │   │   ├── image-enhancer.tsx       # Image Enhancer product page
│   │   │   ├── image-enhancer.pricing.tsx
│   │   │   ├── smartapply.tsx           # SmartApply product page
│   │   │   ├── visual-search.tsx
│   │   │   └── visual-search.pricing.tsx
│   │   ├── app/
│   │   │   ├── _layout.tsx             # App shell (sidebar, top bar)
│   │   │   ├── image-enhancer.tsx      # Image Enhancer app
│   │   │   ├── batch.tsx
│   │   │   ├── history.tsx
│   │   │   └── settings.tsx
│   │   └── redirects/
│   │       ├── how-it-works.tsx        # → /products/image-enhancer
│   │       └── pricing.tsx             # → /products/image-enhancer/pricing
│   │
│   ├── routes.ts                        # Manual route config
│   ├── app.css                          # Tailwind theme + custom utilities
│   └── root.tsx                         # Root layout
│
├── public/
│   └── images/founders/                 # Founder photos
├── react-router.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Routes

| Path | File | Description |
|------|------|-------------|
| `/` | `routes/home.tsx` | Homepage |
| `/founders` | `routes/founders.tsx` | Founders page |
| `/products/image-enhancer` | `routes/products/image-enhancer.tsx` | IE product page |
| `/products/image-enhancer/pricing` | `routes/products/image-enhancer.pricing.tsx` | IE pricing |
| `/products/smartapply` | `routes/products/smartapply.tsx` | SmartApply product page |
| `/products/visual-search` | `routes/products/visual-search.tsx` | VS product page |
| `/products/visual-search/pricing` | `routes/products/visual-search.pricing.tsx` | VS pricing |
| `/app/image-enhancer` | `routes/app/image-enhancer.tsx` | IE web app |
| `/app/batch` | `routes/app/batch.tsx` | Batch processing |
| `/app/history` | `routes/app/history.tsx` | Processing history |
| `/app/settings` | `routes/app/settings.tsx` | User settings |

## Key Patterns

### Product Data Model

Products are defined in `app/lib/products.ts` and typed in `app/types/products.ts`:

```typescript
interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon" | "beta";
  icon: string;              // Lucide icon name
  color: "vector-rose" | "neural-teal" | "signal-amber" | "smart-indigo";
  href: string;              // Internal product page
  appHref?: string;          // Internal app route
  category?: "e-commerce" | "career";
  externalHref?: string;     // External app URL (e.g. SmartApply)
}
```

### Dynamic Color System

Tailwind can't resolve dynamic class names at build time. Use `colorMap` from `app/lib/utils.ts`:

```typescript
import { colorMap } from "~/lib/utils";

const colors = colorMap[product.color];
// colors.bg    → "bg-smart-indigo"
// colors.bg10  → "bg-smart-indigo/10"
// colors.text  → "text-smart-indigo"
```

### Adding a New Product

1. Add color to `@theme` in `app/app.css` (if new color)
2. Add color entry to `colorMap` in `app/lib/utils.ts`
3. Update color union in `app/types/products.ts`
4. Add product to `app/lib/products.ts`
5. Add icon to icon maps in `ProductCard.tsx`, `Navigation.tsx`
6. Create marketing components in `app/components/marketing/<slug>/`
7. Create route in `app/routes/products/<slug>.tsx`
8. Register route in `app/routes.ts`

### Status Badges

Three product statuses with distinct badge styles:
- **Live**: Green dot + "Live" on emerald background
- **Beta**: Indigo dot + "Beta" on indigo/10 background (pulsing)
- **Coming Soon**: Gray badge

## Getting Started

```bash
npm install
npm run dev          # http://localhost:5173
```

## Scripts

```bash
npm run dev          # Start dev server with HMR
npm run build        # Production build
npm run start        # Preview production build
npm run typecheck    # TypeScript type checking
```

## Deployment

### Docker

```bash
docker build -t semanticlab-website .
docker run -p 3000:3000 semanticlab-website
```

### Other Platforms

Works with any Node.js hosting: Vercel, Cloudflare Pages, Railway, Fly.io, etc. Deploy the output of `npm run build`.

## Related Docs

- **Website UX Spec**: `../WEBSITE_UX.md` — Brand strategy, page layouts, design system
- **Technical Spec**: `../TECHNICAL_SPEC.md` — Visual Search backend architecture
- **UX Specification**: `../UX_SPECIFICATION.md` — Visual Search Shopify app UX

---

Built with care by **Raihan Razi + Naila Rahman** in Melbourne, Australia.
