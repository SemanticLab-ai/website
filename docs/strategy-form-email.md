# Strategy Engagement form email

The `/services#strategy-engagement` form submits to the `/services` React Router action. On production activation, the Worker validates the fields, checks the request origin, honeypot, rate limit and Turnstile token, then sends one transactional email to `hello@semanticlab.ai`. The visitor's address is used only as `Reply-To`. Email Routing already forwards `hello@semanticlab.ai` to the agentic inbox.

## Cloudflare resources

- Email Sending is enabled for `semanticlab.ai`. The `LEAD_EMAIL` binding restricts the destination to `hello@semanticlab.ai` and the sender to `forms@semanticlab.ai`.
- Turnstile widget `0x4AAAAAAFQJq0KBSROttM6B` is restricted to `semanticlab.ai`. Its secret is stored under `SEMANTICLAB_STRATEGY_TURNSTILE_SECRET` in Cloudflare Secrets Store `725326749fcd41b5b4d752f88c911231`, scoped to Workers. The secret value must never be committed.
- `LEAD_RATE_LIMIT` allows three requests per client IP per minute.

## Environment contract

`config/deployment-contract.json` controls the build. Preview enables the form for validation but disables email, strips the email, rate limit and secret bindings, disables analytics, and disallows indexing. Production retains the mail app fallback until the staging preview is accepted. The server checks the runtime flags before any send, so the UI flag alone cannot enable delivery.

For release after staging acceptance, change production `features.directForm` and `leadEmailEnabled` to `true`, update the source defaults and `scripts/assert-deployment.mjs` to match, regenerate `worker-configuration.d.ts`, and run `npm run check`. Promote only through a `staging` to `main` pull request. Confirm the main Cloudflare build deployed the exact commit and retained the `LEAD_EMAIL`, `LEAD_RATE_LIMIT` and `TURNSTILE_SECRET` bindings. Submit one real form request and verify its arrival in the agentic inbox, then check invalid Turnstile and repeat submissions are rejected.

To roll back, set the production flags back to `false` in the contract and source, run the checks, and promote through the same staging-to-main path. This restores the mail app fallback and blocks the Worker send action.
