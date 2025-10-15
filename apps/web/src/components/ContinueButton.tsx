export type ContinueButtonProps = {
  onClick: () => void;
};

export function ContinueButton({ onClick }: ContinueButtonProps) {
  return (
    <button type="button" className="rounded bg-amber-500 px-4 py-2 font-semibold text-white" onClick={onClick}>
      昨日の続きへ
    </button>
  );
}
