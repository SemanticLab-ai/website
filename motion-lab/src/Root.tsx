import { Composition } from "remotion";
import { NetworkComposition } from "../../app/components/marketing/shared/network-motion/NetworkComposition";
import { DURATION, FPS, HEIGHT, WIDTH } from "../../app/components/marketing/shared/network-motion/network";

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
