import { describe, it, expect } from 'vitest'
import { getAllPartials } from './partials.ts'
import { hasAll } from './all.ts'

describe('hasAll', () => {
  const full = { a: 1, b: 2, c: 3 }
  const required = ['a', 'b', 'c']

  it('returns true if the object has all the listed properties', () => {
    expect(hasAll(full, required)).toBe(true)
  })

  it('returns false if the object lacks any listed properties', () => {
    const objects = getAllPartials(full)
    for (const object of objects) {
      const expected = required.every(key => Object.keys(object).includes(key))
      expect(hasAll(object, required)).toBe(expected)
    }
  })
})
