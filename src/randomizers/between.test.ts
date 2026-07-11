import { describe, it, expect } from 'vitest'
import { isWithinRange } from '../numbers/range.ts'
import { selectRandomBetween } from './between.ts'

describe('selectRandomBetween', () => {
  it('returns a random number between min and max', () => {
    expect(isWithinRange(selectRandomBetween(1, 10), [1, 10]))
  })
})
