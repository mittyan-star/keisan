export type ProblemViewProps = {
  operands: number[];
  orientation?: "horizontal" | "vertical";
};

export function ProblemView({ operands, orientation = "horizontal" }: ProblemViewProps) {
  if (orientation === "vertical") {
    return (
      <div className="inline-flex flex-col items-end gap-1 font-mono text-2xl">
        {operands.map((value, index) => (
          <span key={index}>{value.toString().padStart(3, " ")}</span>
        ))}
        <span className="border-t border-gray-400 pt-1">???</span>
      </div>
    );
  }

  return (
    <div className="font-mono text-2xl">
      {operands.join(" + ")} = <span aria-hidden>???</span>
    </div>
  );
}
