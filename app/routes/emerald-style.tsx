import type { Route } from "./+types/emerald-style";
import { ArrowRight, Scan } from "lucide-react";
import { BrandLockup } from "~/components/BrandLockup";
import { emeraldVariationEnabled } from "~/lib/deployment";
import "~/components/marketing/home/emerald.css";
export function loader({ context }: Route.LoaderArgs) {
  if (
    !emeraldVariationEnabled ||
    context.cloudflare.env.SL_FEATURE_EMERALD_VARIATION !== "true"
  )
    throw new Response("Not found", { status: 404 });
  return null;
}
export const meta = () => [
  { title: "SemanticLab — Emerald design study" },
  { name: "robots", content: "noindex, nofollow" },
];
export default function EmeraldStyle() {
  return (
    <div className="emerald">
      <div className="em-shell em-section">
        <a className="em-brand" href="/">
          <BrandLockup />
        </a>
        <p className="em-eyebrow" style={{ marginTop: 50 }}>
          Emerald · Design study
        </p>
        <h1
          style={{
            fontSize: "clamp(42px,6vw,80px)",
            letterSpacing: "-.06em",
            lineHeight: 1.05,
          }}
        >
          Clarity in thought.
          <br />
          <em style={{ color: "var(--em-green)" }}>Intelligence in motion.</em>
        </h1>
        <p>
          Inter, editorial spacing, glass sculpture and deliberate contrast.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            margin: "35px 0",
          }}
        >
          {["#f6f6f4", "#12211c", "#626b66", "#2c7221", "#08271d"].map(
            (color) => (
              <div key={color}>
                <div
                  style={{
                    height: 85,
                    width: 130,
                    background: color,
                    border: "1px solid #b6beb7",
                  }}
                />
                <p>{color}</p>
              </div>
            ),
          )}
        </div>
        <div className="em-actions">
          <a href="/services#strategy-engagement" className="em-button">
            Find your AI opportunity <ArrowRight size={18} />
          </a>
          <a href="/work" className="em-text-link">
            See our work <ArrowRight size={18} />
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 24,
            marginTop: 45,
          }}
        >
          <div className="em-service">
            <Scan size={38} strokeWidth={1.1} />
            <h3>AI & business transformation</h3>
            <p>
              Find opportunities where intelligence can make a meaningful
              difference.
            </p>
            <a className="em-text-link" href="/services">
              Learn more <ArrowRight size={17} />
            </a>
          </div>
          <img
            src="/images/emerald/desktop/poster.webp"
            alt="Emerald glass sphere and architectural glass planes"
            style={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
