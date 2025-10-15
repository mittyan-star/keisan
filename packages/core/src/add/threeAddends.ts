import { canonizeAddends } from "../canon";

export function generateThreeAddends(range: [number, number]) {
  const [min, max] = range;
  return canonizeAddends(
    new Array(3).fill(0).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
  );
}
