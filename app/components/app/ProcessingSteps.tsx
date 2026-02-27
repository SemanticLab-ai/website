import { Check, Loader2 } from "lucide-react";
import type { ProcessingStep } from "~/types/image-enhancer";
import { PROCESSING_STEPS } from "~/types/image-enhancer";

interface ProcessingStepsProps {
  currentStep: ProcessingStep;
  progress: number;
}

export function ProcessingSteps({ currentStep, progress }: ProcessingStepsProps) {
  const stepIndex = PROCESSING_STEPS.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="w-full max-w-sm">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate/10 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-vector-rose to-neural-teal rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {PROCESSING_STEPS.map((step, i) => {
            const isActive = step.key === currentStep;
            const isComplete = stepIndex > i || currentStep === "complete";

            return (
              <div key={step.key} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isComplete
                      ? "bg-neural-teal text-white"
                      : isActive
                      ? "bg-vector-rose text-white animate-pulse-soft"
                      : "bg-slate/10 text-slate"
                  }`}
                >
                  {isComplete ? (
                    <Check className="w-5 h-5" />
                  ) : isActive ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <span className="text-sm font-bold">{i + 1}</span>
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      isActive ? "text-charcoal" : isComplete ? "text-neural-teal" : "text-slate"
                    }`}
                  >
                    {step.label}
                  </p>
                  {isActive && (
                    <p className="text-xs text-slate mt-0.5">Processing...</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {currentStep === "complete" && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neural-teal/10 rounded-full">
              <Check className="w-4 h-4 text-neural-teal" />
              <span className="text-sm font-semibold text-neural-teal">Enhancement complete!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
