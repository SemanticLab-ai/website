import { useState, useCallback } from "react";
import type { ProcessingState, ProcessingStep, ProcessingSettings } from "~/types/image-enhancer";
import { DEFAULT_SETTINGS, PROCESSING_STEPS } from "~/types/image-enhancer";
import { generateImageId } from "~/lib/mock-processor";

export function useImageProcessor() {
  const [state, setState] = useState<ProcessingState>({
    step: "idle",
    progress: 0,
    originalUrl: null,
    processedUrl: null,
    settings: { ...DEFAULT_SETTINGS },
  });

  const updateSettings = useCallback((partial: Partial<ProcessingSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const processImage = useCallback(
    async (imageUrl: string) => {
      setState((prev) => ({
        ...prev,
        originalUrl: imageUrl,
        processedUrl: null,
        step: "idle",
        progress: 0,
      }));

      const steps = PROCESSING_STEPS;
      let totalElapsed = 0;
      const totalDuration = steps.reduce((sum, s) => sum + s.duration, 0);

      for (const step of steps) {
        setState((prev) => ({
          ...prev,
          step: step.key,
          progress: Math.round((totalElapsed / totalDuration) * 100),
        }));
        await new Promise((resolve) => setTimeout(resolve, step.duration));
        totalElapsed += step.duration;
      }

      let capturedSettings: ProcessingSettings = DEFAULT_SETTINGS;
      setState((prev) => {
        capturedSettings = prev.settings;
        return {
          ...prev,
          step: "complete",
          progress: 100,
          processedUrl: imageUrl,
        };
      });

      return {
        id: generateImageId(),
        originalUrl: imageUrl,
        processedUrl: imageUrl,
        settings: capturedSettings,
        timestamp: Date.now(),
        filename: "enhanced-image",
      };
    },
    []
  );

  const reset = useCallback(() => {
    setState((prev) => ({
      step: "idle",
      progress: 0,
      originalUrl: null,
      processedUrl: null,
      settings: prev.settings,
    }));
  }, []);

  return {
    state,
    processImage,
    updateSettings,
    reset,
    isProcessing: state.step !== "idle" && state.step !== "complete",
    isComplete: state.step === "complete",
  };
}
