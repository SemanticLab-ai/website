import { useEffect, useRef, useState } from "react";

const poster = "/images/brand/semantic-data-landscape-ripple-poster.webp";
const video = "/videos/semantic-data-landscape-ripple.mp4";

export function WorkHeroVideo() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const update = () =>
      setCanAnimate(!motionPreference.matches && !connection.connection?.saveData);
    update();
    motionPreference.addEventListener("change", update);
    return () => motionPreference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canAnimate || !videoRef.current || !("IntersectionObserver" in window)) return;
    const player = videoRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void player.play().catch(() => {});
      } else {
        player.pause();
      }
    });
    observer.observe(player);
    return () => observer.disconnect();
  }, [canAnimate]);

  return (
    <div className="work-hero__landscape work-hero__video-stage" aria-hidden="true" data-work-hero-video="true">
      <img
        className="work-hero__media"
        src={poster}
        alt=""
        width={1280}
        height={954}
        fetchPriority="high"
        decoding="async"
      />
      {canAnimate && (
        <video
          ref={videoRef}
          className={`work-hero__media work-hero__video${videoReady ? " work-hero__video--ready" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
