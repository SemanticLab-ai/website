import { useEffect, useRef } from "react";

export type MotionManifest = {
  frameCount: number;
  width: number;
  height: number;
  pattern: string;
};

// A short opening hold, a sustained reveal and a closing hold, independent of video duration.
export function storyFrame(progress: number, count: number) {
  const p = Math.max(0, Math.min(1, progress));
  const motion = p < 0.12 ? 0 : p > 0.9 ? 1 : (p - 0.12) / 0.78;
  return Math.round(motion * Math.max(0, count - 1));
}

export function EmeraldMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const story = canvas?.closest<HTMLElement>(".em-story");
    const stage = canvas?.closest<HTMLElement>(".em-hero");
    if (!canvas || !story || !stage) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = matchMedia("(max-width: 700px)");
    let stop = () => {};
    function setup() {
      stop();
      canvas!.style.opacity = "0";
      if (reduced.matches) return;
      const base = `/images/emerald/${mobile.matches ? "mobile" : "desktop"}`;
      const abort = new AbortController();
      const cache = new Map<number, ImageBitmap>();
      const pending = new Set<number>();
      const failed = new Set<number>();
      let manifest: MotionManifest | null = null;
      let wanted = 0;
      let raf = 0;
      let disposed = false;
      let inView = true;
      let queue: number[] = [];
      let lastDrawn = -1;
      const draw = () => {
        if (disposed || !manifest) return;
        const image = cache.get(wanted);
        if (!image || lastDrawn === wanted) return;
        // The same raster framing as the responsive poster; no CSS-generated artwork.
        canvas!.width = manifest.width;
        canvas!.height = manifest.height;
        ctx!.drawImage(image, 0, 0);
        canvas!.style.opacity = "1";
        lastDrawn = wanted;
      };
      const pump = () => {
        if (disposed || !inView || !manifest) return;
        while (pending.size < 3 && queue.length) {
          const index = queue.shift()!;
          if (cache.has(index) || pending.has(index) || failed.has(index))
            continue;
          pending.add(index);
          const file = manifest.pattern.replace(
            "%04d",
            String(index).padStart(4, "0"),
          );
          fetch(`${base}/${file}`, { signal: abort.signal })
            .then((response) => {
              if (!response.ok) throw new Error("Frame unavailable");
              return response.blob();
            })
            .then((blob) => createImageBitmap(blob))
            .then((bitmap) => {
              if (disposed) {
                bitmap.close();
                return;
              }
              cache.set(index, bitmap);
              // At most 20 decoded frames, about 74 MB on desktop, including nearby motion.
              if (cache.size > 20) {
                const farthest = [...cache.keys()].sort(
                  (a, b) => Math.abs(b - wanted) - Math.abs(a - wanted),
                )[0];
                cache.get(farthest)?.close();
                cache.delete(farthest);
              }
              draw();
            })
            .catch(() => {
              if (!disposed) failed.add(index);
            })
            .finally(() => {
              pending.delete(index);
              pump();
            });
        }
      };
      const update = () => {
        raf = 0;
        if (!manifest || disposed) return;
        const rect = story!.getBoundingClientRect();
        const travel = Math.max(1, story!.offsetHeight - stage!.offsetHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / travel));
        wanted = storyFrame(progress, manifest.frameCount);
        stage!.dataset.chapter = String(
          progress < 0.32 ? 1 : progress < 0.76 ? 2 : 3,
        );
        queue = [wanted];
        for (let distance = 1; distance <= 8; distance++)
          queue.push(wanted + distance, wanted - distance);
        queue = queue.filter(
          (index) => index >= 0 && index < manifest!.frameCount,
        );
        draw();
        pump();
      };
      const schedule = () => {
        if (!raf && inView) raf = requestAnimationFrame(update);
      };
      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) schedule();
        },
        { rootMargin: "200px" },
      );
      observer.observe(story!);
      fetch(`${base}/manifest.json`, { signal: abort.signal })
        .then((response) => {
          if (!response.ok) throw new Error("Motion unavailable");
          return response.json();
        })
        .then((data: MotionManifest) => {
          if (
            disposed ||
            !Number.isInteger(data.frameCount) ||
            data.frameCount < 2 ||
            !data.width ||
            !data.height ||
            !data.pattern?.includes("%04d")
          )
            return;
          manifest = data;
          schedule();
        })
        .catch(() => {
          /* The responsive poster remains visible. */
        });
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      stop = () => {
        disposed = true;
        abort.abort();
        cancelAnimationFrame(raf);
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        for (const bitmap of cache.values()) bitmap.close();
        cache.clear();
      };
    }
    setup();
    mobile.addEventListener("change", setup);
    reduced.addEventListener("change", setup);
    return () => {
      stop();
      mobile.removeEventListener("change", setup);
      reduced.removeEventListener("change", setup);
    };
  }, []);
  return (
    <div className="em-hero-art" aria-hidden="true">
      <picture>
        <source
          media="(max-width: 700px)"
          srcSet="/images/emerald/mobile/poster.webp"
        />
        <img
          src="/images/emerald/desktop/poster.webp"
          alt=""
          width="1280"
          height="720"
          fetchPriority="high"
        />
      </picture>
      <canvas ref={canvasRef} />
    </div>
  );
}
