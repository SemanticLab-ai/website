import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const founders = [
  {
    id: "naila",
    name: "Naila Rahman",
    role: "Product strategy & experience design",
    summary:
      "Architecture-trained and research-led product thinking that makes complex systems clear.",
    portrait: "/images/founders/naila.jpg",
  },
  {
    id: "raihan",
    name: "Raihan Razi",
    role: "Engineering & AI delivery",
    summary:
      "Product engineering, cloud systems and AI delivery designed for dependable real-world use.",
    portrait: "/images/founders/raihan-portrait-v4.png",
  },
] as const;

export function FoundersSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (
      !section ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    section.classList.add("founders-section--will-reveal");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.classList.add("founders-section--in-view");
        observer.disconnect();
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="founders-section"
      aria-labelledby="founders-home-title"
      ref={sectionRef}
    >
      <div className="semantic-shell">
        <div className="semantic-section-heading">
          <div>
            <h2 id="founders-home-title">We bridge the gap most partners can’t.</h2>
          </div>
          <p>
            One perspective shapes how people experience complexity. The other
            shapes how technology can carry it. Together, we turn intent into
            something a business can use.
          </p>
        </div>

        <div className="founder-grid">
          {founders.map((founder, index) => (
            <article className="founder-card" key={founder.id}>
              <Link
                className="founder-card__link"
                to={`/founders#${founder.id}`}
                aria-label={`Meet ${founder.name}`}
              >
                <span className="founder-card__portrait">
                  <img
                    src={founder.portrait}
                    alt=""
                    width={800}
                    height={1000}
                    decoding="async"
                    loading="lazy"
                  />
                  <span className="founder-card__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </span>
                <div className="founder-card__copy">
                  <span className="founder-card__role">{founder.role}</span>
                  <h3>{founder.name}</h3>
                  <span className="founder-card__summary">{founder.summary}</span>
                  <span className="founder-card__cta">
                    Meet {founder.name.split(" ")[0]}
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
