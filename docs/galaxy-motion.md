# Preview galaxy motion

The homepage replaces its image landscape with a procedural WebGL star field when both the preview build and runtime `SL_FEATURE_GALAXY_MOTION=true` permit it. The existing copy, navigation, brand artwork, supporting pages and production homepage are retained.

## Motion contract

- A 22,000-point field and procedural diffuse-light layer form a tilted two-arm galaxy. A warm nucleus, cooler irregular arms, exponential stellar disk and dark dust lanes draw on the Hubble NGC 1300 reference (https://esahubble.org/images/opo0501a/). Natural astronomical colours belong to the illustration; branded UI colours remain unchanged.
- Slow coherent rotation continues while visible. Only the rare bright stars shimmer subtly; the diffuse disk rotates with the stars and fades during the scroll transition.
- Scroll progress relative to viewport height compresses the formation, then moves its particles along staggered curved paths into the margins. A critically damped spring smooths scroll input; easing and slight overshoot settle the particles.
- Continued scrolling moves particles at depth-dependent speeds, wrapping outside the viewport. A soft margin mask keeps the centre clear.
- Mouse/pen proximity pushes nearby stars outward within 90–150 pixels, with smooth falloff and pointer lag. Touch and interactive controls do not activate this effect.
- Pause and reduced-motion preferences stop ambient motion, pointer displacement and depth parallax. Scroll still positions the field directly without an animation loop. Hidden tabs stop rendering; resize, route cleanup and WebGL restoration are handled. A quiet gradient is available when WebGL cannot initialize.
- The reference is https://higgsfield.ai/gpt-astra. This implementation uses original procedural coordinates and no Higgsfield artwork, logo morph or copied particle maps.

## Deployment and isolation

Existing pipeline: one Worker (`semanticlab-website`), GitHub `SemanticLab-ai/website`, production `main`, preview `staging`. Cloudflare Workers Builds is the sole upload executor. The requested staging approval URL is https://staging-semanticlab-website.contact-e0b.workers.dev/.

`npm run build` uses `WORKERS_CI_BRANCH`: `main` or no branch selects production; other branches select preview. Explicit `SEMANTICLAB_BUILD_ENV` is available for local artifact checks. `config/deployment-contract.json` supplies build settings; Wrangler source defaults are production-safe, and each flattened configuration receives explicit bindings. The homepage loader checks the compiled flag and the uploaded runtime flag before rendering the scene.

Preview uploads use `wrangler versions upload`; production uses `wrangler deploy`. No new Worker, environment, external service, paid API, storage or catalogue was added. The shared Worker serves static/code resources and uses its existing request quota. Production SEO/canonical and existing GTM placeholder are retained; preview JS excludes analytics and responses set noindex headers.

`npm run check` runs typechecking, preview/production builds, source and flattened artifact assertions, both Wrangler dry runs, and HTTP smoke checks including the runtime kill switch. `npm run cf-typegen` regenerates binding types.

## Verification and rollback

Verify the pushed feature commit's Cloudflare build and uploaded bindings, merge its verified PR into staging, then verify the staging merge commit's Cloudflare build, deployment manifest and live UI at mobile/tablet/desktop sizes. Compare production before and after to ensure no release occurred. Record version IDs and commit evidence in the PR.

Rollback through a feature PR reverting this change into staging; Cloudflare builds and uploads a new preview version. The previous staging version URL remains available for comparison. Never promote a preview version or merge to main without explicit production approval.
