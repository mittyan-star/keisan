export type ProgressBarProps = {
  value: number;
  max: number;
};

export function ProgressBar({ value, max }: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = max === 0 ? 0 : Math.round((clamped / max) * 100);

  return (
    <div className="h-3 w-full rounded bg-gray-200" role="progressbar" aria-valuenow={clamped} aria-valuemax={max}>
      <div className="h-full rounded bg-green-500" style={{ width: `${percent}%` }} />
    </div>
  );
}
