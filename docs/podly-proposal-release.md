# Podly proposal delivery

The Podly user testing proposal is served by the existing `semanticlab-website` Worker at `https://podly.semanticlab.ai/`. The root redirects to `/proposal/podly`. A separate Cloudflare Access self-hosted application must protect the exact `podly.semanticlab.ai` hostname before the custom domain is attached to the Worker. Its Allow policy includes `luke.vanderlist@gmail.com` and explicitly invited SemanticLab operators, with One-time PIN as the login method. Do not add Luke to the Worker-wide preview Access policy, which also protects unrelated feature previews.

The same Worker, asset binding, and Cloudflare account are shared with `semanticlab.ai` and `tieman.semanticlab.ai`. Podly does not use a second Worker or paid environment. `SL_FEATURE_CLIENT_PODLY_PROPOSAL` is enabled in both build contracts. The Worker and route loader allow the proposal only on preview versions or the exact Podly hostname. Production requests for `/proposal/podly` and its dedicated bundle on `semanticlab.ai` return 404. The Podly hostname is noindex and does not serve the public website routes.

Release path: feature PR into `staging`, inspect the staging preview, then `staging` PR into `main`. After Cloudflare finishes the exact `main` commit, inspect the uploaded version's bindings and verify the authenticated Podly page, anonymous Access challenge, production main-site 404, and Tieman presentation. Do not attach the custom domain before its Access application is active.

Rollback: remove the Podly custom domain route to cut off the public hostname immediately. Revert the `main` promotion through a PR if the Worker implementation must also be rolled back. Keep the Podly Access application in place until the hostname is detached.
