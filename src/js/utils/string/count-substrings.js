import { escapeRegExp } from "./escape-reg-exp";

export function countSubstrings(pattern, string) {
  const regexp = new RegExp(escapeRegExp(pattern), "ugi");
  const matches = string.match(regexp);
  return matches ? matches.length : 0;
}
