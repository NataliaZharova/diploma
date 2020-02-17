export function zip3(arr1, arr2, arr3) {
  const maxLen = Math.max(arr1.length, arr2.length, arr3.length);
  const _arr = [];
  for (let i = 0; i < maxLen; i++) {
    _arr.push([arr1[i], arr2[i], arr3[i]]);
  }
  return _arr;
}
