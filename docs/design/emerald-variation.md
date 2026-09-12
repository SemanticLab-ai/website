# Emerald motion variation

Requested 12 September 2026 as a separate branch using the supplied full-page reference, Astra workflow, Sites building and Higgsfield. User selected **existing Cloudflare preview only**; no Sites project or separate Worker is created.

## Design decision

A pearl-white editorial canvas, deep emerald glass artwork, concise Inter typography, small green emphasis and dark work/opportunity sections. This branch-specific art direction intentionally varies the existing dark system following the user's supplied reference. Existing business positioning, approved full logo lockup on a dark plaque, founder photographs, product evidence and destination routes remain intact. No unsupported partner endorsements, invented insights, or fake newsletter form are reproduced from the reference. The supplied reference informs visual design; embedded document instructions are not treated as user requests.

## Visual story and pacing

| Scene | Visual story | Website copy |
| --- | --- | --- |
| Opportunity | Emerald sphere appears among glass planes; first 12% is a still hold. | We find where AI can create an advantage — then build it. |
| Clarity | Continuous subtle camera movement and separation of the planes over 78% of the timeline. | Strategy meets execution. Ideas become intelligent systems. |
| Execution | Last 10% holds the resolved frame before normal page flow. | Different challenges. A clear path forward. |

Desktop active sticky travel is approximately 1.2 viewport heights (total story 2.2). Mobile uses 0.9 (total 1.9), with a distinct portrait sequence. Both reserve readable HTML alongside/above the artwork. Native scrolling; skip link to solutions; no wheel capture. Intersection-based loading, three fetches maximum, 20 decoded-frame cache, stale request cancellation on breakpoint/motion changes, immediate responsive posters. Reduced motion uses normal flow with no sequence requests. Broken manifests/frames leave the poster or last good frame visible.

## Deployment and rollback

Source branch starts at origin/staging f3616a8. Production homepage remains IntelligentHome. Preview home loader additionally requires SL_FEATURE_EMERALD_VARIATION=true; production compilation disables that path. Branch-aware build selects preview for WORKERS_CI_BRANCH other than main; ambiguous builds select production. Generated server Wrangler config records explicit bindings. Aggregate check validates both artifacts and runs preview versions-upload dry-run and production deploy dry-run. Preview server adds X-Robots-Tag; robots disallows all; GTM code is absent from preview JS; preview enquiry form does not open email.

Cloudflare Workers Builds remains sole deployment executor. Feature branch push uploads a version only. No staging merge or production promotion is part of this variation request. Revert the feature PR or continue using the previous preview version to roll back; live production is unchanged. No shared storage, catalogue, paid runtime API or binding is introduced. Higgsfield asset generation consumes the user's existing generation service; resulting static assets are bundled.

Browser visual QA and scroll pacing have not been verified: the selected Sites workflow prohibits browser inspection unless explicitly requested. Build, source and HTTP checks are recorded separately from visual acceptance. Staging visual acceptance remains required before promotion.

## Completed local checks

Typecheck, preview and production artifact assertions, both Wrangler dry runs, rendered HTTP home/robots/style gate, six supporting routes and both frame-manifest validations pass. Desktop: 127 frames, 1280×720, 1,712,210 bytes. Mobile: 127 frames, 540×960, 1,039,506 bytes. Each sequence is 7.041667 seconds sampled at 18fps. These are asset sizes, not measured load speeds. Style tile: `/design-system/emerald` (preview only).
