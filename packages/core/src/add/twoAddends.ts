import { canonizeAddends } from "../canon";
import { ensureWithinRange } from "../ensure";

export function generateTwoAddends(min: number, max: number) {
  ensureWithinRange(min, 0, max);
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;
  return canonizeAddends([a, b]);
}
