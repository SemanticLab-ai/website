import type { ProcessingSettings } from "~/types/image-enhancer";

interface SettingsSidebarProps {
  settings: ProcessingSettings;
  onUpdate: (partial: Partial<ProcessingSettings>) => void;
  isProcessing: boolean;
}

export function SettingsSidebar({ settings, onUpdate, isProcessing }: SettingsSidebarProps) {
  return (
    <aside className="w-72 bg-white border-l border-slate/10 p-6 overflow-y-auto flex-shrink-0 hidden lg:block">
      <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-6">
        Settings
      </h3>

      <div className="space-y-6">
        {/* Background */}
        <div>
          <label className="text-xs font-semibold text-slate uppercase tracking-wider mb-2 block">
            Background
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["white", "transparent", "custom"] as const).map((bg) => (
              <button
                key={bg}
                onClick={() => onUpdate({ background: bg })}
                disabled={isProcessing}
                className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                  settings.background === bg
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-pearl text-slate hover:bg-slate/10"
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {bg}
              </button>
            ))}
          </div>
          {settings.background === "custom" && (
            <input
              type="color"
              value={settings.customBgColor}
              onChange={(e) => onUpdate({ customBgColor: e.target.value })}
              className="mt-2 w-full h-8 rounded-lg cursor-pointer"
              disabled={isProcessing}
            />
          )}
        </div>

        {/* Dimensions */}
        <div>
          <label className="text-xs font-semibold text-slate uppercase tracking-wider mb-2 block">
            Dimensions
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(["1:1", "4:3", "3:4", "16:9"] as const).map((dim) => (
              <button
                key={dim}
                onClick={() => onUpdate({ dimensions: dim })}
                disabled={isProcessing}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  settings.dimensions === dim
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-pearl text-slate hover:bg-slate/10"
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {dim}
              </button>
            ))}
          </div>
        </div>

        {/* Padding */}
        <div>
          <label className="text-xs font-semibold text-slate uppercase tracking-wider mb-2 block">
            Padding: {settings.padding}%
          </label>
          <input
            type="range"
            min={0}
            max={30}
            value={settings.padding}
            onChange={(e) => onUpdate({ padding: parseInt(e.target.value) })}
            disabled={isProcessing}
            className="w-full accent-vector-rose"
          />
        </div>

        {/* Enhancement Level */}
        <div>
          <label className="text-xs font-semibold text-slate uppercase tracking-wider mb-2 block">
            Enhancement
          </label>
          <div className="space-y-2">
            {(["subtle", "standard", "high"] as const).map((level) => (
              <button
                key={level}
                onClick={() => onUpdate({ enhancementLevel: level })}
                disabled={isProcessing}
                className={`w-full px-3 py-2 rounded-lg text-xs font-medium capitalize text-left transition-all ${
                  settings.enhancementLevel === level
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-pearl text-slate hover:bg-slate/10"
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Output Format */}
        <div>
          <label className="text-xs font-semibold text-slate uppercase tracking-wider mb-2 block">
            Format
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["png", "jpg", "webp"] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => onUpdate({ outputFormat: fmt })}
                disabled={isProcessing}
                className={`px-3 py-2 rounded-lg text-xs font-medium uppercase transition-all ${
                  settings.outputFormat === fmt
                    ? "bg-charcoal text-white shadow-md"
                    : "bg-pearl text-slate hover:bg-slate/10"
                } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
