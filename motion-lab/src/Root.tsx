import { Composition } from "remotion";
import { NetworkComposition } from "./NetworkComposition";
import { DURATION, FPS, HEIGHT, WIDTH } from "./network";

export const RemotionRoot = () => (
  <Composition
    id="SemanticNetwork"
    component={NetworkComposition}
    durationInFrames={DURATION}
    fps={FPS}
    width={WIDTH}
    height={HEIGHT}
    defaultProps={{ reducedMotion: false }}
  />
);
