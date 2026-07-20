import { describe, it, expect } from 'vitest'
import { parseFloatOr } from './parse-float.ts'

describe('parseFloatOr', () => {
  it('parses integers', () => {
    const actual = parseFloatOr('3.1415', 1)
    expect(actual).toBeCloseTo(3.1415)
  })

  it('returns fallback if not given a number', () => {
    const actual = parseFloatOr('nope', 1)
    expect(actual).toBe(1)
  })
})
