import { describe, it, expect } from 'vitest'
import { interpolate } from './interpolate.ts'

describe('interpolate', () => {
  const dict = { name: { born: 'Aragorn', north: 'Strider', regnal: 'Elessar' } }

  it('interpolates values from the dictionary', () => {
    const str = '...around here, he’s known as {name.north}.'
    const actual = interpolate(str, dict)
    expect(actual).toBe('...around here, he’s known as Strider.')
  })

  it('leaves key where not found', () => {
    const str = '...around here, he’s known as {name.nope}.'
    const actual = interpolate(str, dict)
    expect(actual).toBe('...around here, he’s known as name.nope.')
  })

  it('interpolates multiple values', () => {
    const str = '{name.born} took the regnal name {name.regnal}.'
    const actual = interpolate(str, dict)
    expect(actual).toBe('Aragorn took the regnal name Elessar.')
  })
})
