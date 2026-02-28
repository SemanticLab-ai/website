import { ArrowUpRight, Mail, MessageCircle, Sparkles, Calendar } from "lucide-react";
import { SectionWrapper } from "~/components/shared/SectionWrapper";
import { SectionHeader } from "~/components/shared/SectionHeader";
import { CTAButton } from "~/components/shared/CTAButton";
import { GlassCard } from "~/components/shared/GlassCard";

export function StudioCTA() {
  return (
    <SectionWrapper bg="mesh-hero">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-lime/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal/8 rounded-full blur-3xl" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="watermark-text whitespace-nowrap opacity-50">BUILD</span>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          badge="Let's Build"
          badgeIcon={Sparkles}
          title={
            <>
              Ready to Build Something{" "}
              <span className="gradient-text-lime">Meaningful?</span>
            </>
          }
          subtitle="Let's turn your idea into a product that works, and lasts."
        />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CTAButton
            variant="primary"
            size="large"
            href="mailto:hello@semanticlab.ai?subject=I%20have%20an%20idea"
          >
            Start Your Idea
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </CTAButton>

          <CTAButton
            variant="secondary"
            size="large"
            href="mailto:hello@semanticlab.ai?subject=Discovery%20Call%20Request"
          >
            <Calendar className="w-5 h-5" />
            Book a Discovery Call
          </CTAButton>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {["No upfront commitment", "Founder-to-founder conversations", "Melbourne, Australia"].map((text, i) => (
            <div key={text} className="flex items-center gap-2">
              {i > 0 && <div className="hidden sm:block w-1 h-1 bg-white/20 rounded-full -ml-3 mr-1" />}
              <svg className="w-5 h-5 text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-white/70">{text}</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <GlassCard className="inline-flex flex-col items-center gap-4 p-6">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-teal" />
            <span className="text-white/60">Questions?</span>
          </div>
          <a
            href="mailto:hello@semanticlab.ai"
            className="flex items-center gap-2 text-lg font-semibold text-white hover:text-lime transition-colors group"
          >
            <Mail className="w-5 h-5" />
            hello@semanticlab.ai
          </a>
          <p className="text-sm text-white/40">
            We'll reply within 4 hours. (Really.)
          </p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
