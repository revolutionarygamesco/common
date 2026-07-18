import { selectRandomBetween } from './between.ts'
import { isWithinRange } from '../numbers/range.ts'

export interface RandomTableBand<T> {
  range: number[]
  value: T
}

export const selectRandomBand = <T>(
  bands: Array<RandomTableBand<T>>
): T | null => {
  const allRanges = bands.flatMap(b => b.range)
  const min = Math.min(...allRanges)
  const max = Math.max(...allRanges)
  const roll = selectRandomBetween(min, max)

  for (const { range, value } of bands) {
    if (isWithinRange(roll, range)) return value
  }

  return null
}
