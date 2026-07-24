import { selectRandomElement } from './el.ts'

export const selectRandomVariation = (variations: string): string => {
  return selectRandomElement(variations
    .split(' / ')
    .map(variation => variation.trim()))
}
