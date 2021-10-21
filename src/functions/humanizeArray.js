export function humanizeArray(array, lastWord = 'and', separator = ',') {
  return `${array.slice(0, -1).join(`${separator} `)}${separator} ${lastWord} ${array.slice(-1)}`;
}
