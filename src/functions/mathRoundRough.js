export function mathRoundRough(number, decimalPlaces = 2) {
  const rounder = Math.pow(10, decimalPlaces);
  return Math.floor(number * rounder) / rounder;
}
