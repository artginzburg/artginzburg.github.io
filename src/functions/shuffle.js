export function shuffle(array) {
  const result = [...array];
  let i = result.length;
  let randomIndex;

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
