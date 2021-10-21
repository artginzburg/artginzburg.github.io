export function shuffle(array) {
  let result = [...array],
    i = result.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (i !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * i);
    i--;

    // And swap it with the current element.
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }

  return result;
}
