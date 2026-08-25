import { useEffect, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Crosshair,
  Database,
  Maximize2,
  Network,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";
import { Link } from "react-router";
import { BrandLockup } from "~/components/BrandLockup";
import { AnimatedDataLandscape } from "~/components/marketing/shared/AnimatedDataLandscape";
import {
  brandColours,
  brandMeaning,
  brandValues,
  motionTokens,
  spacingScale,
  typeScale,
} from "~/design-system/foundations";

const meaningIcons = [Database, Crosshair, BrainCircuit, Network] as const;
const valueIcons = [Target, UserRound, Network, Maximize2, ShieldCheck] as const;

const sectionLinks = [
  ["principles", "Principles"],
  ["identity", "Identity"],
  ["colour", "Colour"],
  ["typography", "Typography"],
  ["layout", "Layout"],
  ["interface", "Interface"],
  ["motion", "Motion"],
  ["language", "Language"],
] as const;

type SectionAnchorProps = {
  children: ReactNode;
  className?: string;
  sectionId: string;
};

function moveToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const headerOffset = window.innerWidth <= 760 ? 72 : 78;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top });
  root.style.scrollBehavior = previousScrollBehavior;
  window.history.replaceState(null, "", `#${sectionId}`);
}

function SectionAnchor({ children, className, sectionId }: SectionAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    moveToSection(sectionId);
  };

  return (
    <a className={className} href={`#${sectionId}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export function DesignSystemPage() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => moveToSection(sectionId));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="ds-page">
      <header className="ds-header">
        <Link to="/" className="ds-header__logo" aria-label="Back to SemanticLab">
          <BrandLockup />
        </Link>
        <p>Design system / v1.0</p>
        <SectionAnchor sectionId="principles">
          Explore foundations <ArrowDownRight aria-hidden="true" />
        </SectionAnchor>
      </header>

      <div className="ds-layout">
        <aside className="ds-rail" aria-label="Design system sections">
          <p>SemanticLab</p>
          <nav>
            {sectionLinks.map(([href, label], index) => (
              <SectionAnchor key={href} sectionId={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </SectionAnchor>
            ))}
          </nav>
        </aside>

        <main className="ds-main">
          <section className="ds-hero" aria-labelledby="ds-title">
            <p className="ds-eyebrow">Designing intelligent businesses</p>
            <h1 id="ds-title">
              One system.<br />
              <em>Clear intent.</em>
            </h1>
            <div className="ds-hero__footer">
              <p>
                A coded foundation for turning SemanticLab&apos;s identity into
                consistent products, communications and experiences.
              </p>
              <div>
                <span>Strategy.</span>
                <span>Experience.</span>
                <span>Intelligence.</span>
                <span>Engineering.</span>
              </div>
            </div>
          </section>

          <section id="principles" className="ds-section">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">01 / Brand logic</p>
              <h2>From raw potential to meaningful impact.</h2>
              <p>
                The system should make complexity feel focused. Every visual
                choice needs to move information toward clarity, intelligence
                and action.
              </p>
            </div>

            <div className="ds-meaning-grid">
              {brandMeaning.map((item, index) => {
                const Icon = meaningIcons[index];
                return (
                  <article key={item.name}>
                    <span>{item.index}</span>
                    <Icon aria-hidden="true" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="ds-values">
              <p className="ds-values__label">The system should always feel</p>
              <div className="ds-values__grid">
                {brandValues.map((value, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <article key={value.name}>
                      <Icon aria-hidden="true" />
                      <h3>{value.name}</h3>
                      <p>{value.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="identity" className="ds-section ds-section--light">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">02 / Identity</p>
              <h2>Recognisable at every scale.</h2>
              <p>
                The data field signals potential becoming impact. The website
                lockup uses the symbol and wordmark only; the tagline remains
                supporting language, not part of the navigation logo.
              </p>
            </div>

            <div className="ds-logo-grid">
              <article className="ds-logo-card ds-logo-card--primary">
                <p>Primary lockup / dark</p>
                <BrandLockup />
              </article>
              <article className="ds-logo-card ds-logo-card--mark">
                <p>Symbol / compact use</p>
                <BrandLockup variant="mark" label="SemanticLab symbol" />
              </article>
            </div>

            <div className="ds-rules-grid">
              <article>
                <span>01</span>
                <h3>Keep clear space</h3>
                <p>Use at least one outer-dot width around every lockup.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Protect the signal</h3>
                <p>Never recolour, stretch, outline, glow or rebuild the mark.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Use approved artwork</h3>
                <p>Do not synthesise light-mode or monogram variants in code.</p>
              </article>
            </div>
          </section>

          <section id="colour" className="ds-section">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">03 / Colour</p>
              <h2>Five colours. One clear hierarchy.</h2>
              <p>
                Lime carries intent and action. White carries meaning. Sage and
                graphite organise supporting information. Obsidian holds the
                system together.
              </p>
            </div>

            <div className="ds-colour-grid">
              {brandColours.map((colour) => (
                <article key={colour.token}>
                  <div
                    className="ds-colour-swatch"
                    style={{ "--ds-swatch": colour.hex } as CSSProperties}
                  />
                  <div>
                    <h3>{colour.name}</h3>
                    <p>{colour.role}</p>
                    <code>{colour.hex}</code>
                    <code>{colour.token}</code>
                  </div>
                </article>
              ))}
            </div>

            <div className="ds-colour-rule">
              <p>Recommended balance</p>
              <div aria-label="Colour usage proportions">
                <span>70% Obsidian</span>
                <span>20% White</span>
                <span>8% Sage / graphite</span>
                <span>2% Lime</span>
              </div>
            </div>
          </section>

          <section id="typography" className="ds-section ds-section--light">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">04 / Typography</p>
              <h2>Inter, engineered for clarity.</h2>
              <p>
                One family carries every layer of the experience. Scale, weight
                and spacing create hierarchy; lime italics provide deliberate
                emphasis without introducing a second voice.
              </p>
            </div>

            <div className="ds-type-hero">
              <span>Aa</span>
              <div>
                <p>Inter Variable</p>
                <h3>Modern. Clean. Highly readable.</h3>
                <p>Weights 350–650 / Roman and italic</p>
              </div>
            </div>

            <div className="ds-type-scale">
              {typeScale.map((item, index) => (
                <article key={item.token}>
                  <div>
                    <p>{item.name}</p>
                    <code>{item.token}</code>
                  </div>
                  <p className={`ds-type-sample ds-type-sample--${index + 1}`}>
                    {item.sample}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="layout" className="ds-section">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">05 / Layout</p>
              <h2>Structure creates confidence.</h2>
              <p>
                Use generous negative space, restrained one-pixel dividers and
                a consistent 4px spacing base. Avoid floating card collections
                when a connected grid communicates the relationship better.
              </p>
            </div>

            <div className="ds-layout-principles">
              <article>
                <p>Canvas</p>
                <h3>1440px maximum</h3>
                <span>32px desktop gutter / 18px mobile</span>
              </article>
              <article>
                <p>Section rhythm</p>
                <h3>80–128px</h3>
                <span>Content-led, never ornamental</span>
              </article>
              <article>
                <p>Shape</p>
                <h3>0–24px radius</h3>
                <span>Pills reserved for primary actions</span>
              </article>
            </div>

            <div className="ds-spacing-scale">
              {spacingScale.map((space) => (
                <div key={space.token}>
                  <code>{space.name}</code>
                  <span
                    className="ds-spacing-scale__bar"
                    style={{ width: `${space.pixels}px` }}
                  />
                  <p>{space.pixels}px</p>
                  <code>{space.token}</code>
                </div>
              ))}
            </div>
          </section>

          <section id="interface" className="ds-section ds-section--light">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">06 / Interface</p>
              <h2>Actions should feel decisive.</h2>
              <p>
                Primary actions use lime sparingly. Secondary actions hold their
                shape with a fine border. Text links remain directional and
                explicit.
              </p>
            </div>

            <div className="ds-component-grid">
              <article>
                <p>Primary action</p>
                <SectionAnchor className="strategy-button" sectionId="language">
                  Request a Strategy Engagement
                  <ArrowUpRight aria-hidden="true" />
                </SectionAnchor>
              </article>
              <article>
                <p>Secondary action</p>
                <SectionAnchor className="ds-button ds-button--secondary" sectionId="motion">
                  Explore the system <ArrowDownRight aria-hidden="true" />
                </SectionAnchor>
              </article>
              <article>
                <p>Directional link</p>
                <SectionAnchor
                  className="semantic-text-link semantic-text-link--dark"
                  sectionId="colour"
                >
                  Review colour rules <ArrowUpRight aria-hidden="true" />
                </SectionAnchor>
              </article>
              <article>
                <label htmlFor="ds-example-field">Field label</label>
                <input
                  id="ds-example-field"
                  name="example"
                  type="text"
                  placeholder="Describe the opportunity"
                />
                <small>Supporting context is quiet, never hidden.</small>
              </article>
            </div>

            <div className="ds-surface-grid">
              <article className="ds-surface ds-surface--dark">
                <p>Dark canvas</p>
                <h3>Default expression</h3>
                <span>Obsidian / white / signal lime</span>
              </article>
              <article className="ds-surface ds-surface--light">
                <p>Light canvas</p>
                <h3>Editorial contrast</h3>
                <span>Warm white / obsidian / restrained lime</span>
              </article>
            </div>
          </section>

          <section id="motion" className="ds-section">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">07 / Motion</p>
              <h2>Movement should reveal intelligence.</h2>
              <p>
                Motion connects data, focus and impact. It should feel calm,
                continuous and purposeful—never like decoration competing with
                the message.
              </p>
            </div>

            <div className="ds-motion-demo" aria-label="Animated data landscape example">
              <AnimatedDataLandscape
                className="ds-motion-demo__landscape"
                alt="Abstract connected data landscape demonstrating SemanticLab ambient motion"
              />
              <div>
                <p>Ambient intelligence</p>
                <h3>Surface motion with a slower undertow.</h3>
                <span>Reduced-motion preferences always take priority.</span>
              </div>
            </div>

            <div className="ds-motion-grid">
              {motionTokens.map((motion) => (
                <article key={motion.name}>
                  <p>{motion.name}</p>
                  <h3>{motion.value}</h3>
                  <code>{motion.token}</code>
                  <span>{motion.use}</span>
                </article>
              ))}
            </div>
          </section>

          <section id="language" className="ds-section ds-section--language">
            <div className="ds-section__intro">
              <p className="ds-eyebrow">08 / Language</p>
              <h2>Clear, specific and evidence-led.</h2>
              <p>
                Speak as a product innovation partner. Lead with the business
                opportunity and the connected work needed to carry it forward.
              </p>
            </div>

            <div className="ds-language-grid">
              <article>
                <p>Use</p>
                <h3>Product innovation partner</h3>
                <h3>Strategy Engagement</h3>
                <h3>Built Product</h3>
                <h3>Evidence-backed claim</h3>
              </article>
              <article>
                <p>Avoid</p>
                <h3>AI product studio</h3>
                <h3>Product trial</h3>
                <h3>Generic sales call</h3>
                <h3>Unsupported metrics</h3>
              </article>
            </div>

            <footer className="ds-endnote">
              <BrandLockup />
              <p>From idea to impact.</p>
              <Link to="/">Return to SemanticLab <ArrowUpRight aria-hidden="true" /></Link>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
