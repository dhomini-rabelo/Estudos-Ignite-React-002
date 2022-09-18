export function adaptMoneyValue(value: number) {
  return value.toFixed(2).toString().replace('.', ',')
}
