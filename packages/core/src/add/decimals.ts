export function generateDecimalAddends(precision: number) {
  const factor = 10 ** precision;
  const a = Math.round(Math.random() * factor) / factor;
  const b = Math.round(Math.random() * factor) / factor;
  return { a, b, sum: +(a + b).toFixed(precision) };
}
