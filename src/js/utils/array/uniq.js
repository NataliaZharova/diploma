// Удаление дубликатов из массива
export function uniq(arr) {
  const _arr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (_arr.indexOf(item) === -1) {
      _arr.push(item);
    }
  }
  return _arr;
}
