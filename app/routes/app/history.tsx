import { Clock, ImagePlus } from "lucide-react";
import { useAnonymousSession } from "~/hooks/useAnonymousSession";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Processing History — SemanticLab" },
    { name: "description", content: "View your processed image history" },
  ];
}

export default function History() {
  const { session } = useAnonymousSession();
  const images = session.images;

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="max-w-md text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-slate/5 flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-slate/40" />
          </div>
          <h2 className="text-2xl font-display font-bold text-charcoal mb-3">
            No history yet
          </h2>
          <p className="text-slate mb-6">
            Your processed images will appear here. Start by enhancing your first product photo.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white shadow-lg"
            asChild
          >
            <Link to="/app/image-enhancer" className="flex items-center gap-2">
              <ImagePlus className="w-4 h-4" />
              Enhance an Image
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-charcoal">
            Processing History
          </h1>
          <p className="text-sm text-slate mt-1">{images.length} processed images</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="group bg-white rounded-xl border border-slate/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-square bg-pearl">
              <img
                src={image.processedUrl}
                alt={image.filename}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-charcoal truncate">{image.filename}</p>
              <p className="text-xs text-slate">
                {new Date(image.timestamp).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
