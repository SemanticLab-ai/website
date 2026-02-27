import { Link } from "react-router";
import { ArrowRight, ImagePlus, Search, ShoppingCart, Bot, Briefcase, Sparkles } from "lucide-react";
import type { Product } from "~/types/products";
import { ComingSoonBadge } from "./ComingSoonBadge";
import { colorMap } from "~/lib/utils";

const icons: Record<string, React.ElementType> = { ImagePlus, Search, ShoppingCart, Bot, Briefcase };

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon] || Sparkles;
  const colors = colorMap[product.color];

  return (
    <Link
      to={product.href}
      className="group relative bg-white rounded-3xl p-8 border border-slate/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
    >
      {/* Gradient accent on hover */}
      <div className={`absolute inset-0 ${colors.bg5} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <div className={`relative w-14 h-14 rounded-2xl ${colors.bg10} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${colors.text}`} />
      </div>

      {/* Status */}
      <div className="mb-4">
        {product.status === "live" ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-emerald-700">Live</span>
          </span>
        ) : product.status === "beta" ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-smart-indigo/10 rounded-full">
            <span className="w-2 h-2 bg-smart-indigo rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-smart-indigo">Beta</span>
          </span>
        ) : (
          <ComingSoonBadge />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-charcoal mb-2">{product.name}</h3>
      <p className="text-slate text-sm leading-relaxed mb-6 flex-1">{product.description}</p>

      {/* Link */}
      <div className="flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-vector-rose transition-colors">
        {product.status === "live" ? "Try it now" : product.status === "beta" ? "Try the beta" : "Learn more"}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg10} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100px]`} />
    </Link>
  );
}
