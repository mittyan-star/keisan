import { useCountdown } from "../hooks/useCountdown";

export type TimerProps = {
  duration: number;
  onFinish?: () => void;
};

export function Timer({ duration, onFinish }: TimerProps) {
  const { remaining, reset } = useCountdown({ duration, onFinish });

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl font-mono" aria-live="polite">
        {remaining}s
      </span>
      <button type="button" className="rounded bg-blue-600 px-4 py-1 text-white" onClick={reset}>
        リセット
      </button>
    </div>
  );
}
