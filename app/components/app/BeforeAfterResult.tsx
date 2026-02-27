import { BeforeAfterSlider } from "~/components/shared/BeforeAfterSlider";
import { Button } from "~/components/ui/button";
import { Download, RotateCcw } from "lucide-react";
import type { ProcessingSettings } from "~/types/image-enhancer";

interface BeforeAfterResultProps {
  originalUrl: string;
  processedUrl: string;
  settings: ProcessingSettings;
  onDownload: () => void;
  onReset: () => void;
}

export function BeforeAfterResult({
  originalUrl,
  processedUrl,
  settings,
  onDownload,
  onReset,
}: BeforeAfterResultProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="w-full max-w-2xl">
        {/* Before/After Slider */}
        <div className="mb-6">
          <BeforeAfterSlider
            beforeSrc={originalUrl}
            afterSrc={processedUrl}
            className="aspect-square max-h-[500px]"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={onReset}
            className="rounded-full px-6 border-2"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            New Image
          </Button>
          <Button
            size="lg"
            onClick={onDownload}
            className="rounded-full px-6 bg-gradient-to-r from-vector-rose to-vector-rose-dark text-white shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4 mr-2" />
            Download {settings.outputFormat.toUpperCase()}
          </Button>
        </div>
      </div>
    </div>
  );
}
