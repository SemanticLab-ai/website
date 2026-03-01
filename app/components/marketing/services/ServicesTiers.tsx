import { Button } from "~/components/ui/button";
import {
  ArrowUpRight,
  Check,
  Compass,
  PenTool,
  Rocket,
  Star,
  TrendingUp,
} from "lucide-react";

interface ServiceTier {
  number: number;
  label: string;
  name: string;
  icon: React.ElementType;
  bestFor: string;
  includesPrevious?: string;
  features: string[];
  outcome: string;
  cta: string;
  ctaMailSubject: string;
  popular?: boolean;
}

const tiers: ServiceTier[] = [
  {
    number: 1,
    label: "Foundation",
    name: "Foundation",
    icon: Compass,
    bestFor: "For Individuals & Early-Stage Ideas",
    features: [
      "Initial discovery consultation",
      "Market & competitor landscape review",
      "Identify user pain points & friction gaps",
      "Idea validation workshop",
      "Define core value proposition",
      "Product direction roadmap",
      "Strategic recommendation document",
    ],
    outcome:
      "You leave with clarity, direction, and a structured product plan — ready to move into design.",
    cta: "Book Consultation",
    ctaMailSubject: "Foundation%20Consultation",
  },
  {
    number: 2,
    label: "Product Blueprint",
    name: "Product Blueprint",
    icon: PenTool,
    bestFor: "For Validated Ideas Ready for Design",
    includesPrevious: "Foundation",
    features: [
      "Define product architecture",
      "Map end-to-end user journey",
      "UX wireframes (core flows)",
      "Feature prioritisation (MVP)",
      "Interactive prototype",
      "Usability testing with target users",
      "Iteration based on testing insights",
    ],
    outcome:
      "A validated, user-tested product blueprint ready for engineering.",
    cta: "Start Blueprint",
    ctaMailSubject: "Product%20Blueprint%20Request",
  },
  {
    number: 3,
    label: "Build & Launch",
    name: "Build & Launch",
    icon: Rocket,
    bestFor: "For Teams Ready to Ship",
    includesPrevious: "Product Blueprint",
    popular: true,
    features: [
      "Engineering collaboration & sprints",
      "Scalable system architecture",
      "AI integration (where applicable)",
      "Front-end & back-end build",
      "QA & performance optimisation",
      "Pre-launch testing",
      "Launch strategy support",
    ],
    outcome:
      "A fully built, scalable, AI-ready digital product shipped to market.",
    cta: "Book Build Consultation",
    ctaMailSubject: "Build%20%26%20Launch%20Consultation",
  },
  {
    number: 4,
    label: "Growth Partnership",
    name: "Growth Partnership",
    icon: TrendingUp,
    bestFor: "Post-Launch Support & Optimisation",
    features: [
      "Post-launch analytics review",
      "User behaviour analysis",
      "Conversion optimisation",
      "Feature iteration roadmap",
      "Ongoing UX improvements",
      "Performance optimisation",
      "Monthly strategic review sessions",
    ],
    outcome:
      "A continuously improving product driven by real user feedback.",
    cta: "Discuss Partnership",
    ctaMailSubject: "Growth%20Partnership%20Inquiry",
  },
];

export function ServicesTiers() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative glows */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Find Your{" "}
            <span className="gradient-text-lime">Starting Point.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Each tier reflects a real stage in the product lifecycle. Start wherever you are — we'll guide you forward.
          </p>
        </div>

        {/* Tiers Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.number}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? "border-2 border-lime shadow-lg shadow-lime/10 scale-100 xl:scale-105 bg-dark-card"
                  : "glass-card"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-2 bg-lime text-dark-bg text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
                    <Star className="w-4 h-4 fill-dark-bg" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Name */}
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {tier.name}
              </h3>

              {/* Best For */}
              <p className="text-white/40 text-sm mb-6">{tier.bestFor}</p>

              {/* Includes Previous */}
              {tier.includesPrevious && (
                <p className="text-sm text-lime/60 font-medium mb-4 italic">
                  Everything in {tier.includesPrevious}, plus:
                </p>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.popular ? "bg-lime/10" : "bg-teal/10"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${tier.popular ? "text-lime" : "text-teal"}`} />
                    </div>
                    <span className="text-white/50 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <p className="text-xs text-white/30 leading-relaxed mb-6">
                <span className="font-bold text-white/40 uppercase tracking-wider">Outcome: </span>
                {tier.outcome}
              </p>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full h-12 rounded-full font-semibold transition-all duration-300 group ${
                  tier.popular
                    ? "bg-lime hover:bg-lime-dark text-dark-bg shadow-lg shadow-lime/20"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
                asChild
              >
                <a
                  href={`mailto:hello@semanticlab.ai?subject=${tier.ctaMailSubject}`}
                  className="flex items-center justify-center gap-2"
                >
                  {tier.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
