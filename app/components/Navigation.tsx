import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { BrandLogo } from "~/components/BrandLogo";

const navigation = [
  { label: "Our Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Our story", href: "/founders" },
];

const strategyHref = "/services#strategy-engagement";

function isNavigationActive(href: string, pathname: string) {
  if (href === "/work") return pathname.startsWith("/work");
  return href === pathname;
}

export function Navigation() {
  const { pathname, hash } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 921px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleMenuKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      if (
        event.key !== "Tab" ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) return;
      const first = menuButtonRef.current;
      const links = document.querySelectorAll<HTMLAnchorElement>(
        "#mobile-navigation a",
      );
      if (!first) return;
      const focusable = [first, ...links];
      const current = Math.max(
        0,
        focusable.indexOf(document.activeElement as HTMLElement),
      );
      const next = event.shiftKey
        ? (current - 1 + focusable.length) % focusable.length
        : (current + 1) % focusable.length;
      event.preventDefault();
      focusable[next].focus();
    };
    document.addEventListener("keydown", handleMenuKeys);
    return () => document.removeEventListener("keydown", handleMenuKeys);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${mobileMenuOpen ? " is-menu-open" : ""}`}
      >
        <div className="site-header__inner">
          <BrandLogo onClick={() => setMobileMenuOpen(false)} />

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
            Find your AI opportunity
            <ArrowUpRight aria-hidden="true" />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="site-menu-button"
            onClick={(event) => {
              event.currentTarget.focus();
              setMobileMenuOpen((open) => !open);
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${mobileMenuOpen ? " is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => {
            const isActive = isNavigationActive(item.href, pathname);

            return (
              <Link
                key={item.label}
                to={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMobileMenu}
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
          onClick={closeMobileMenu}
        >
          Find your AI opportunity
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
