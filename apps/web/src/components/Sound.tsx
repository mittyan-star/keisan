import { useEffect, useRef } from "react";
import { useSound } from "../hooks/useSound";

export type SoundProps = {
  src: string;
  playOn?: boolean;
};

export function Sound({ src, playOn = false }: SoundProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { enabled } = useSound();

  useEffect(() => {
    if (!enabled || !playOn) return;
    audioRef.current?.play().catch(() => {
      // 自動再生がブロックされた場合は無視
    });
  }, [enabled, playOn]);

  return <audio ref={audioRef} src={src} preload="auto" hidden aria-hidden />;
}
