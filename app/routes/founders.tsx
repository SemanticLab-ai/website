import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/founders";
import { EngagementSection } from "~/components/marketing/home/EngagementSection";
import { networkMotionEnabled } from "~/lib/deployment";

export function meta() {
  const title = "Founders | SemanticLab";
  const description =
    "Meet Naila Rahman and Raihan Razi, the founder-led partnership connecting product strategy, experience design, intelligence and engineering at SemanticLab.";
  const ogImage = "/images/og-default.jpg";
  const url = "https://semanticlab.ai/founders";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {
    networkMotion:
      networkMotionEnabled &&
      context.cloudflare.env.SL_FEATURE_NETWORK_MOTION === "true",
  };
}

export default function Founders({ loaderData }: Route.ComponentProps) {
  return (
    <div className="semantic-founders">
      <section className="founders-hero" aria-labelledby="founders-hero-title">
        <div className="semantic-shell founders-hero__inner">
          <div className="founders-hero__copy">
            <h1 id="founders-hero-title">
              One designs for <em>people.</em> One engineers for <em>scale.</em>
            </h1>
            <p>
              SemanticLab brings product strategy, experience design,
              intelligence and engineering into one founder-led partnership.
            </p>
            <Link className="semantic-text-link" to="/work">
              See how we work <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <figure className="founders-hero__portrait">
            <span aria-hidden="true" className="founders-hero__marker founders-hero__marker--top" />
            <img
              src="/images/founders/founders-hero-portrait.jpg"
              alt="SemanticLab founders Raihan Razi and Naila Rahman"
              width={1350}
              height={1800}
              fetchPriority="high"
            />
            <figcaption>Founder-led from Melbourne, Australia</figcaption>
            <span aria-hidden="true" className="founders-hero__marker founders-hero__marker--bottom" />
          </figure>
        </div>
      </section>

      <section className="founders-story" aria-labelledby="founders-story-title">
        <div className="semantic-shell founders-story__inner">
          <div className="founders-story__heading">
            <h2 id="founders-story-title">
              We love building products that genuinely help people.
            </h2>
          </div>

          <div className="founders-story__body">
            <p>
              Long before there was a company, there were countless late nights
              building ideas, testing products, and solving problems simply
              because we couldn’t ignore them. Every experiment taught us
              something. Some failed, some succeeded, but all of them reinforced
              one thing. Eventually, we realised we were already doing this
              professionally every day. So we combined our experience in design,
              engineering, cloud and AI to create SemanticLab, a place where
              curiosity becomes products, and good ideas become real solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="founders-life" aria-labelledby="founders-life-title">
        <div className="semantic-shell founders-life__inner">
          <div className="founders-life__heading">
            <h2 id="founders-life-title">
              We’re partners in business <em>and in life.</em>
            </h2>
          </div>

          <figure className="founders-life__portrait">
            <img
              src="/images/founders/founders-life.jpg"
              alt="Naila Rahman and Raihan Razi together while travelling"
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="founders-life__body">
            <p>
              When we’re not designing products, you’ll usually find us
              travelling, discovering great food, chasing our curious little
              wonder around, or talking about ideas that somehow turn into our
              next project.
            </p>
            <p>
              The best inspiration rarely comes from sitting behind a desk. It
              comes from new places, new people, and new experiences.
            </p>
            <p className="founders-life__closing">
              That’s why we build technology that feels a little more human.
            </p>
          </div>
        </div>
      </section>

      <EngagementSection networkMotion={loaderData.networkMotion} />
    </div>
  );
}
