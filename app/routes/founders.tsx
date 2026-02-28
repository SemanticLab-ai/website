import { Button } from "~/components/ui/button";
import { Users, Code, Palette, Mail, Linkedin, ArrowRight, CheckCircle, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Founders - SemanticLab" },
    {
      name: "description",
      content: "Meet Raihan and Naila, the founders building AI products that actually work, from e-commerce tools to career tech."
    },
  ];
}

export default function Founders() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Decorative glows */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
              <Users className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-lime uppercase tracking-wider">Meet the Team</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              We Left Corporate to Build{" "}
              <span className="gradient-text-lime">Something We'd Be Proud Of</span>
            </h1>

            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Not a VC-funded startup chasing growth at all costs. A founder-led duo obsessed with building AI products that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Cards */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Raihan Card */}
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src="/images/founders/raihan.jpg"
                  alt="Raihan Razi"
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg border border-lime/10"
                />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-3">
                    <Code className="w-6 h-6 text-lime" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Raihan Razi</h3>
                  <p className="text-lime font-semibold">Technical Founder</p>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed mb-6">
                12 years building systems for millions of users. Led $12M platform transformations. Migrated 800+ APIs. But I was tired of building for others.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Director of Technology @ PayPal competitor",
                  "Led 40+ engineers across 5 product teams",
                  "Stripe & API integration specialist",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-lime" />
                    <span className="text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://linkedin.com/in/raihanrazi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lime font-semibold hover:gap-3 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Naila Card */}
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src="/images/founders/naila.jpg"
                  alt="Naila Rahman"
                  className="w-24 h-24 rounded-2xl object-cover object-top shadow-lg border border-teal/10"
                />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-3">
                    <Palette className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Naila Rahman</h3>
                  <p className="text-teal font-semibold">Design Founder</p>
                </div>
              </div>

              <p className="text-white/50 leading-relaxed mb-6">
                10 years designing spaces, first as an architect, then as a UX designer. GameDay. Podly. Shopify Polaris. Making complex systems feel effortless.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Lead UX Designer @ GameDay sports platform",
                  "Designed mobile apps for 500k+ users",
                  "Shopify Polaris design system specialist",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal" />
                    <span className="text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/nailarahmanrazi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 backdrop-blur rounded-full border border-lime/20 mb-8">
              <Sparkles className="w-4 h-4 text-lime" />
              <span className="text-sm font-semibold text-lime uppercase tracking-wider">Our Story</span>
            </div>

            <div className="relative glass-card rounded-3xl p-8 md:p-12">
              <div className="absolute -left-[2px] top-12 w-1 h-32 bg-gradient-to-b from-lime to-teal rounded-full" />

              <div className="space-y-6 text-lg text-white/50 leading-relaxed">
                <p>
                  After years in corporate tech, building payment platforms, designing mobile apps, leading engineering teams, Raihan was made redundant in late 2024. Instead of jumping back into the corporate cycle, we saw an opportunity.
                </p>
                <p>
                  We realised that <span className="text-white font-semibold">AI was powerful enough to solve real problems, but most AI products were built for demos, not for daily use.</span>
                </p>
                <p>
                  So we started SemanticLab at our dinner table in Melbourne, an AI product studio focused on building tools that people actually reach for every day.
                </p>
                <p className="font-display text-xl text-white italic">
                  "We don't build AI for the sake of AI. We find real problems and build the simplest solution that works."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SemanticLab */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-dark-surface" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why We Built <span className="gradient-text-lime">SemanticLab</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  text: "Most AI tools are impressive demos that fall apart in real workflows. We build products you'll actually use every day, not just once to see what AI can do.",
                },
                {
                  num: "2",
                  text: "Big companies build generic platforms. We build focused tools that do one thing exceptionally well, whether that's product photos or resume tailoring.",
                },
                {
                  num: "3",
                  text: "Support was always a queue. Never the builder. We wanted users to talk directly to us, the people who actually write the code and design the interfaces.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 glass-card rounded-2xl p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-lime">{item.num}</span>
                  </div>
                  <p className="text-white/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xl font-display text-white mt-8">
              We wanted to fix all three. <span className="gradient-text-lime">So we did.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What Founder-Led Means */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
              What <span className="text-lime">"Founder-Led"</span> Actually Means
            </h2>

            <div className="grid gap-4 md:grid-cols-2 mb-12">
              {[
                "You email hello@semanticlab.ai, we reply (not a bot)",
                "Feature requests go directly to the builders",
                "Bug fixes ship in days, not quarters",
                "Your success is our only KPI",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 glass-card rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-lime flex-shrink-0" />
                  <span className="text-white/80 text-left">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-lg mb-8">
              We're small by choice. Focused by design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-lime hover:bg-lime-dark text-dark-bg font-semibold shadow-2xl shadow-lime/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/#platforms" className="flex items-center gap-3">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg rounded-full glass-card text-white hover:border-lime/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:hello@semanticlab.ai" className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer with heart */}
      <section className="py-12 bg-dark-bg text-center">
        <div className="flex items-center justify-center gap-2 text-white/40">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-lime fill-lime" />
          <span>in Melbourne, Australia</span>
        </div>
      </section>
    </div>
  );
}
