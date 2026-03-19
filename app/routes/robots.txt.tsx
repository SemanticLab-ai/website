export function loader() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /app/

Sitemap: https://semanticlab.ai/sitemap.xml`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
