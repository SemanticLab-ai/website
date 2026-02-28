import { ArrowRight, ImagePlus } from "lucide-react";
import { HeroSection } from "~/components/shared/HeroSection";

export function IEHero() {
  return (
    <HeroSection
      badgeIcon={ImagePlus}
      badgeText="AI Image Enhancement"
      title={
        <>
          Turn Ugly Product Photos Into{" "}
          <span className="gradient-text-lime">Professional Images</span>{" "}
          in Seconds
        </>
      }
      subtitle={
        <>
          AI-powered background removal, auto-centering, and image enhancement.
          No Photoshop. No design skills. Just <span className="text-white font-semibold">better product photos</span>.
        </>
      }
      primaryCTA={{
        label: "Start Enhancing Free",
        href: "/app/image-enhancer",
        icon: ArrowRight,
      }}
      secondaryCTA={{
        label: "See Pricing",
        href: "/products/image-enhancer/pricing",
      }}
      showFounders
      founderTagline="Founder-led. No sign-up for first 3 images."
    />
  );
}
