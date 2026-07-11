import { describe, beforeEach, it, expect } from 'vitest'
import selectRandomBetween from './between.ts'

describe('selectRandomBetween', () => {
  let actual: number = NaN

  beforeEach(() => {
    actual = selectRandomBetween(1, 10)
  })

  it('does not return a number lower than the range', () => {
    expect(0).toBeLessThan(actual)
  })

  it('returns a number greater than or equal to the bottom of the range', () => {
    expect(1).toBeLessThanOrEqual(actual)
  })

  it('returns a number less than or equal to the top of the range', () => {
    expect(10).toBeGreaterThanOrEqual(actual)
  })

  it('does not return a number greater than the range', () => {
    expect(11).toBeGreaterThan(actual)
  })
})
