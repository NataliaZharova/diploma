export function max(xs) {
  return xs.reduce((acc, x) => (x > acc ? x : acc), -Infinity);
}
