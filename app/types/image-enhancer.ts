export type ProcessingStep =
  | "idle"
  | "removing-bg"
  | "centering"
  | "enhancing"
  | "complete";

export interface ProcessingState {
  step: ProcessingStep;
  progress: number;
  originalUrl: string | null;
  processedUrl: string | null;
  settings: ProcessingSettings;
}

export interface ProcessingSettings {
  background: "white" | "transparent" | "custom";
  customBgColor: string;
  dimensions: "1:1" | "4:3" | "3:4" | "16:9";
  padding: number;
  enhancementLevel: "subtle" | "standard" | "high";
  outputFormat: "png" | "jpg" | "webp";
}

export interface ProcessedImage {
  id: string;
  originalUrl: string;
  processedUrl: string;
  settings: ProcessingSettings;
  timestamp: number;
  filename: string;
}

export interface AnonymousSession {
  processedCount: number;
  images: ProcessedImage[];
}

export const DEFAULT_SETTINGS: ProcessingSettings = {
  background: "white",
  customBgColor: "#ffffff",
  dimensions: "1:1",
  padding: 10,
  enhancementLevel: "standard",
  outputFormat: "png",
};

export const PROCESSING_STEPS: { key: ProcessingStep; label: string; duration: number }[] = [
  { key: "removing-bg", label: "Removing background", duration: 1500 },
  { key: "centering", label: "Auto-centering product", duration: 1200 },
  { key: "enhancing", label: "Enhancing image quality", duration: 1800 },
];

export const FREE_IMAGE_LIMIT = 3;
