import { useEffect, useRef, useState } from "react";

const poster = "/images/brand/semantic-data-landscape-ripple-poster.webp";
const video = "/videos/semantic-data-landscape-ripple.mp4";

export function WorkHeroVideo() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const update = () => {
      const allowed = !motionPreference.matches && !connection.connection?.saveData;
      setCanAnimate(allowed);
      if (!allowed) setVideoPlaying(false);
    };
    update();
    motionPreference.addEventListener("change", update);
    return () => motionPreference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canAnimate || !videoSlotRef.current) return;
    // WebKit checks the muted attribute when the video enters the document.
    const player = document.createElement("video");
    player.className = "work-hero__media work-hero__video";
    player.loop = true;
    player.defaultMuted = true;
    player.muted = true;
    player.playsInline = true;
    player.preload = "metadata";
    player.src = video;
    let hasPlayed = false;
    let visible = true;
    let blocked = false;
    let observer: IntersectionObserver | null = null;
    const showVideo = () => {
      hasPlayed = true;
      if (!visible) {
        player.pause();
        return;
      }
      setVideoPlaying(true);
    };
    const showPoster = () => setVideoPlaying(false);
    player.addEventListener("playing", showVideo);
    player.addEventListener("pause", showPoster);
    player.addEventListener("error", showPoster);
    videoSlotRef.current.append(player);

    const play = () => {
      if (blocked || !player.isConnected) return;
      void player.play().catch(() => {
        if (!player.isConnected) return;
        blocked = true;
        observer?.disconnect();
        player.remove();
        showPoster();
      });
    };
    observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (entry.isIntersecting) {
            if (hasPlayed && player.paused) {
              play();
            }
          } else if (hasPlayed) {
            player.pause();
            showPoster();
          }
        })
      : null;
    observer?.observe(player);
    play();
    return () => {
      observer?.disconnect();
      player.removeEventListener("playing", showVideo);
      player.removeEventListener("pause", showPoster);
      player.removeEventListener("error", showPoster);
      player.pause();
      player.remove();
    };
  }, [canAnimate]);

  return (
    <div className="work-hero__landscape work-hero__video-stage" aria-hidden="true" data-work-hero-video="true">
      <img
        className={`work-hero__media work-hero__poster${videoPlaying ? " work-hero__poster--hidden" : ""}`}
        src={poster}
        alt=""
        width={1280}
        height={954}
        fetchPriority="high"
        decoding="async"
      />
      <div ref={videoSlotRef} className="work-hero__video-slot" />
    </div>
  );
}
