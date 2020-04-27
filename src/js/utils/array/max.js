export function max(arr) {
  return arr.reduce((total, item) => (item > total ? item : total), -Infinity);
}
