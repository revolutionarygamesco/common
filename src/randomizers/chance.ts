import { selectRandomBetween } from './between.ts'

export const chance = (
  chances: number = 1,
  total: number = 100
): boolean => {
  const roll = selectRandomBetween(1, total)
  return roll <= chances
}
