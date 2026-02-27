import type { ProcessingSettings } from "~/types/image-enhancer";

/**
 * Generates CSS filters to simulate image enhancement.
 * In production, this would be replaced with actual API calls.
 */
export function getEnhancementFilter(level: ProcessingSettings["enhancementLevel"]): string {
  switch (level) {
    case "subtle":
      return "brightness(1.05) contrast(1.05) saturate(1.1)";
    case "standard":
      return "brightness(1.1) contrast(1.1) saturate(1.15)";
    case "high":
      return "brightness(1.15) contrast(1.15) saturate(1.25) sharpen(1)";
    default:
      return "none";
  }
}

/**
 * Generates a unique ID for processed images.
 */
export function generateImageId(): string {
  return `img_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
