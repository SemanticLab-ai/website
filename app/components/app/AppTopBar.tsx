import { Link, useLocation } from "react-router";
import { ImagePlus, Layers, Clock, Settings, Menu, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Enhance", href: "/app/image-enhancer", icon: ImagePlus },
  { name: "Batch", href: "/app/batch", icon: Layers },
  { name: "History", href: "/app/history", icon: Clock },
  { name: "Settings", href: "/app/settings", icon: Settings },
];

export function AppTopBar({ remaining }: { remaining: number }) {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const current = navItems.find((item) => location.pathname === item.href);
  const breadcrumb = current?.name || "App";

  return (
    <header className="h-14 bg-white border-b border-slate/10 flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      {/* Left: Mobile nav + Breadcrumb */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-charcoal hover:bg-pearl rounded-lg transition-colors"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-slate hover:text-charcoal transition-colors">
            SemanticLab
          </Link>
          <span className="text-slate/50">/</span>
          <span className="text-charcoal font-medium">{breadcrumb}</span>
        </div>
      </div>

      {/* Right: Usage counter + User */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-pearl rounded-full">
          <div className={`w-2 h-2 rounded-full ${remaining > 0 ? "bg-emerald-500" : "bg-vector-rose"}`} />
          <span className="text-xs font-medium text-charcoal">
            {remaining} free {remaining === 1 ? "image" : "images"} left
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-vector-rose to-vector-rose-dark flex items-center justify-center text-white">
          <User className="w-4 h-4" />
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileNavOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-b border-slate/10 shadow-lg z-50 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === item.href ? "bg-pearl text-charcoal" : "text-slate hover:text-charcoal"
              }`}
              onClick={() => setMobileNavOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
