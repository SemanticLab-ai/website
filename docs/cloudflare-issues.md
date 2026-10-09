# Cloudflare Issues for the marketing Worker

The shared `semanticlab-website` Worker uses branch-aware builds. `config/deployment-contract.json` declares Issues disabled for both preview and production, and query-string redaction enabled in both. `scripts/build-cloudflare.mjs` writes these settings into each flattened Wrangler upload artifact, and `scripts/assert-deployment.mjs` checks the selected values and Wrangler's schema. The source `wrangler.json` keeps Workers Logs enabled; the pinned Vite plugin does not understand the newer Issues or redaction fields, so the deployment artifact receives them after Vite builds. Preview branches upload versions; only `main` deploys a version to production traffic. Enabling Issues in production requires a separate, explicit release decision.

## Scope and review

[Workers Issues](https://developers.cloudflare.com/workers/observability/issues/) groups uncaught exceptions, failed invocations, Worker `5xx` responses, and error-level logs. It starts with new production traffic after the enabled version is deployed; it does not process historical failures. It does not monitor routine `4xx` form validation and rate-limit responses.

Before any future Issues activation, review the account plan, data handling, generated preview and production Wrangler artifacts, and both dry runs in `npm run check`. After an authorized release, verify the exact production build and Worker version, then inspect the Issues page for expected volume. To stop detecting new failures, return the production setting to `false` and release that change through staging and main.

## Cost

Issues is [free during its open beta](https://developers.cloudflare.com/workers/observability/issues/#pricing). From **1 December 2026**, it joins the [account-wide Observability ingestion and storage pool](https://developers.cloudflare.com/observability/pricing/). The published Paid allowance is 50 GB ingested and 10 GB-month stored per billing cycle; excess is $0.25/GB ingested and $0.10/GB-month stored. The Free allowance is 0.5 GB ingested per day with seven-day retention, after which ingestion stops until reset. Review account usage and plan before production promotion; this Worker already has Workers Logs enabled, and those logs share the pool.

## Request data

An [issue occurrence](https://developers.cloudflare.com/workers/observability/issues/investigate/) can include an error and stack trace, related logs and traces, Worker version, and invocation and request details. Occurrence details remain available for seven days; the issue remains listed after its occurrences expire. Both preview and production upload artifacts explicitly set `observability.redact_query_string=true`, which Cloudflare documents as removing query strings from request URLs in logs and traces. Cloudflare's version readback does not expose the uploaded redaction setting, so verify the active script settings API after release before claiming it is live. Cloudflare does not document that this setting redacts every Issues field. Request paths, error messages, custom logs, and other diagnostic context can still contain sensitive data. Do not add secrets, access tokens, form contents, or personal data to error messages, logs, or trace attributes. Restrict dashboard access to staff who need this diagnostic context.
