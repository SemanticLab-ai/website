# Factory opening footage

Source: user-supplied The Tieman difference video.
Excerpt: seconds 3.00–4.00 of the curated factory-wide clip (original 46.88–47.88).
Treatment: 20% speed, motion-interpolated 25 fps, 1920×1080, silent H.264, five seconds.
The cover plays once and holds its final frame; reduced motion uses the WebP still.

Reproduction: trim one second to an intermediate file, then apply:
`setpts=5*(PTS-STARTPTS),tpad=stop_mode=clone:stop_duration=0.3,minterpolate=fps=25:mi_mode=mci:mc_mode=aobmc:vsbmc=1`
Limit output to five seconds, libx264 CRF 20, yuv420p, faststart.

## Closing sparks

Welding clip seconds 0.8–1.8 (original 14.08–15.08), slowed to 20% using the same interpolation filter. Five-second silent loop on Questions, with pause/play control and reduced-motion still fallback.
