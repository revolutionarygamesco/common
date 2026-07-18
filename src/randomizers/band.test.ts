import { describe, it, expect } from 'vitest'
import { selectRandomBand } from './band.ts'

describe('selectFromBands', () => {
  const value = 'Hello, world!'
  it('selects an item randomly from bands (like a roll table)', () => {
    const actual = selectRandomBand<string>([
      { range: [1, 100], value }
    ])

    expect(actual).toBe(value)
  })
})
