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
npm run start        # Preview production build
npm run typecheck    # TypeScript type checking
```

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
