# Cloudflare Issues for the marketing Worker

The shared `semanticlab-website` Worker uses branch-aware builds. `config/deployment-contract.json` declares Issues disabled for preview and enabled for production. `scripts/build-cloudflare.mjs` writes `observability.issues.enabled` into each flattened Wrangler upload artifact, and `scripts/assert-deployment.mjs` checks the selected value. The source `wrangler.json` keeps Workers Logs enabled; its pinned Vite plugin does not understand the newer Issues field, so the deployment artifact receives it after Vite builds. Preview branches upload versions; only `main` deploys a version to production traffic.

## Scope and review

[Workers Issues](https://developers.cloudflare.com/workers/observability/issues/) groups uncaught exceptions, failed invocations, Worker `5xx` responses, and error-level logs. It starts with new production traffic after the enabled version is deployed; it does not process historical failures. It does not monitor routine `4xx` form validation and rate-limit responses.

Before production promotion, review the generated preview and production Wrangler artifacts and both dry runs in `npm run check`. After promotion, verify the exact production build and Worker version, then inspect the Issues page for expected volume. To stop detecting new failures, change the production setting to `false` and release that change through staging and main.

## Cost

Issues is [free during its open beta](https://developers.cloudflare.com/workers/observability/issues/#pricing). From **1 December 2026**, it joins the [account-wide Observability ingestion and storage pool](https://developers.cloudflare.com/observability/pricing/). The published Paid allowance is 50 GB ingested and 10 GB-month stored per billing cycle; excess is $0.25/GB ingested and $0.10/GB-month stored. The Free allowance is 0.5 GB ingested per day with seven-day retention, after which ingestion stops until reset. Review account usage and plan before production promotion; this Worker already has Workers Logs enabled, and those logs share the pool.

## Request data

An [issue occurrence](https://developers.cloudflare.com/workers/observability/issues/investigate/) can include an error and stack trace, related logs and traces, Worker version, and invocation and request details. Occurrence details remain available for seven days; the issue remains listed after its occurrences expire. Both preview and production upload artifacts explicitly set `observability.redact_query_string=true`, which removes query strings from request URLs in logs and traces. Cloudflare does not document that this setting redacts every Issues field; review an actual occurrence after release. Request paths, error messages, custom logs, and other diagnostic context can still contain sensitive data. Do not add secrets, access tokens, form contents, or personal data to error messages, logs, or trace attributes. Restrict dashboard access to staff who need this diagnostic context.
