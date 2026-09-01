import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Maximize2 from "lucide-react/dist/esm/icons/maximize-2";
import Minimize2 from "lucide-react/dist/esm/icons/minimize-2";
import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { BrandLockup } from "~/components/BrandLockup";

export type DeckSlide = {
  id: string;
  label: string;
  content: ReactNode;
};

type DeckPresentationProps = {
  className?: string;
  slides: readonly DeckSlide[];
  testId?: string;
};

type DeckSlideFrameProps = {
  children: ReactNode;
  className?: string;
  descriptor: string;
  index: number;
  tone?: "dark" | "light";
  total?: number;
};

function isTextInput(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(target.closest("input, textarea, select, [contenteditable='true']"))
  );
}

export function DeckSlideFrame({
  children,
  className = "",
  descriptor,
  index,
  tone = "dark",
  total = 12,
}: DeckSlideFrameProps) {
  return (
    <section
      className={`deck-slide deck-slide--${tone} ${className}`.trim()}
      aria-labelledby={`deck-slide-${index}-title`}
    >
      <div className="deck-slide__content">{children}</div>
      <footer className="deck-slide__footer" aria-label="Slide information">
        <span className="deck-slide__brand">
          <BrandLockup />
        </span>
        <span className="deck-slide__descriptor">{descriptor}</span>
        <span className="deck-slide__number">
          <strong>{String(index).padStart(2, "0")}</strong> / {String(total).padStart(2, "0")}
        </span>
      </footer>
    </section>
  );
}

export function DeckPresentation({
  className = "",
  slides,
  testId = "sales-deck",
}: DeckPresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenAvailable, setFullscreenAvailable] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const previousSlide = useCallback(() => {
    setCurrentSlide((current) => Math.max(0, current - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => Math.min(slides.length - 1, current + 1));
  }, [slides.length]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Fullscreen can be unavailable in embedded preview contexts.
    }
  }, []);

  useEffect(() => {
    setFullscreenAvailable(document.fullscreenEnabled);

    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (isTextInput(event.target)) {
        return;
      }

      if (["ArrowRight", "PageDown", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        nextSlide();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previousSlide();
      } else if (event.key === "Home") {
        event.preventDefault();
        setCurrentSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setCurrentSlide(slides.length - 1);
      } else if (event.key.toLowerCase() === "f") {
        event.preventDefault();
        void toggleFullscreen();
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide, slides.length, toggleFullscreen]);

  const slide = slides[currentSlide];

  return (
    <div className={`sales-deck ${className}`.trim()} data-testid={testId}>
      <div className="sales-deck__stage" aria-live="polite">
        <div className="sales-deck__transition" key={slide.id}>
          {slide.content}
        </div>
      </div>

      <div className="sales-deck__progress" aria-hidden="true">
        <span style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      <nav
        className={`sales-deck__controls ${
          fullscreenAvailable ? "sales-deck__controls--fullscreen" : ""
        }`.trim()}
        aria-label="Presentation controls"
      >
        <button
          type="button"
          onClick={previousSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
          data-testid="deck-previous"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <p>
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <small>{slide.label}</small>
        </p>
        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
          data-testid="deck-next"
        >
          <ChevronRight aria-hidden="true" />
        </button>
        {fullscreenAvailable ? (
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 aria-hidden="true" />
            ) : (
              <Maximize2 aria-hidden="true" />
            )}
          </button>
        ) : null}
      </nav>

      <p className="sales-deck__keyboard-hint">
        <kbd>←</kbd> <kbd>→</kbd> navigate · <kbd>F</kbd> fullscreen
      </p>
    </div>
  );
}
