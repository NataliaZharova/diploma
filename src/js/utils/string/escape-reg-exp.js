const specials = [
  "-",
  "[",
  "]",
  "/",
  "{",
  "}",
  "(",
  ")",
  "*",
  "+",
  "?",
  ".",
  "\\",
  "^",
  "$",
  "|"
];

const specialsRegExp = RegExp("[" + specials.join("\\") + "]", "ug");

export function escapeRegExp(str) {
  return str.replace(specialsRegExp, "\\$&");
}
