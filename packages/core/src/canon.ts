export function canonizeAddends(addends: number[]) {
  return [...addends].sort((a, b) => a - b);
}
