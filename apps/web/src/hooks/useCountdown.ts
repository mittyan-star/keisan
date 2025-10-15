import { useCallback, useEffect, useRef, useState } from "react";

export type UseCountdownOptions = {
  duration: number;
  onFinish?: () => void;
};

export function useCountdown({ duration, onFinish }: UseCountdownOptions) {
  const [remaining, setRemaining] = useState(duration);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clear();
    setRemaining(duration);
    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clear();
          onFinish?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clear, duration, onFinish]);

  useEffect(() => {
    reset();
    return clear;
  }, [reset, clear]);

  return { remaining, reset } as const;
}
