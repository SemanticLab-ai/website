import { Upload, Lock, Layers, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Batch Processing — SemanticLab" },
    { name: "description", content: "Process multiple product images at once" },
  ];
}

export default function BatchProcessing() {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-lg text-center">
        {/* Pro Badge */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-vector-rose/10 to-neural-teal/10 flex items-center justify-center mb-6">
          <Layers className="w-8 h-8 text-vector-rose" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-vector-rose/10 rounded-full mb-6">
          <Lock className="w-4 h-4 text-vector-rose" />
          <span className="text-sm font-semibold text-vector-rose">Pro Feature</span>
        </div>

        <h1 className="text-3xl font-display font-bold text-charcoal mb-4">
          Batch Processing
        </h1>

        <p className="text-slate mb-8 leading-relaxed">
          Process hundreds of product images at once with consistent settings.
          Upload an entire folder, apply your preferences, and download marketplace-ready photos in minutes.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {["Multi-upload", "Consistent settings", "Bulk download"].map((feature) => (
            <div key={feature} className="p-4 bg-white rounded-xl border border-slate/10 shadow-sm">
              <p className="text-sm font-medium text-charcoal">{feature}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="rounded-full px-8 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white shadow-lg"
          asChild
        >
          <Link to="/products/image-enhancer/pricing" className="flex items-center gap-2">
            Upgrade to Pro
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <p className="text-xs text-slate mt-4">Starting at $79/month</p>
      </div>
    </div>
  );
}
