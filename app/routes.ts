import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Marketing routes
  index("routes/home.tsx"),
  route("founders", "routes/founders.tsx"),

  // Product marketing pages
  route("products/image-enhancer", "routes/products/image-enhancer.tsx"),
  route("products/image-enhancer/pricing", "routes/products/image-enhancer.pricing.tsx"),
  route("products/smartapply", "routes/products/smartapply.tsx"),
  route("products/visual-search", "routes/products/visual-search.tsx"),
  route("products/visual-search/pricing", "routes/products/visual-search.pricing.tsx"),

  // App routes (with shared layout)
  layout("routes/app/_layout.tsx", [
    route("app/image-enhancer", "routes/app/image-enhancer.tsx"),
    route("app/batch", "routes/app/batch.tsx"),
    route("app/history", "routes/app/history.tsx"),
    route("app/settings", "routes/app/settings.tsx"),
  ]),

  // Redirects (old routes)
  route("how-it-works", "routes/redirects/how-it-works.tsx"),
  route("pricing", "routes/redirects/pricing.tsx"),
] satisfies RouteConfig;
