import { describe, it, expect } from 'vitest'
import { isWithinBounds } from './bounds.ts'

describe('isWithinBounds', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it.each([
    [false, 'a number below zero', -1],
    [true, 'zero', 0],
    [true, 'the highest possible index', arr.length - 1],
    [false, 'the length of the index', arr.length],
    [false, 'something greater than the length of the index', 500]
  ])('returns %s if %s', (expected, _desc, value) => {
    expect(isWithinBounds(value, arr)).toBe(expected)
  })
})
