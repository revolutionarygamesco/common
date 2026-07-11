import { describe, it, expect } from 'vitest'
import { radiansToDegrees } from './rad-deg.ts'

describe('radiansToDegrees', () => {
  it.each([
    [0, 0],
    [1.57, 89.95],
    [3.14, 179.91],
    [4.71, 269.86],
    [6.28, 359.82]
  ] as [number, number][])('converts %d radians to %d°', (radians, degrees) => {
    expect(radiansToDegrees(radians)).toBeCloseTo(degrees)
  })
})
