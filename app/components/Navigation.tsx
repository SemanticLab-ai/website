import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Menu, X, Sparkles, ChevronDown, ImagePlus, Search, ShoppingCart, Bot, Briefcase } from "lucide-react";
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
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-charcoal/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-vector-rose to-vector-rose-dark rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-vector-rose/30 group-hover:shadow-vector-rose/50 transition-shadow duration-300">
                S
              </div>
            </div>
            <span className="text-xl font-display font-bold text-charcoal tracking-tight">
              SemanticLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Products Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="relative text-sm font-medium text-slate hover:text-charcoal transition-colors duration-300 flex items-center gap-1 link-underline"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate/10 p-3 animate-fade-in-down">
                  {products.map((product) => {
                    const Icon = productIcons[product.icon] || Sparkles;
                    return (
                      <Link
                        key={product.slug}
                        to={product.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-pearl transition-colors group"
                        onClick={() => setProductsOpen(false)}
                      >
                        <div className={`w-10 h-10 rounded-xl ${colorMap[product.color].bg10} flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 ${colorMap[product.color].text}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-charcoal">{product.name}</span>
                            {product.status === "live" ? (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-semibold text-emerald-700">Live</span>
                              </span>
                            ) : product.status === "beta" ? (
                              <span className="flex items-center gap-1 px-2 py-0.5 bg-smart-indigo/10 rounded-full">
                                <span className="w-1.5 h-1.5 bg-smart-indigo rounded-full animate-pulse" />
                                <span className="text-[10px] font-semibold text-smart-indigo">Beta</span>
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 bg-slate/10 rounded-full text-[10px] font-semibold text-slate">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate mt-0.5">{product.tagline}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/products/image-enhancer/pricing"
              className="relative text-sm font-medium text-slate hover:text-charcoal transition-colors duration-300 link-underline"
            >
              Pricing
            </Link>
            <Link
              to="/founders"
              className="relative text-sm font-medium text-slate hover:text-charcoal transition-colors duration-300 link-underline"
            >
              Founders
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="rounded-full px-6 py-5 bg-charcoal hover:bg-vector-rose text-white font-medium transition-all duration-300 shadow-lg shadow-charcoal/20 hover:shadow-vector-rose/30 hover:scale-105 group"
              asChild
            >
              <Link to="/#products" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:animate-pulse-soft" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-charcoal hover:bg-vector-rose/10 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate/10 shadow-2xl py-8 px-6 flex flex-col gap-4 animate-fade-in-down">
            <p className="text-xs font-bold text-slate uppercase tracking-wider mb-2">Products</p>
            {products.map((product) => {
              const Icon = productIcons[product.icon] || Sparkles;
              return (
                <Link
                  key={product.slug}
                  to={product.href}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-pearl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg ${colorMap[product.color].bg10} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${colorMap[product.color].text}`} />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{product.name}</span>
                  {product.status === "live" ? (
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  ) : product.status === "beta" ? (
                    <span className="text-[10px] text-smart-indigo bg-smart-indigo/10 px-2 py-0.5 rounded-full font-semibold">Beta</span>
                  ) : (
                    <span className="text-[10px] text-slate bg-slate/10 px-2 py-0.5 rounded-full">Soon</span>
                  )}
                </Link>
              );
            })}

            <div className="border-t border-slate/10 pt-4 mt-2 space-y-3">
              <Link
                to="/products/image-enhancer/pricing"
                className="block text-sm font-medium text-charcoal hover:text-vector-rose transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/founders"
                className="block text-sm font-medium text-charcoal hover:text-vector-rose transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Founders
              </Link>
            </div>

            <div className="pt-4 border-t border-slate/10">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white shadow-lg shadow-vector-rose/30"
                asChild
              >
                <Link
                  to="/#products"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles className="w-5 h-5" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
