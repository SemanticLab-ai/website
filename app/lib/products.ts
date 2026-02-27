import type { Product } from "~/types/products";

export const products: Product[] = [
  {
    name: "Image Enhancer",
    slug: "image-enhancer",
    tagline: "Professional product photos in seconds",
    description:
      "AI-powered background removal, auto-centering, and image enhancement for e-commerce product photography.",
    status: "live",
    icon: "ImagePlus",
    color: "vector-rose",
    href: "/products/image-enhancer",
    appHref: "/app/image-enhancer",
    category: "e-commerce",
  },
  {
    name: "SmartApply",
    slug: "smartapply",
    tagline: "Tailored resumes in minutes",
    description:
      "AI-powered resume tailoring that parses your work artifacts and generates role-specific resumes and cover letters.",
    status: "beta",
    icon: "Briefcase",
    color: "smart-indigo",
    href: "/products/smartapply",
    externalHref: "https://smart-apply.contact-e0b.workers.dev/",
    category: "career",
  },
  {
    name: "Visual Search",
    slug: "visual-search",
    tagline: "Search by image, not keywords",
    description:
      "Fashion-specific AI visual search that understands what your shoppers mean, even when they can't find the words.",
    status: "coming-soon",
    icon: "Search",
    color: "neural-teal",
    href: "/products/visual-search",
    category: "e-commerce",
  },
  {
    name: "Commerce AI",
    slug: "commerce-ai",
    tagline: "Smart product recommendations",
    description:
      "AI-driven product recommendations that understand style preferences and shopping intent.",
    status: "coming-soon",
    icon: "ShoppingCart",
    color: "signal-amber",
    href: "#",
    category: "e-commerce",
  },
  {
    name: "Agent Bridge",
    slug: "agent-bridge",
    tagline: "Connect AI agents to your store",
    description:
      "Let AI shopping agents discover, recommend, and showcase your products to their users.",
    status: "coming-soon",
    icon: "Bot",
    color: "neural-teal",
    href: "#",
    category: "e-commerce",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
