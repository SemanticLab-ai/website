# SemanticLab Website - Setup Guide

> **Note**: This guide was created during initial project scaffolding. The project is now fully built out. See **[README.md](./README.md)** for current project structure, tech stack, routes, patterns, and development setup.

## Quick Start

```bash
cd website
npm install
npm run dev          # http://localhost:5173
```

## Scripts

```bash
npm run dev          # Start dev server with HMR
npm run build        # Production build
npm run typecheck    # TypeScript type checking
npm run preview      # Build and preview locally
npm run deploy       # Manual production deployment; CI/CD uses Cloudflare Builds
```

## Delivery Pipeline

SemanticLab uses one Cloudflare Worker and promotes code through Git branches:

```text
feature branch -> staging -> Cloudflare Preview URL -> main -> semanticlab.ai
```

- Create feature branches from `origin/staging`.
- Open feature pull requests against `staging`.
- Cloudflare Workers Builds is connected directly to this GitHub repository.
- Every non-production branch push runs `npm run build` followed by `npx wrangler versions upload` and receives a Cloudflare Preview URL.
- The Preview URL generated from `staging` is the approval surface for the redesigned site.
- After review on the Preview URL, open a pull request from `staging` to `main`.
- Every push to `main` runs `npm run build` followed by `npx wrangler deploy` and deploys the production Worker.
- Do not create a second Worker or a Wrangler staging environment.

Cloudflare manages deployment authentication through its Git integration. Do not add Cloudflare API tokens, account IDs, or deployment jobs to GitHub Actions. GitHub Actions is reserved for pull-request validation.

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `app/components/ui/` — you own them and can customize freely.

## Key References

- **Project README**: `./README.md` — Tech stack, project structure, routes, patterns
- **UX Specification**: `../WEBSITE_UX.md` — Brand strategy, page layouts, design system
- **React Router 7**: https://reactrouter.com/
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
