# Cloudflare security controls: semanticlab.ai

Snapshot verified in the Cloudflare dashboard on 8 October 2026 (Australia/Melbourne). These are dashboard-managed zone rules, not part of the Worker build. The live dashboard is authoritative; this inventory makes their scope and rule IDs reviewable in the repository.

## Active custom rules

Rules run in the order shown. All four use **Block**.

| Order | Rule and ID | Expression | Scope |
| --- | --- | --- | --- |
| 1 | Block Bangladesh, Pakistan, India on public website (`5e7d04bcefe94db1a0ed7b5df66bd3ed`) | `(http.host in {"semanticlab.ai" "www.semanticlab.ai"} and ip.src.country in {"BD" "PK" "IN"})` | Public apex and `www` only |
| 2 | Block common secret and WordPress probes (`1acae8b9ab7b4fc681605001af652320`) | `(http.host in {"semanticlab.ai" "www.semanticlab.ai"} and (http.request.uri.path contains "/.env" or http.request.uri.path contains "/.git" or http.request.uri.path contains "/wp-" or http.request.uri.path eq "/xmlrpc.php" or http.request.uri.path contains "/secrets/" or http.request.uri.path eq "/setup.py" or http.request.uri.path eq "/settings/production.py" or http.request.uri.path eq "/together_config.json"))` | Public apex and `www` only |
| 3 | Block nonstandard HTTP ports (`d229b4118b964eb49ad3249780f5ab47`) | `not cf.edge.server_port in {80 443}` | Entire zone |
| 4 | Block confirmed secret scanner (`ce2b1cc7f80440f699b6d801e3b111ad`) | `ip.src eq 45.148.10.14` | Entire zone |

The country and probe rules do not apply to other subdomains. The port and single-IP rules are zone-wide. The Cloudflare Access policy that protects Worker Preview URLs is a separate control; do not use these WAF rules as a replacement for it.

At this snapshot, the zone used 4 of 5 custom-rule slots and 0 of 1 rate-limiting slots. Cloudflare's baseline managed and HTTP DDoS protections were active; Browser Integrity Check was on and Bot Fight Mode was off. These counts and settings may change.

## Verify or roll back

1. In **Security → Security rules**, find each ID and compare its expression, order, action, and active state with the table. Review **Security → Analytics** for matches and false positives before broadening a rule.
2. Check the public homepage, a known probe such as `/.git/config`, and a normal path containing `.well-known`. The probe should be blocked; legitimate paths must remain reachable. A country test requires a controlled request originating in that country, not a client-supplied IP header.
3. For an unintended block, disable only the affected custom rule in the dashboard, verify recovery, then fix its expression and re-enable it. Record the previous expression and rule ID. Keep baseline DDoS protection and preview Access in place.

Changing this document does not alter Cloudflare configuration or deploy the Worker. The repository's normal `staging` preview and `main` production promotion rules still apply to runtime changes.
