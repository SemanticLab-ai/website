export type ProductStatus = "live" | "coming-soon" | "beta";

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  icon: string;
  color: "vector-rose" | "neural-teal" | "signal-amber" | "smart-indigo";
  href: string;
  appHref?: string;
  category?: "e-commerce" | "career";
  externalHref?: string;
}
