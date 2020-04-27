const dayMap = {
  0: "вс",
  1: "пн",
  2: "вт",
  3: "ср",
  4: "чт",
  5: "пт",
  6: "сб"
};

export function formatDay(date) {
  const dateNum = date.getDate();
  const day = dayMap[date.getDay()];
  return `${dateNum}, ${day}`;
}
