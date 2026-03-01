import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Menu, X, Sparkles, ChevronDown, ImagePlus, Search, ShoppingCart, Bot, Briefcase, ArrowUpRight } from "lucide-react";
import { products } from "~/lib/products";
import { colorMap } from "~/lib/utils";

const productIcons: Record<string, React.ElementType> = {
  ImagePlus,
  Search,
  ShoppingCart,
  Bot,
  Briefcase,
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center text-dark-bg font-display font-bold text-lg shadow-lg shadow-lime/20 group-hover:shadow-lime/40 transition-shadow duration-300">
                S
              </div>
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">
              SemanticLab
            </span>
          </Link>

          {/* Desktop Navigation — pill-shaped border */}
          <div className="hidden md:flex items-center gap-8 px-6 py-2.5 border border-white/10 rounded-full bg-white/[0.03] backdrop-blur-sm">
            {/* Products Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-dark-surface/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-lime/10 p-3 animate-fade-in-down">
                  {products.map((product) => {
                    const Icon = productIcons[product.icon] || Sparkles;
                    return (
                      <Link
                        key={product.slug}
                        to={product.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        onClick={() => setProductsOpen(false)}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-lime" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">{product.name}</span>
                            {product.status === "live" ? (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-lime/10 rounded-full">
                                <span className="w-1.5 h-1.5 bg-lime rounded-full animate-pulse" />
                                <span className="text-[10px] font-semibold text-lime">Live</span>
                              </span>
                            ) : product.status === "beta" ? (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-teal/10 rounded-full">
                                <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
                                <span className="text-[10px] font-semibold text-teal">Beta</span>
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] font-semibold text-white/50">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-white/40 mt-0.5">{product.tagline}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/services"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              to="/founders"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              Founders
            </Link>
          </div>

          {/* CTA Button — lime green pill */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="rounded-full px-6 py-5 bg-lime hover:bg-lime-dark text-dark-bg font-semibold transition-all duration-300 shadow-lg shadow-lime/20 hover:shadow-lime/40 hover:scale-105 group"
              asChild
            >
              <a href="mailto:hello@semanticlab.ai?subject=I%20have%20an%20idea" className="flex items-center gap-2">
                Start Your Idea
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-lime/10 shadow-2xl py-8 px-6 flex flex-col gap-4 animate-fade-in-down">
            <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Products</p>
            {products.map((product) => {
              const Icon = productIcons[product.icon] || Sparkles;
              return (
                <Link
                  key={product.slug}
                  to={product.href}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-lime" />
                  </div>
                  <span className="text-sm font-medium text-white">{product.name}</span>
                  {product.status === "live" ? (
                    <span className="w-2 h-2 bg-lime rounded-full" />
                  ) : product.status === "beta" ? (
                    <span className="text-[10px] text-teal bg-teal/10 px-2 py-0.5 rounded-full font-semibold">Beta</span>
                  ) : (
                    <span className="text-[10px] text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Soon</span>
                  )}
                </Link>
              );
            })}

            <div className="border-t border-white/10 pt-4 mt-2 space-y-3">
              <Link
                to="/services"
                className="block text-sm font-medium text-white hover:text-lime transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/founders"
                className="block text-sm font-medium text-white hover:text-lime transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Founders
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button
                size="lg"
                className="w-full rounded-full bg-lime text-dark-bg font-semibold shadow-lg shadow-lime/20"
                asChild
              >
                <a
                  href="mailto:hello@semanticlab.ai?subject=I%20have%20an%20idea"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Your Idea
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
