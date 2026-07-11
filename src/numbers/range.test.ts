import { describe, it, expect } from 'vitest'
import { isWithinRange } from './range.ts'

describe('isWithinRange', () => {
  const range = [1, 10]

  it.each([
    [false, 'number is below range', range[0] - 1, true],
    [false, 'number is at bottom of range (exclusive)', range[0], false],
    [true, 'number is at bottom of range (inclusive)', range[0], true],
    [true, 'number is within range', range[0] + 1, true],
    [true, 'number is at top of range (inclusive)', range[1], true],
    [false, 'number is at top of ange (exclusive)', range[1], false],
    [false, 'number is above range', range[1] + 1, true]
  ])('returns %s if %s', (expected, _desc, value, inclusive) => {
    expect(isWithinRange(value, range, inclusive)).toBe(expected)
  })
})
