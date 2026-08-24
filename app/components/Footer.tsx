import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import { BrandLogo } from "~/components/BrandLogo";

const strategyHref = "/services#strategy-engagement";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <BrandLogo />
          <p>
            Strategy, experience, intelligence and engineering for businesses
            ready to create meaningful advantage.
          </p>
        </div>

        <div className="site-footer__links">
          <div>
            <p className="site-footer__label">Explore</p>
            <Link to="/#vision">Vision</Link>
            <Link to="/#framework">Framework</Link>
            <Link to="/services">Services</Link>
            <Link to="/#work">Work</Link>
          </div>
          <div>
            <p className="site-footer__label">Company</p>
            <Link to="/#about">About</Link>
            <Link to="/founders">Founders</Link>
            <a href="mailto:hello@semanticlab.ai">Contact</a>
          </div>
          <div>
            <p className="site-footer__label">Connect</p>
            <a
              href="https://linkedin.com/company/semanticlab"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="mailto:hello@semanticlab.ai">
              <Mail aria-hidden="true" /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} SemanticLab. Melbourne, Australia.</p>
        <a href={strategyHref}>
          Request a Strategy Engagement <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
