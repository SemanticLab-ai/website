import { Button } from "~/components/ui/button";
import { Users, Code, Palette, Mail, Linkedin, ArrowRight, CheckCircle, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Founders - SemanticLab" },
    {
      name: "description",
      content: "Meet Raihan and Naila, the founders building AI products that actually work — from e-commerce tools to career tech."
    },
  ];
}

export default function Founders() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 mesh-gradient-rose" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-vector-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-neural-teal/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-vector-rose/20 shadow-lg mb-8">
              <Users className="w-4 h-4 text-vector-rose" />
              <span className="text-sm font-semibold text-charcoal">Meet the Team</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-display font-bold text-charcoal leading-tight mb-6">
              We Left Corporate to Build
              <br />
              <span className="gradient-text-rose italic">Something We'd Be Proud Of</span>
            </h1>

            <p className="text-xl text-slate max-w-2xl mx-auto">
              Not a VC-funded startup chasing growth at all costs. A founder-led duo obsessed with building AI products that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Cards */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Raihan Card */}
            <div className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-vector-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src="/images/founders/raihan.jpg"
                    alt="Raihan Razi"
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vector-rose to-vector-rose-dark flex items-center justify-center mb-3">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-charcoal">Raihan Razi</h3>
                    <p className="text-vector-rose font-semibold">Technical Founder</p>
                  </div>
                </div>

                <p className="text-slate leading-relaxed mb-6">
                  12 years building systems for millions of users. Led $12M platform transformations. Migrated 800+ APIs. But I was tired of building for others.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Director of Technology @ PayPal competitor",
                    "Led 40+ engineers across 5 product teams",
                    "Stripe & API integration specialist",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-vector-rose" />
                      <span className="text-sm text-slate">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://linkedin.com/in/raihanrazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-vector-rose font-semibold hover:gap-3 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Naila Card */}
            <div className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neural-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src="/images/founders/naila.jpg"
                    alt="Naila Rahman"
                    className="w-24 h-24 rounded-2xl object-cover object-top shadow-lg"
                  />
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neural-teal to-neural-teal-dark flex items-center justify-center mb-3">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-charcoal">Naila Rahman</h3>
                    <p className="text-neural-teal font-semibold">Design Founder</p>
                  </div>
                </div>

                <p className="text-slate leading-relaxed mb-6">
                  10 years designing spaces—first as an architect, then as a UX designer. GameDay. Podly. Shopify Polaris. Making complex systems feel effortless.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Lead UX Designer @ GameDay sports platform",
                    "Designed mobile apps for 500k+ users",
                    "Shopify Polaris design system specialist",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-neural-teal" />
                      <span className="text-sm text-slate">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.linkedin.com/in/nailarahmanrazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neural-teal font-semibold hover:gap-3 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-gradient-to-b from-pearl to-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-signal-amber/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-signal-amber" />
              <span className="text-sm font-semibold text-charcoal">Our Story</span>
            </div>

            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate/10">
              <div className="absolute -left-2 top-12 w-1 h-32 bg-gradient-to-b from-vector-rose via-neural-teal to-signal-amber rounded-full" />

              <div className="space-y-6 text-lg text-slate leading-relaxed">
                <p>
                  After years in corporate tech — building payment platforms, designing mobile apps, leading engineering teams — Raihan was made redundant in late 2024. Instead of jumping back into the corporate cycle, we saw an opportunity.
                </p>
                <p>
                  We realized that <span className="text-charcoal font-semibold">AI was powerful enough to solve real problems, but most AI products were built for demos, not for daily use.</span>
                </p>
                <p>
                  So we started SemanticLab at our dinner table in Melbourne — an AI product studio focused on building tools that people actually reach for every day.
                </p>
                <p className="font-display text-xl text-charcoal italic">
                  "We don't build AI for the sake of AI. We find real problems and build the simplest solution that works."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SemanticLab */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
              Why We Built <span className="gradient-text-teal italic">SemanticLab</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  color: "vector-rose",
                  text: "Most AI tools are impressive demos that fall apart in real workflows. We build products you'll actually use every day — not just once to see what AI can do.",
                },
                {
                  num: "2",
                  color: "neural-teal",
                  text: "Big companies build generic platforms. We build focused tools that do one thing exceptionally well — whether that's product photos or resume tailoring.",
                },
                {
                  num: "3",
                  color: "signal-amber",
                  text: "Support was always a queue. Never the builder. We wanted users to talk directly to us — the people who actually write the code and design the interfaces.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 p-6 bg-pearl rounded-2xl border border-slate/10">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center`}>
                    <span className={`text-xl font-bold text-${item.color}`}>{item.num}</span>
                  </div>
                  <p className="text-slate leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xl font-display text-charcoal mt-8">
              We wanted to fix all three. <span className="gradient-text-rose italic">So we did.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What Founder-Led Means */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal to-slate overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid-pattern" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
              What <span className="text-vector-rose">"Founder-Led"</span> Actually Means
            </h2>

            <div className="grid gap-4 md:grid-cols-2 mb-12">
              {[
                "You email hello@semanticlab.ai, we reply (not a bot)",
                "Feature requests go directly to the builders",
                "Bug fixes ship in days, not quarters",
                "Your success is our only KPI",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-neural-teal flex-shrink-0" />
                  <span className="text-white/90 text-left">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white/60 text-lg mb-8">
              We're small by choice. Focused by design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-vector-rose to-vector-rose-dark hover:from-vector-rose-dark hover:to-vector-rose text-white shadow-xl"
                asChild
              >
                <Link to="/#products" className="flex items-center gap-3">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg rounded-full border-2 border-white/20 text-white hover:bg-white/10"
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

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-vector-rose via-neural-teal to-signal-amber" />
      </section>

      {/* Footer spacer with heart */}
      <section className="py-12 bg-white text-center">
        <div className="flex items-center justify-center gap-2 text-slate">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-vector-rose fill-vector-rose" />
          <span>in Melbourne, Australia</span>
        </div>
      </section>
    </div>
  );
}
