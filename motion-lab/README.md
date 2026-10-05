# SemanticLab network motion study

A standalone Remotion composition and interactive browser preview for the proposed SemanticLab homepage hero. This project is separate from the website route and Cloudflare staging deployment.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL printed by the command. Use **Network study** to inspect the visual and **Hero context** to see it beside the current homepage copy. `npm run studio` opens the Remotion composition timeline. `npm run typecheck` checks TypeScript; `npm run build` bundles both the browser preview and Remotion composition.

## Interaction

- The 14-second loop moves 24 hand-positioned nodes and 50 links with deterministic frame-based motion.
- Moving near a ringed key node magnetically draws it toward the pointer with a short visual buzz. Its connections brighten, and its description stays in a fixed card for reading.
- Pointer proximity gently displaces the other points.
- Mouse or pen drag moves a node and its links. It springs back after release.
- Touch taps focus the nearest node without taking over vertical scrolling.
- Five named nodes can be selected with Tab and Enter or Space; Escape clears selection.
- The pause button, `prefers-reduced-motion`, hidden-tab handling, and off-screen observation stop playback.

`src/NetworkComposition.tsx` is the reusable scene. `src/network.ts` holds the topology and composition dimensions. `src/MotionLab.tsx` is a review surface; its hero mockup and grid-backed card are not part of the composition. The composition has a transparent background and can be placed directly in the website hero when approved.

## Staging integration later

Move the composition and topology into the website app, add matching `remotion` and `@remotion/player` versions to the website package, and mount the Player only for the approved preview runtime flag. Keep the production flag disabled until separately authorized. The website's normal branch, artifact, Cloudflare build, and URL verification gates apply at that point.
