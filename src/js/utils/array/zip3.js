export function zip3(xs, ys, zs) {
  const maxLen = Math.max(xs.length, ys.length, zs.length);
  const arr = [];
  for (let i = 0; i < maxLen; i++) {
    arr.push([xs[i], ys[i], zs[i]]);
  }
  return arr;
}
