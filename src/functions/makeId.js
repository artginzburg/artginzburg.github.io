const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

export function makeId(length) {
  const result = [];
  let i = 0;
  while (i < length) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    i++;
  }
  return result;
}
