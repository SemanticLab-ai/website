import type { ProcessingState, ProcessingSettings } from "~/types/image-enhancer";
import { UploadZone } from "./UploadZone";
import { ProcessingSteps } from "./ProcessingSteps";
import { BeforeAfterResult } from "./BeforeAfterResult";

interface ImageWorkspaceProps {
  state: ProcessingState;
  isProcessing: boolean;
  isComplete: boolean;
  uploadProps: {
    isDragging: boolean;
    handleDrop: (e: React.DragEvent) => void;
    handleDragOver: (e: React.DragEvent) => void;
    handleDragLeave: (e: React.DragEvent) => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setFromUrl: (url: string) => void;
    error: string | null;
    inputRef: React.RefObject<HTMLInputElement | null>;
  };
  onDownload: () => void;
  onReset: () => void;
}

export function ImageWorkspace({
  state,
  isProcessing,
  isComplete,
  uploadProps,
  onDownload,
  onReset,
}: ImageWorkspaceProps) {
  // State: Empty
  if (state.step === "idle" && !state.originalUrl) {
    return (
      <UploadZone
        isDragging={uploadProps.isDragging}
        onDrop={uploadProps.handleDrop}
        onDragOver={uploadProps.handleDragOver}
        onDragLeave={uploadProps.handleDragLeave}
        onFileSelect={uploadProps.handleFileSelect}
        onSampleClick={uploadProps.setFromUrl}
        inputRef={uploadProps.inputRef}
        error={uploadProps.error}
      />
    );
  }

  // State: Processing
  if (isProcessing) {
    return (
      <ProcessingSteps currentStep={state.step} progress={state.progress} />
    );
  }

  // State: Complete
  if (isComplete && state.originalUrl && state.processedUrl) {
    return (
      <BeforeAfterResult
        originalUrl={state.originalUrl}
        processedUrl={state.processedUrl}
        settings={state.settings}
        onDownload={onDownload}
        onReset={onReset}
      />
    );
  }

  // Fallback (shouldn't happen)
  return (
    <UploadZone
      isDragging={uploadProps.isDragging}
      onDrop={uploadProps.handleDrop}
      onDragOver={uploadProps.handleDragOver}
      onDragLeave={uploadProps.handleDragLeave}
      onFileSelect={uploadProps.handleFileSelect}
      onSampleClick={uploadProps.setFromUrl}
      inputRef={uploadProps.inputRef}
      error={uploadProps.error}
    />
  );
}
