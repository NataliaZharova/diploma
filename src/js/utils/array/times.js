export function times(n, fn) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fn(i));
  }
  return arr;
}
