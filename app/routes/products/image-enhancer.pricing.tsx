import { Button } from "~/components/ui/button";
import { DollarSign, Check, Sparkles, Mail, Building, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { imageEnhancerPricing } from "~/lib/pricing";
import { PricingCard } from "~/components/shared/PricingCard";
import { FAQAccordion } from "~/components/shared/FAQAccordion";

export function meta() {
  return [
    { title: "Pricing — Image Enhancer | SemanticLab" },
    {
      name: "description",
      content: "Simple, transparent pricing for Image Enhancer. Start free with 3 images. Plans from $29/month.",
    },
  ];
}

const faqs = [
  {
    question: "How many free images do I get?",
    answer: "You get 3 free images with no sign-up required. After that, you can create a free account or upgrade to a paid plan.",
  },
  {
    question: "What image formats are supported?",
    answer: "We support JPG, PNG, and WebP uploads up to 10MB. You can download in any of these formats.",
  },
  {
    question: "How does batch processing work?",
    answer: "Available on Pro and above. Upload multiple images at once and apply the same settings to all of them. Great for processing your entire catalog.",
  },
  {
    question: "What is the Pinnacle pipeline?",
    answer: "Pinnacle is our premium tier where every image goes through human QA. An image specialist reviews each photo against your brand guidelines before delivery.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all plans are month-to-month with no long-term commitment. Cancel anytime from your account settings.",
  },
];

export default function ImageEnhancerPricing() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
              <DollarSign className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-lime uppercase tracking-wider">Image Enhancer Pricing</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Start Free,{" "}
              <span className="gradient-text-lime">Scale As You Grow</span>
            </h1>

            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              No credit card required. Process your first 3 images free. Upgrade when you need more.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {imageEnhancerPricing.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-lime" />
              No credit card for free tier
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-lime" />
              14-day money-back guarantee
            </span>
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-lime" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">All Plans Include</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Background removal",
                  "Auto-centering",
                  "Image enhancement",
                  "Multiple export formats",
                  "Processing history",
                  "Direct founder support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-lime flex-shrink-0" />
                    <span className="text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-teal/5 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 backdrop-blur rounded-full border border-teal/20 mb-6">
                  <Building className="w-4 h-4 text-teal" />
                  <span className="text-sm font-semibold text-teal uppercase tracking-wider">Enterprise</span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-white/50 mb-8 max-w-xl mx-auto">
                  For high-volume processing, custom pipelines, or Pinnacle quality at scale, let's talk.
                </p>

                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-lg shadow-lime/20"
                  asChild
                >
                  <a href="mailto:hello@semanticlab.ai?subject=Image Enhancer Enterprise" className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    Contact Sales
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-6">
                <HelpCircle className="w-4 h-4 text-lime" />
                <span className="text-sm font-semibold text-lime uppercase tracking-wider">FAQ</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Frequently Asked <span className="gradient-text-lime">Questions</span>
              </h2>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to <span className="gradient-text-lime">Enhance Your Photos?</span>
              </h2>
              <p className="text-lg text-white/50 mb-8">
                Start free, no sign-up required for your first 3 images.
              </p>

              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-2xl shadow-lime/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/app/image-enhancer" className="flex items-center gap-3">
                  Try Image Enhancer Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <p className="text-sm text-white/40 mt-6">
                Questions?{" "}
                <a href="mailto:hello@semanticlab.ai" className="text-lime hover:underline font-semibold">
                  hello@semanticlab.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
