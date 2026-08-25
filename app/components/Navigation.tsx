import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { BrandLogo } from "~/components/BrandLogo";

const navigation = [
  { label: "Vision", href: "/#vision" },
  { label: "Framework", href: "/#framework" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
];

const strategyHref = "/services#strategy-engagement";

function isNavigationActive(href: string, pathname: string) {
  if (href === "/work") return pathname.startsWith("/work");
  if (href === "/#about") return pathname === "/founders";
  return href === pathname;
}

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
          {navigation.map((item) => {
            const isActive = isNavigationActive(item.href, pathname);

            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
          {navigation.map((item, index) => {
            const isActive = isNavigationActive(item.href, pathname);

            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          className="strategy-button"
          href={strategyHref}
          onClick={() => setMobileMenuOpen(false)}
        >
          Request a Strategy Engagement
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
