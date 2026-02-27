# SemanticLab Website - Setup Complete ✅

## What's Been Set Up

### ✅ React Router 7 (Framework Mode)
- File-based routing
- TypeScript configured
- SSR enabled

### ✅ Tailwind CSS v4
- Latest Tailwind with `@theme` syntax
- Configured with SemanticLab brand colors
- Custom spacing and typography scales

### ✅ shadcn/ui Component Library
- Installed and configured
- Brand colors applied (vector-rose, neural-teal, signal-amber)
- Components installed: `button`, `card`, `dialog`, `form`, `separator`

### ✅ Brand Design System
- All SemanticLab colors defined
- Typography scale (display, h1, h2, h3)
- Spacing scale (4xs through 4xl)
- Inter + JetBrains Mono fonts configured

---

## Brand Colors (Already Configured)

```css
--color-charcoal: #1A1A1A        /* Main text */
--color-pearl: #FAFAFA           /* Background */
--color-slate: #4A4A4A           /* Secondary text */
--color-vector-rose: #C75B7A     /* Primary CTA, brand accent */
--color-neural-teal: #2A7C7D     /* Secondary actions */
--color-signal-amber: #F0A750    /* Highlights, alerts */
```

Usage in Tailwind:
```tsx
<div className="bg-vector-rose text-white">Primary Button</div>
<div className="bg-neural-teal text-white">Secondary Action</div>
<p className="text-charcoal">Body text</p>
<p className="text-slate">Secondary text</p>
```

---

## File Structure

```
website/
├── app/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (owned by you)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── label.tsx
│   │   │   └── separator.tsx
│   │   │
│   │   └── Hero.tsx         # Custom Hero component (example)
│   │
│   ├── lib/
│   │   └── utils.ts         # cn() helper for Tailwind classes
│   │
│   ├── routes/
│   │   └── home.tsx         # Homepage (/)
│   │
│   ├── app.css              # Tailwind + theme variables
│   └── root.tsx             # Root layout
│
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── react-router.config.ts   # React Router config
└── package.json
```

---

## Quick Start

### 1. Install Dependencies (if not done)
```bash
cd /Users/raihanrazi/Documents/Sites/semanticlab/website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production
```bash
npm run build
npm run start  # Preview production build
```

---

## Adding More Components

### Install shadcn/ui components as needed:

```bash
# For FAQ section
npx shadcn@latest add accordion

# For tabs (Shoppers vs Merchants)
npx shadcn@latest add tabs

# For ROI calculator
npx shadcn@latest add slider

# For "Most Popular" badge
npx shadcn@latest add badge

# For mobile menu
npx shadcn@latest add sheet

# For navigation dropdown
npx shadcn@latest add navigation-menu
```

### Using components:

```tsx
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

<Button>Install Free</Button>
<Button variant="secondary">Watch Demo</Button>

<Card>
  <CardHeader>
    <CardTitle>Visual Search</CardTitle>
  </CardHeader>
  <CardContent>
    Upload photos or click similar items
  </CardContent>
</Card>
```

---

## Next Steps

### 1. Create More Pages

**Founders Page:**
```bash
# Create file
touch app/routes/founders.tsx
```

```tsx
// app/routes/founders.tsx
import type { Route } from "./+types/founders";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Founders - SemanticLab" },
    { name: "description", content: "Meet the duo behind SemanticLab" },
  ];
}

export default function Founders() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-h1 font-bold mb-6">
        Built by a Duo Tired of "Good Enough"
      </h1>
      {/* Your content */}
    </div>
  );
}
```

**Pricing Page:**
```bash
touch app/routes/pricing.tsx
```

**How It Works:**
```bash
touch app/routes/how-it-works.tsx
```

### 2. Add Navigation

```tsx
// app/components/Navigation.tsx
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-charcoal">
          SemanticLab
        </Link>

        <div className="hidden md:flex gap-6">
          <Link to="/product" className="text-slate hover:text-charcoal">
            Product
          </Link>
          <Link to="/how-it-works" className="text-slate hover:text-charcoal">
            How It Works
          </Link>
          <Link to="/pricing" className="text-slate hover:text-charcoal">
            Pricing
          </Link>
          <Link to="/founders" className="text-slate hover:text-charcoal">
            Founders
          </Link>
        </div>

        <Button asChild>
          <a href="https://apps.shopify.com/semanticlab">Install App</a>
        </Button>
      </div>
    </nav>
  );
}
```

Then add to `root.tsx`:
```tsx
import { Navigation } from "~/components/Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>{/* ... */}</head>
      <body>
        <Navigation />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
```

### 3. Add Google Fonts

Update `app/root.tsx`:

```tsx
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap",
  },
];
```

---

## Typography Usage

Use the predefined sizes:

```tsx
<h1 className="text-display font-bold">Hero Headline</h1>
<h1 className="text-h1 font-bold">Page Title</h1>
<h2 className="text-h2 font-semibold">Section Heading</h2>
<h3 className="text-h3 font-semibold">Subsection</h3>
<p className="text-lg">Large body text</p>
<p className="text-base">Regular body text</p>
<p className="text-sm text-slate">Small secondary text</p>
```

---

## Spacing Usage

Use the custom spacing scale:

```tsx
<div className="p-md">     {/* 24px padding */}
<div className="mb-xl">    {/* 48px bottom margin */}
<div className="gap-lg">   {/* 32px gap */}
<section className="py-4xl"> {/* 128px vertical padding */}
```

---

## Customizing shadcn/ui Components

All components are in `app/components/ui/`. You OWN them.

Example - Customize Button:

```tsx
// app/components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        // Add custom variant
        rose: "bg-vector-rose text-white hover:bg-vector-rose/90",
      },
    },
  }
)
```

Use it:
```tsx
<Button variant="rose">Custom Rose Button</Button>
```

---

## Deployment

### Cloudflare Pages (Recommended)

```bash
# Build
npm run build

# Deploy
npx wrangler pages deploy ./build/client

# Or connect GitHub repo to Cloudflare Pages
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "build/client"
```

---

## Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Preview production build
npm run typecheck    # Run TypeScript checks
npm run lint         # Run ESLint (if configured)
```

---

## Troubleshooting

### Tailwind classes not working?

Make sure `app/app.css` is imported in `app/root.tsx`:

```tsx
import stylesheet from "~/app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
```

### Component styles not applying?

Check that `cn()` utility is being used:

```tsx
import { cn } from "~/lib/utils";

className={cn("base-classes", conditionalClass && "active-class")}
```

### Colors not showing?

Verify Tailwind config has the colors defined AND check `app/app.css` has the `--color-*` variables in the `@theme` block.

---

## Resources

- **React Router 7 Docs**: https://reactrouter.com/
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **SemanticLab Design System**: See `WEBSITE_UX.md` in parent directory

---

## What You Have Now

✅ Production-ready React Router 7 setup
✅ Tailwind CSS v4 with SemanticLab brand
✅ shadcn/ui components (customizable)
✅ Example Hero component
✅ SEO-ready meta tags
✅ TypeScript configured
✅ Ready to deploy

**Next**: Build out your pages using the components in `app/components/ui/` and the brand colors!

---

**Questions?** Check the full UX spec in `/Users/raihanrazi/Documents/Sites/semanticlab/WEBSITE_UX.md`
