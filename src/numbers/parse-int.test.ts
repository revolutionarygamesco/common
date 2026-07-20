import { describe, it, expect } from 'vitest'
import { parseIntOr } from './parse-int.ts'

describe('parseIntOr', () => {
  it('parses integers', () => {
    const actual = parseIntOr('42', 1)
    expect(actual).toBe(42)
  })

  it('returns fallback if not given a number', () => {
    const actual = parseIntOr('nope', 1)
    expect(actual).toBe(1)
  })
})
