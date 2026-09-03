import { describe, it, expect } from 'vitest'
import { getAllPartials } from './partials.ts'

describe('getAllPartials', () => {
  it('returns all possible partials of an object', () => {
    const full = { a: 1, b: 2 }
    expect(getAllPartials(full)).toEqual([
      {},
      { a: 1 },
      { b: 2 },
      full,
    ])
  })
})
