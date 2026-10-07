# SemanticLab Website Agent Instructions

These instructions apply to the entire repository.

## Read first

- Read `CONTEXT.md` before changing positioning, offers, credibility claims, or product language.
- Read `DESIGN_SYSTEM.md` before changing branded colours, typography, logo usage, layout rhythm, motion or shared interface primitives.
- Read the relevant Wayfinder map and decision tickets before implementing the SemanticLab redesign.
- Preserve user-authored work and unrelated changes already present in the worktree.

## Mandatory delivery path

All implementation work follows this promotion path:

```text
feature branch -> staging -> Cloudflare Preview URL -> main -> semanticlab.ai
```

1. Fetch the latest remote state and branch from `origin/staging`.
2. Work in a dedicated branch such as `codex/<issue-number>-<short-slug>` or `codex/<short-slug>`.
3. Open the implementation pull request against `staging`, never directly against `main`.
4. Merge only verified feature work into `staging`.
5. Use the Cloudflare Preview URL generated from the `staging` branch for visual QA, content review, and acceptance.
6. Promote to production only through a pull request from `staging` into `main` after staging approval.

Do not commit or push directly to `staging` or `main`. Do not cherry-pick feature work around the staging gate. Do not open a feature-to-`main` pull request.

## Cloudflare deployment model

- There is one Worker: `semanticlab-website`.
- Staging is a Git branch and a Preview URL for a version of that same Worker.
- Do not create a separate staging Worker, Wrangler environment, or staging custom domain.
- `preview_urls` must remain enabled in `wrangler.json`.
- Cloudflare Workers Builds is connected directly to the GitHub repository and is the sole deployment executor.
- Cloudflare builds non-production branches with `npm run build` followed by `npx wrangler versions upload`, producing Preview URLs without promoting them to production traffic.
- The `staging` branch Preview URL is the approval surface for the redesigned site. Feature-branch previews may be used for earlier review but do not replace staging acceptance.
- Cloudflare builds `main` with `npm run build` followed by `npx wrangler deploy`, deploying the production Worker and `semanticlab.ai`.
- GitHub Actions is for pull-request validation only. Do not add Cloudflare credentials or deployment jobs to GitHub Actions.
- Never run the production deployment command from a feature branch or from `staging`.

Preview builds must not publish unsupported claims, send test leads to real recipients, or rely on production-only side effects. Keep preview pages out of search indexing.

## Required verification

Before opening or updating a pull request, run:

```bash
npm run typecheck
npm run build
```

For visual changes, also verify the affected routes at mobile, tablet, and desktop widths on the staging Preview URL. Record the Preview URL and the tested commit in the pull request.

## Content integrity

- Use only Evidence-Backed Claims as defined in `CONTEXT.md`.
- Do not publish illustrative client logos, metrics, testimonials, packages, prices, or outcomes as facts.
- Built Products demonstrate capability; product trials and installs are not the primary marketing funnel.
- The primary commercial conversion is a qualified Strategy Engagement request.

## Design system

- `app/styles/semantic-tokens.css` is the coded token source of truth.
- `/design-system` is the unlinked, noindex reference surface for foundations and shared UI primitives.
- Use the approved five-colour palette and Inter type system defined in `DESIGN_SYSTEM.md`.
- Website lockups use the symbol and wordmark without the tagline.
- Add new shared primitives to the reference surface and verify mobile, focus and reduced-motion states before reuse.
