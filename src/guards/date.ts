import { isNumber } from './number.ts'

export const isDate = (
  value: unknown
): value is Date => {
  return value instanceof Date && isNumber(value.getTime())
}
