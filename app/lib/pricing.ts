export interface PricingTier {
  name: string;
  price: number | string;
  period?: string;
  description: string;
  specs: string;
  features: string[];
  popular: boolean;
  cta: string;
  ctaHref: string;
}

export const imageEnhancerPricing: PricingTier[] = [
  {
    name: "Free",
    price: 0,
    description: "Try it out",
    specs: "3 images • Basic enhancement",
    features: [
      "Background removal",
      "Auto-centering",
      "Basic enhancement",
      "PNG/JPG export",
      "Standard quality",
    ],
    popular: false,
    cta: "Start Free",
    ctaHref: "/app/image-enhancer",
  },
  {
    name: "Starter",
    price: 29,
    period: "/month",
    description: "For small stores",
    specs: "100 images/month • All features",
    features: [
      "Everything in Free",
      "HD quality export",
      "WebP support",
      "Custom backgrounds",
      "Processing history",
    ],
    popular: false,
    cta: "Start Free Trial",
    ctaHref: "/app/image-enhancer",
  },
  {
    name: "Pro",
    price: 79,
    period: "/month",
    description: "Most popular",
    specs: "500 images/month • Batch processing",
    features: [
      "Everything in Starter",
      "Batch processing",
      "API access",
      "Priority processing",
      "Advanced enhancement",
    ],
    popular: true,
    cta: "Start Free Trial",
    ctaHref: "/app/image-enhancer",
  },
  {
    name: "Enterprise",
    price: "$200–400",
    period: "/month",
    description: "High-volume & Pinnacle",
    specs: "Unlimited images • Custom pipeline",
    features: [
      "Everything in Pro",
      "Unlimited images",
      "Pinnacle pipeline",
      "Dedicated support",
      "Custom integrations",
    ],
    popular: false,
    cta: "Contact Sales",
    ctaHref: "mailto:hello@semanticlab.ai?subject=Image Enhancer Enterprise",
  },
];

export const visualSearchPricing: PricingTier[] = [
  {
    name: "Starter",
    price: 99,
    period: "/month",
    description: "For growing stores",
    specs: "1-1,000 products • 500 searches/day",
    features: [
      "Visual search",
      "AI text refine",
      "Theme matched widget",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
    cta: "Get Notified",
    ctaHref: "#",
  },
  {
    name: "Growth",
    price: 199,
    period: "/month",
    description: "Most popular",
    specs: "1k-5k products • 2k searches/day",
    features: [
      "Everything in Starter",
      "Advanced filters",
      "Conversion tracking",
      "Priority email support",
      "Custom widget placement",
    ],
    popular: true,
    cta: "Get Notified",
    ctaHref: "#",
  },
  {
    name: "Scale",
    price: 399,
    period: "/month",
    description: "For high-volume stores",
    specs: "5k+ products • Unlimited searches",
    features: [
      "Everything in Growth",
      "Dedicated onboarding",
      "Slack support channel",
      "SLA guarantee",
      "Custom integrations",
    ],
    popular: false,
    cta: "Get Notified",
    ctaHref: "#",
  },
];
