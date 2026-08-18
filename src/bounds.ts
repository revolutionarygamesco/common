import { isWithinRange } from './numbers/range.ts'

export const isWithinBounds = (
  n: number,
  arr: Array<any>
): boolean => {
  return isWithinRange(n, [0, arr.length - 1])
}
