import { indexingAllowed } from "~/lib/deployment";

export function loader() {
  const robotsTxt = indexingAllowed
    ? `User-agent: *
Allow: /
Disallow: /app/
Disallow: /design-system
Disallow: /deck

Sitemap: https://semanticlab.ai/sitemap.xml`
    : `User-agent: *
Disallow: /`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
