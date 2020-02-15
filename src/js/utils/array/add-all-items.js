// Сложение всех чисел в массиве
export function addAllItems(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
