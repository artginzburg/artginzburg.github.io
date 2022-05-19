function makeEmptyArray(length) {
  return Array(Math.trunc(length)).fill(undefined);
}

export function makeEmptyMatrix(width, height) {
  return makeEmptyArray(height).map(() => makeEmptyArray(width));
}
