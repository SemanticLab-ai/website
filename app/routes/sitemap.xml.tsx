export function loader() {
  const urls = [
    { loc: "https://semanticlab.ai/", changefreq: "weekly", priority: "1.0" },
    { loc: "https://semanticlab.ai/founders", changefreq: "monthly", priority: "0.6" },
    { loc: "https://semanticlab.ai/services", changefreq: "monthly", priority: "0.6" },
    { loc: "https://semanticlab.ai/products/image-enhancer", changefreq: "weekly", priority: "0.8" },
    { loc: "https://semanticlab.ai/products/image-enhancer/pricing", changefreq: "monthly", priority: "0.8" },
    { loc: "https://semanticlab.ai/products/visual-search", changefreq: "weekly", priority: "0.8" },
    { loc: "https://semanticlab.ai/products/visual-search/pricing", changefreq: "monthly", priority: "0.8" },
    { loc: "https://semanticlab.ai/products/smartapply", changefreq: "weekly", priority: "0.8" },
    { loc: "https://semanticlab.ai/products/syncd", changefreq: "weekly", priority: "0.8" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>2026-03-20</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
