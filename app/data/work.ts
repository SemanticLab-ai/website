export type WorkEvidence = {
  name: string;
  summary: string;
  capabilities: readonly string[];
  href: string;
  motif: "commerce" | "broadcast" | "data" | "payments" | "api" | "identity";
  provenance?: string;
};

export const recentProductWork: readonly WorkEvidence[] = [
  {
    name: "PartsHQ",
    summary: "AI-guided catalog operations for Shopify and WooCommerce.",
    capabilities: [
      "Commerce systems",
      "Intelligent onboarding",
      "Workflow orchestration",
    ],
    href: "https://partshq.io/",
    motif: "commerce",
  },
  {
    name: "SponsoredFeeds",
    summary: "Automated sponsorship activation for grassroots sport.",
    capabilities: [
      "Sports data",
      "Content orchestration",
      "Sponsor reporting",
    ],
    href: "https://www.sponsoredfeeds.com/",
    motif: "broadcast",
  },
  {
    name: "Instadash",
    summary: "A persistent data surface for AI agents.",
    capabilities: [
      "MCP infrastructure",
      "Human review",
      "Queryable grids",
    ],
    href: "https://instadash.io/",
    motif: "data",
  },
];

export const previousFounderWork: readonly WorkEvidence[] = [
  {
    name: "Payment systems ecosystem",
    summary: "Multi-market payment architecture and automated settlement.",
    capabilities: [
      "Platform strategy",
      "Payments architecture",
      "Enterprise delivery",
    ],
    href: "https://raihanrazi.com/projects/payment-systems",
    motif: "payments",
    provenance: "Led by Raihan Razi in a previous role",
  },
  {
    name: "API modernisation",
    summary: "A phased migration from legacy middleware to modern services.",
    capabilities: [
      "Transformation strategy",
      "Security remediation",
      "Operational resilience",
    ],
    href: "https://raihanrazi.com/projects/api-modernization",
    motif: "api",
    provenance: "Led by Raihan Razi in a previous role",
  },
  {
    name: "Identity platform",
    summary: "A shared authentication foundation across a multi-product suite.",
    capabilities: [
      "Product architecture",
      "Identity systems",
      "Zero-disruption transition",
    ],
    href: "https://raihanrazi.com/projects/identity-platform",
    motif: "identity",
    provenance: "Led by Raihan Razi in a previous role",
  },
];
