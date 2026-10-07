import { useEffect, useRef } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { NetworkComposition } from "./NetworkComposition";
import { DURATION, FPS, HEIGHT, WIDTH } from "./network";

type Props = {
  playing: boolean;
  reducedMotion: boolean;
  onNodeFocus: (id: number | null) => void;
};

export default function NetworkPlayer({ playing, reducedMotion, onNodeFocus }: Props) {
  const player = useRef<PlayerRef>(null);

  useEffect(() => {
    if (playing) player.current?.play();
    else player.current?.pause();
  }, [playing]);

  return <Player
    ref={player}
    component={NetworkComposition}
    compositionWidth={WIDTH}
    compositionHeight={HEIGHT}
    durationInFrames={DURATION}
    fps={FPS}
    inputProps={{ reducedMotion, onNodeFocus }}
    autoPlay={playing}
    initiallyMuted
    loop
    clickToPlay={false}
    controls={false}
    style={{ width: "100%", aspectRatio: `${WIDTH} / ${HEIGHT}` }}
  />;
}
