export function adaptMoneyValue(value: number) {
  return value.toFixed(2).toString().replace('.', ',')
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
