import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { BrandLogo } from "~/components/BrandLogo";

const navigation = [
  { label: "Vision", href: "/#vision" },
  { label: "Framework", href: "/#framework" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
];

const strategyHref =
  "mailto:hello@semanticlab.ai?subject=Strategy%20Engagement%20Request";

export function Navigation() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <BrandLogo />

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.label} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="strategy-button strategy-button--compact" href={strategyHref}>
          Request a Strategy Engagement
          <ArrowUpRight aria-hidden="true" />
        </a>

        <button
          type="button"
          className="site-menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${mobileMenuOpen ? " is-open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.label} to={item.href}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="strategy-button" href={strategyHref}>
          Request a Strategy Engagement
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
