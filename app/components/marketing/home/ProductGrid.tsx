import { Layers } from "lucide-react";
import { products } from "~/lib/products";
import { ProductCard } from "~/components/shared/ProductCard";

export function ProductGrid() {
  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pearl via-white to-pearl" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-vector-rose/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neural-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-slate/10 shadow-lg mb-6">
            <Layers className="w-4 h-4 text-vector-rose" />
            <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">Our Products</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            One Platform,{" "}
            <span className="gradient-text italic">Many Tools</span>
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
            Every tool we build is designed to solve a real problem, faster, smarter, and without the bloat.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
