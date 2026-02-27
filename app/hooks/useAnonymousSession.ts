import { useState, useCallback, useEffect } from "react";
import type { ProcessedImage, AnonymousSession } from "~/types/image-enhancer";
import { FREE_IMAGE_LIMIT } from "~/types/image-enhancer";

const STORAGE_KEY = "semanticlab_session";

function loadSession(): AnonymousSession {
  if (typeof window === "undefined") {
    return { processedCount: 0, images: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { processedCount: 0, images: [] };
}

function saveSession(session: AnonymousSession) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {}
}

export function useAnonymousSession() {
  const [session, setSession] = useState<AnonymousSession>({ processedCount: 0, images: [] });

  useEffect(() => {
    setSession(loadSession());
  }, []);

  const addProcessedImage = useCallback((image: ProcessedImage) => {
    setSession((prev) => {
      const next = {
        processedCount: prev.processedCount + 1,
        images: [image, ...prev.images].slice(0, 50),
      };
      saveSession(next);
      return next;
    });
  }, []);

  const canProcess = session.processedCount < FREE_IMAGE_LIMIT;
  const remaining = Math.max(0, FREE_IMAGE_LIMIT - session.processedCount);
  const shouldShowSignUp = session.processedCount >= FREE_IMAGE_LIMIT;

  return {
    session,
    addProcessedImage,
    canProcess,
    remaining,
    shouldShowSignUp,
  };
}
