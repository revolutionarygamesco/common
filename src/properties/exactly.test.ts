import { describe, it, expect } from 'vitest'
import { getAllPartials } from './partials.ts'
import { hasExactly } from './exactly.ts'

describe('hasExactly', () => {
  const full = { a: 1, b: 2, c: 3 }
  const required = ['a', 'b', 'c']

  it('returns true if the object has all the listed properties and no others', () => {
    expect(hasExactly(full, required)).toBe(true)
  })

  it('returns false if the object lacks any listed properties', () => {
    const objects = getAllPartials(full)
    for (const object of objects) {
      const expected = required.every(key => Object.keys(object).includes(key))
      expect(hasExactly(object, required)).toBe(expected)
    }
  })

  it('returns false if the object has any additional properties', () => {
    expect(hasExactly({ ...full, d: 4 }, required)).toBe(false)
  })
})
