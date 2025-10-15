export function ensureWithinRange(value: number, min: number, max: number) {
  if (value < min || value > max) {
    throw new Error(`value ${value} is out of range [${min}, ${max}]`);
  }
}

export function ensureNoDuplicate(values: number[]) {
  const set = new Set(values);
  if (set.size !== values.length) {
    throw new Error("duplicate values detected");
  }
}
