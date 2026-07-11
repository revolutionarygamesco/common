import { selectRandomBetween } from './between.ts'

export const selectRandomElement = <T>(arr: T[]): T => {
  const index = selectRandomBetween(0, arr.length - 1)
  return arr[index]
}
