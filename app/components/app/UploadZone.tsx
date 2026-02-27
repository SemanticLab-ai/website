import { Upload, ImagePlus } from "lucide-react";

interface UploadZoneProps {
  isDragging: boolean;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSampleClick: (url: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  error: string | null;
}

const sampleImages = [
  { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop", label: "Sneakers" },
  { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop", label: "Watch" },
  { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop", label: "Headphones" },
];

export function UploadZone({
  isDragging,
  onDrop,
  onDragOver,
  onDragLeave,
  onFileSelect,
  onSampleClick,
  inputRef,
  error,
}: UploadZoneProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      {/* Drop Zone */}
      <div
        className={`w-full max-w-lg aspect-square rounded-3xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? "border-vector-rose bg-vector-rose/5 scale-105"
            : "border-slate/20 bg-white hover:border-vector-rose/40 hover:bg-pearl"
        }`}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={onFileSelect}
          className="hidden"
        />

        <div className="w-16 h-16 rounded-2xl bg-vector-rose/10 flex items-center justify-center mb-6">
          <Upload className="w-8 h-8 text-vector-rose" />
        </div>

        <h3 className="text-xl font-bold text-charcoal mb-2">
          {isDragging ? "Drop your image here" : "Upload a product photo"}
        </h3>
        <p className="text-slate text-sm mb-1">
          Drag and drop or click to browse
        </p>
        <p className="text-slate/60 text-xs">
          JPG, PNG, or WebP up to 10MB
        </p>

        {error && (
          <div className="mt-4 px-4 py-2 bg-red-50 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Sample Images */}
      <div className="mt-8 text-center">
        <p className="text-sm text-slate mb-4">Or try a sample image:</p>
        <div className="flex gap-3 justify-center">
          {sampleImages.map((sample) => (
            <button
              key={sample.label}
              onClick={() => onSampleClick(sample.url)}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-slate/10 group-hover:border-vector-rose/40 transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-1">
                <img src={sample.url} alt={sample.label} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-slate group-hover:text-charcoal transition-colors">{sample.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
