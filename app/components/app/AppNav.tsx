import { Link, useLocation } from "react-router";
import { ImagePlus, Layers, Clock, Settings, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "~/lib/utils";

const navItems = [
  { name: "Enhance", href: "/app/image-enhancer", icon: ImagePlus },
  { name: "Batch", href: "/app/batch", icon: Layers },
  { name: "History", href: "/app/history", icon: Clock },
  { name: "Settings", href: "/app/settings", icon: Settings },
];

export function AppNav() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-charcoal text-white flex-shrink-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-br from-vector-rose to-vector-rose-dark rounded-xl flex items-center justify-center text-white font-display font-bold text-sm shadow-lg">
            S
          </div>
          <span className="text-lg font-display font-bold text-white">
            SemanticLab
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
              {item.name === "Batch" && (
                <span className="ml-auto text-[10px] px-2 py-0.5 bg-vector-rose/20 text-vector-rose rounded-full font-semibold">
                  Pro
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Upgrade CTA */}
      <div className="p-4 border-t border-white/10">
        <div className="bg-gradient-to-br from-vector-rose/20 to-neural-teal/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-signal-amber" />
            <span className="text-sm font-semibold text-white">Upgrade</span>
          </div>
          <p className="text-xs text-white/60 mb-3">Get batch processing, API access, and more.</p>
          <Link
            to="/products/image-enhancer/pricing"
            className="inline-flex items-center gap-1 text-xs font-semibold text-vector-rose hover:text-white transition-colors"
          >
            See Plans <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
