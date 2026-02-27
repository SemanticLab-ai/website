import { Sparkles, Upload, MessageSquare, Check } from "lucide-react";

export function ProductDemo() {
  const productImages = [
    { match: 98, img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300&h=400&fit=crop", tag: "BEST MATCH" },
    { match: 95, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop" },
    { match: 93, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=400&fit=crop" },
    { match: 91, img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=400&fit=crop" },
    { match: 88, img: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=300&h=400&fit=crop" },
    { match: 85, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop" },
  ];

  return (
    <section id="product" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-pearl via-white to-blush">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vector-rose/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neural-teal/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neural-teal/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-neural-teal" />
            <span className="text-sm font-semibold text-neural-teal uppercase tracking-wider">The Solution</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-h1 font-bold text-charcoal leading-tight mb-6">
            Turn{" "}
            <span className="gradient-text-teal italic">"I can't describe it"</span>
            <br />
            into "I found it."
          </h2>

          <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
            SemanticLab understands what your shoppers mean, even when they can't find the words.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Browser Window */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-charcoal/10 overflow-hidden border border-slate/10">
            {/* Browser Chrome */}
            <div className="bg-gradient-to-r from-pearl to-white px-6 py-4 flex items-center gap-4 border-b border-slate/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-vector-rose" />
                <div className="w-3 h-3 rounded-full bg-signal-amber" />
                <div className="w-3 h-3 rounded-full bg-neural-teal" />
              </div>
              <div className="flex-1 bg-white/80 px-4 py-2 rounded-xl text-sm text-slate font-mono border border-slate/10">
                https://yourstore.com/search
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid md:grid-cols-5 min-h-[500px]">
              {/* Left Sidebar - Search Interface */}
              <div className="md:col-span-2 bg-gradient-to-b from-pearl to-white p-6 md:p-8 border-r border-slate/10">
                {/* Upload Area */}
                <div className="mb-8">
                  <label className="text-xs font-bold text-charcoal uppercase tracking-wider mb-3 block flex items-center gap-2">
                    <Upload className="w-4 h-4 text-vector-rose" />
                    Visual Search
                  </label>
                  <div className="relative group">
                    <div className="aspect-square rounded-2xl border-2 border-dashed border-vector-rose/30 bg-gradient-to-br from-vector-rose/5 to-transparent flex flex-col items-center justify-center overflow-hidden cursor-pointer group-hover:border-vector-rose/60 group-hover:bg-vector-rose/10 transition-all duration-300">
                      {/* Show uploaded image */}
                      <img
                        src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop"
                        alt="Uploaded reference"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Success indicator */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-neural-teal rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* AI Refine */}
                <div>
                  <label className="text-xs font-bold text-charcoal uppercase tracking-wider mb-3 block flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-neural-teal" />
                    Refine with AI
                  </label>
                  <div className="relative">
                    <div className="bg-white rounded-xl border-2 border-neural-teal/30 p-4 shadow-lg shadow-neural-teal/10">
                      <p className="text-charcoal font-medium mb-2">"like this but longer sleeves"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neural-teal rounded-full animate-pulse" />
                        <p className="text-sm text-neural-teal font-medium">AI processing...</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick suggestions */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["in blue", "more casual", "shorter"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-slate/5 hover:bg-vector-rose/10 rounded-full text-xs font-medium text-slate hover:text-vector-rose cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Results Grid */}
              <div className="md:col-span-3 p-6 md:p-8 bg-white">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">12 matches found</h3>
                    <p className="text-sm text-slate">Sorted by relevance</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neural-teal/10 rounded-full">
                    <span className="w-2 h-2 bg-neural-teal rounded-full animate-pulse" />
                    <span className="text-sm font-mono font-bold text-neural-teal">420ms</span>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {productImages.map((product, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <img
                        src={product.img}
                        alt={`Fashion result ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Match score */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/95 backdrop-blur rounded-xl px-3 py-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-charcoal">{product.match}% match</span>
                            <span className="text-xs text-slate">$89</span>
                          </div>
                        </div>
                      </div>

                      {/* Best match tag */}
                      {product.tag && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-vector-rose text-white text-[10px] font-bold rounded-full shadow-lg">
                            {product.tag}
                          </span>
                        </div>
                      )}

                      {/* Quick action */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-vector-rose hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-charcoal text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-signal-amber" />
            <span className="text-sm font-medium">
              Powered by <span className="font-bold">FashionBLIP-2</span> • 227k training examples
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
