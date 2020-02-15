const monthMap = {
  0: "январь",
  1: "февраль",
  2: "март",
  3: "апрель",
  4: "май",
  5: "июнь",
  6: "июль",
  7: "август",
  8: "сентябрь",
  9: "октябрь",
  10: "ноябрь",
  11: "декабрь"
};

export function formatMonth(monthNum) {
  return monthMap[monthNum];
}
