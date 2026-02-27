import { useCallback, useState, useEffect, useRef } from "react";
import { useImageProcessor } from "~/hooks/useImageProcessor";
import { useAnonymousSession } from "~/hooks/useAnonymousSession";
import { useUpload } from "~/hooks/useUpload";
import { ImageWorkspace } from "~/components/app/ImageWorkspace";
import { SettingsSidebar } from "~/components/app/SettingsSidebar";
import { SignUpModal } from "~/components/app/SignUpModal";
import { generateImageId } from "~/lib/mock-processor";

export function meta() {
  return [
    { title: "Image Enhancer — SemanticLab" },
    { name: "description", content: "AI-powered product image enhancement" },
  ];
}

export default function ImageEnhancerApp() {
  const { state, processImage, updateSettings, reset, isProcessing, isComplete } = useImageProcessor();
  const { addProcessedImage, shouldShowSignUp, canProcess } = useAnonymousSession();
  const upload = useUpload();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const processingRef = useRef(false);

  // When a file is selected or a sample is clicked, start processing
  const handleImageReady = useCallback(
    async (url: string) => {
      if (processingRef.current) return;
      if (!canProcess) {
        setShowSignUpModal(true);
        return;
      }
      processingRef.current = true;
      try {
        const result = await processImage(url);
        addProcessedImage({
          ...result,
          id: generateImageId(),
          filename: upload.file?.name || "sample-image",
        });
      } finally {
        processingRef.current = false;
      }
    },
    [processImage, canProcess, addProcessedImage, upload.file]
  );

  // Override upload hooks to auto-start processing
  const uploadProps = {
    ...upload,
    handleDrop: (e: React.DragEvent) => {
      upload.handleDrop(e);
    },
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => {
      upload.handleFileSelect(e);
    },
    setFromUrl: (url: string) => {
      upload.setFromUrl(url);
      handleImageReady(url);
    },
  };

  // Watch for previewUrl changes from file uploads (drag/drop or browse)
  useEffect(() => {
    if (upload.previewUrl && state.step === "idle" && !state.originalUrl && !isProcessing) {
      handleImageReady(upload.previewUrl);
    }
  }, [upload.previewUrl, state.step, state.originalUrl, isProcessing, handleImageReady]);

  const handleDownload = useCallback(() => {
    if (shouldShowSignUp) {
      setShowSignUpModal(true);
      return;
    }
    // In a real app, this would trigger an actual download
    // For the demo, we just show a success state
    if (state.processedUrl) {
      const link = document.createElement("a");
      link.href = state.processedUrl;
      link.download = `enhanced.${state.settings.outputFormat}`;
      link.click();
    }
  }, [shouldShowSignUp, state.processedUrl, state.settings.outputFormat]);

  const handleReset = useCallback(() => {
    reset();
    upload.reset();
  }, [reset, upload]);

  return (
    <div className="flex h-full">
      {/* Main Workspace */}
      <div className="flex-1 min-w-0">
        <ImageWorkspace
          state={state}
          isProcessing={isProcessing}
          isComplete={isComplete}
          uploadProps={uploadProps}
          onDownload={handleDownload}
          onReset={handleReset}
        />
      </div>

      {/* Settings Sidebar */}
      <SettingsSidebar
        settings={state.settings}
        onUpdate={updateSettings}
        isProcessing={isProcessing}
      />

      {/* Sign Up Modal */}
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />
    </div>
  );
}
