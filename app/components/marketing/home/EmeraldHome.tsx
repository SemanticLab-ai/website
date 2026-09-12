import {
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Scan,
  Orbit,
  Workflow,
  Shapes,
  Box,
} from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router";
import { BrandLockup } from "~/components/BrandLockup";
import { recentProductWork } from "~/data/work";
import "./emerald.css";
import { EmeraldMotion } from "./EmeraldMotion";

const links = [
  ["What we solve", "#solutions"],
  ["How we work", "#framework"],
  ["Work", "#work"],
  ["About", "#founders"],
];
const services = [
  {
    icon: Scan,
    title: "AI & business transformation",
    copy: "Find the opportunities where intelligence can make a meaningful difference.",
  },
  {
    icon: Orbit,
    title: "New digital products",
    copy: "Turn ideas and emerging opportunities into useful, scalable products.",
  },
  {
    icon: Workflow,
    title: "Intelligent workflows",
    copy: "Connect the moving parts. Create simpler, smarter ways of working.",
  },
  {
    icon: Shapes,
    title: "Product & experience design",
    copy: "Design experiences that people understand, trust and want to use.",
  },
  {
    icon: Box,
    title: "Data & intelligent systems",
    copy: "Bring your data together and turn it into decisions you can act on.",
  },
];
const stages = [
  ["Discover", "Understand the business and the people it serves."],
  ["Envision", "Find where intelligence creates meaningful advantage."],
  ["Design", "Shape experiences, products and operating models."],
  ["Engineer", "Build robust systems around real workflows."],
  ["Launch", "Put it into the real world. Enable your team."],
  ["Evolve", "Measure, learn and improve over time."],
];
const strategy = "/services#strategy-engagement";
export function EmeraldHome() {
  const [open, setOpen] = useState(false);
  return (
    <div className="emerald">
      <header className="em-nav">
        <a href="#" aria-label="SemanticLab home" className="em-brand">
          <BrandLockup />
        </a>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <Link className="em-button em-nav-cta" to={strategy}>
          Find your AI opportunity <ArrowRight size={18} />
        </Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="em-menu" aria-label="Open navigation">
            <Menu />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="em-menu-overlay" />
            <Dialog.Content className="em-menu-panel">
              <Dialog.Title>Explore SemanticLab</Dialog.Title>
              <Dialog.Close aria-label="Close navigation">
                <X />
              </Dialog.Close>
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                  <ArrowRight />
                </a>
              ))}
              <Link to={strategy} onClick={() => setOpen(false)}>
                Find your AI opportunity <ArrowRight />
              </Link>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </header>
      <div className="em-story">
        <section className="em-hero" aria-labelledby="em-heading">
          <EmeraldMotion />
          <div className="em-hero-inner em-shell">
            <p className="em-eyebrow">Product innovation partner</p>
            <h1 id="em-heading">
              We find where
              <br />
              AI can create an
              <br />
              advantage —<br />
              <em>then build it.</em>
            </h1>
            <p className="em-intro">
              We connect strategy, product design and engineering to turn
              complex business problems into intelligent products, workflows and
              systems.
            </p>
            <div className="em-actions">
              <Link to={strategy} className="em-button">
                Find your AI opportunity <ArrowRight size={18} />
              </Link>
              <a href="#work" className="em-text-link">
                See our work <ArrowRight size={18} />
              </a>
            </div>
            <div className="em-disciplines">
              <p className="em-eyebrow">
                From the first question to what comes next
              </p>
              <span>Strategy</span>
              <span>Design</span>
              <span>Intelligence</span>
              <span>Engineering</span>
            </div>
          </div>
          <aside className="em-side">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <p>
              Strategy
              <br />
              meets execution.
              <br />
              Ideas become
              <br />
              intelligent systems.
            </p>
          </aside>
          <a href="#solutions" className="em-scroll">
            Skip to solutions <ArrowDown size={15} />
          </a>
        </section>
      </div>
      <section id="solutions" className="em-section em-shell">
        <div className="em-section-heading">
          <div>
            <p className="em-eyebrow">What we solve</p>
            <h2>
              Different challenges.
              <br />A clear path forward.
            </h2>
            <p>
              We help you identify, design and build intelligent
              <br className="em-desktop" /> solutions where they create real
              value.
            </p>
          </div>
          <Link to="/services" className="em-text-link">
            Explore all solutions <ArrowRight size={18} />
          </Link>
        </div>
        <div className="em-services">
          {services.map(({ icon: Icon, title, copy }) => (
            <Link className="em-service" to="/services" key={title}>
              <Icon size={38} strokeWidth={1.1} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <span>
                Learn more <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section id="framework" className="em-framework">
        <div className="em-shell">
          <div className="em-section-heading">
            <div>
              <p className="em-eyebrow">How we work</p>
              <h2>
                A connected approach
                <br />
                for real-world impact.
              </h2>
            </div>
            <div>
              <p>
                From understanding the opportunity to building
                <br className="em-desktop" /> what comes next. One team, end to
                end.
              </p>
              <Link to="/services" className="em-text-link">
                Explore our approach <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <ol className="em-stages">
            {stages.map(([name, description], i) => (
              <li key={name}>
                <div>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <ArrowRight size={20} />
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="work" className="em-work em-section">
        <div className="em-shell">
          <div className="em-section-heading">
            <div>
              <p className="em-eyebrow">Selected work</p>
              <h2>
                Ideas into intelligent
                <br />
                products and systems.
              </h2>
            </div>
            <Link to="/work" className="em-text-link">
              Explore more work <ArrowRight size={18} />
            </Link>
          </div>
          <div className="em-work-grid">
            {recentProductWork.map((work, i) => (
              <Link className="em-work-card" to={work.href} key={work.name}>
                <div className="em-work-image">
                  <img
                    src={`/images/work/${["partshq", "sponsoredfeeds", "instadash"][i]}/product-hero.jpg`}
                    alt={`${work.name} product interface`}
                    loading="lazy"
                    width="720"
                    height="440"
                  />
                </div>
                <div className="em-work-copy">
                  <p className="em-eyebrow">
                    {
                      [
                        "Commerce systems",
                        "Content orchestration",
                        "AI infrastructure",
                      ][i]
                    }
                  </p>
                  <h3>{work.name}</h3>
                  <p>{work.summary}</p>
                  <span className="em-text-link">
                    View case study <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="founders" className="em-founders em-section em-shell">
        <div>
          <p className="em-eyebrow">The founders</p>
          <h2>
            Two disciplines.
            <br />
            One way of thinking.
          </h2>
          <p>
            Product and design thinking meets deep technical expertise. We work
            together to help businesses navigate complexity and build with
            purpose.
          </p>
          <Link to="/founders" className="em-text-link">
            Our story <ArrowRight size={18} />
          </Link>
        </div>
        <div className="em-people">
          {[
            ["naila", "Naila Rahman", "Product · Design · Experience"],
            ["raihan", "Raihan Razi", "Engineering · Architecture · AI"],
          ].map(([image, name, role]) => (
            <Link to="/founders" key={name}>
              <img
                src={`/images/founders/${image}.jpg`}
                alt={name}
                loading="lazy"
                width="400"
                height="480"
              />
              <h3>{name}</h3>
              <p>{role}</p>
            </Link>
          ))}
        </div>
        <p className="em-founder-note">
          Clear thinking.
          <br />
          Thoughtful design.
          <br />
          Systems that work
          <br />
          in the real world.
        </p>
      </section>
      <section className="em-opportunity">
        <div className="em-shell">
          <div>
            <p className="em-eyebrow">Your next opportunity</p>
            <h2>
              Where could AI create
              <br />
              value in your business?
            </h2>
            <p>
              Start with the right question.
              <br />
              Together, we’ll find a useful way forward.
            </p>
            <Link to={strategy} className="em-button em-button-light">
              Find your AI opportunity <ArrowRight size={18} />
            </Link>
          </div>
          <ul>
            {[
              "Grow revenue",
              "Reduce operational workload",
              "Improve customer experience",
              "Automate repetitive work",
              "Build a new product",
              "Understand your data",
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="em-footer em-shell">
        <div>
          <a href="#" className="em-brand">
            <BrandLockup />
          </a>
          <p>Product innovation partner</p>
          <small>© {new Date().getFullYear()} SemanticLab</small>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div>
          <p>Let’s find what comes next.</p>
          <Link to={strategy} className="em-text-link">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
        <p className="em-footer-signoff">
          From
          <br />
          complexity
          <br />
          to what’s
          <br />
          next.
        </p>
      </footer>
    </div>
  );
}
