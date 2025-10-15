export type KeypadProps = {
  onInput: (value: string) => void;
  onSubmit?: () => void;
};

const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "←", "OK"] as const;

export function Keypad({ onInput, onSubmit }: KeypadProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {buttons.map((label) => (
        <button
          key={label}
          type={label === "OK" ? "submit" : "button"}
          className="rounded bg-gray-200 py-3 text-lg font-semibold"
          onClick={() => {
            if (label === "OK") {
              onSubmit?.();
            } else if (label === "←") {
              onInput("BACKSPACE");
            } else {
              onInput(label);
            }
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
