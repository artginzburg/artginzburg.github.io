export function findLongestString(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b), '');
}
