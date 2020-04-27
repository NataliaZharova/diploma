// Сложение всех чисел в массиве
export function addAllItems(arr) {
  return arr.reduce((total, n) => total + n, 0);
}
