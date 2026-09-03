import { describe, it, expect } from 'vitest'
import { getAllPartials } from './partials.ts'
import { hasOnly } from './only.ts'

describe('hasOnly', () => {
  const full = { a: 1, b: 2, c: 3 }
  const permitted = ['a', 'b', 'c']

  it('returns true if the object has only the listed properties', () => {
    const objects = getAllPartials(full)
    for (const object of objects) {
      expect(hasOnly(object, permitted)).toBe(true)
    }
  })

  it('returns false if the object has any other properties', () => {
    expect(hasOnly({ ...full, d: 4 }, permitted)).toBe(false)
  })
})
