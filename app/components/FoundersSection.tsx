import { Button } from "./ui/button";
import { Users, ArrowRight, Code, Palette as PaletteIcon } from "lucide-react";
import { Link } from "react-router";
import { colorMap, type BrandColor } from "~/lib/utils";

export function FoundersSection() {
  const founders = [
    {
      name: "Raihan Razi",
      role: "Technical Founder",
      initial: "R",
      color: "vector-rose",
      gradient: "from-vector-rose to-pink-400",
      photo: "/images/founders/raihan.jpg",
      credentials: [
        "12 years in tech infrastructure",
        "$12M+ platform delivery",
        "Stripe & API specialist",
      ],
      icon: Code,
    },
    {
      name: "Naila Rahman",
      role: "Design Founder",
      initial: "N",
      color: "neural-teal",
      gradient: "from-neural-teal to-cyan-400",
      photo: "/images/founders/naila.jpg",
      credentials: [
        "10 years UX/UI design",
        "Shopify Polaris expert",
        "Mobile-first specialist",
      ],
      icon: PaletteIcon,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pearl to-blush" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-vector-rose/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-neural-teal/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
              <Users className="w-4 h-4 text-vector-rose" />
              <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">The Team</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
              Built by a Duo
              <br />
              <span className="gradient-text-rose italic">Tired of "Good Enough"</span>
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-6">
              Most AI companies are built by engineers chasing demos,
              or by designers who can't scale the tech.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8">
              We combined <span className="text-charcoal font-semibold">12 years in tech infrastructure</span> with
              a <span className="text-charcoal font-semibold">decade designing high-conversion experiences</span> to build AI products people actually use.
            </p>

            {/* Quote */}
            <div className="relative bg-white rounded-2xl p-8 border border-slate/10 shadow-xl mb-8">
              <div className="absolute -left-3 top-8 w-1 h-16 bg-gradient-to-b from-vector-rose to-neural-teal rounded-full" />
              <p className="text-charcoal font-display text-xl italic leading-relaxed mb-4">
                "We got tired of building products for other people's roadmaps.
                So we started building AI products that solve problems we actually care about."
              </p>
              <p className="text-sm text-slate font-medium">
                — Raihan & Naila
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-lg border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 group"
              asChild
            >
              <Link to="/founders" className="flex items-center gap-3">
                Meet the Builders
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right: Founder Cards */}
          <div className="order-1 lg:order-2 relative">
            {/* Founders Photo */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate/10 to-slate/5 rounded-3xl overflow-hidden shadow-2xl">
                {/* Combined founders image */}
                <img
                  src="/images/founders/founders.jpg"
                  alt="Raihan and Naila — SemanticLab founders"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>

              {/* Floating Credential Cards */}
              {founders.map((founder, i) => (
                <div
                  key={founder.name}
                  className={`absolute ${
                    i === 0
                      ? "-bottom-8 -right-8 md:-bottom-6 md:-right-6"
                      : "-top-8 -left-8 md:-top-6 md:-left-6"
                  } bg-white rounded-2xl p-6 shadow-xl border border-slate/10 max-w-xs hidden md:block ${
                    i === 0 ? "animate-float" : "animate-float-delayed"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-12 h-12 rounded-xl object-cover object-top shadow-lg"
                    />
                    <div>
                      <p className="font-bold text-charcoal">{founder.name}</p>
                      <p className="text-sm text-slate">{founder.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {founder.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${colorMap[founder.color as BrandColor].bg}`} />
                        <p className="text-sm text-slate">{cred}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
