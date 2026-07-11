import { describe, it, expect } from 'vitest'
import { makeStringUnion } from './union.ts'

describe('makeStringUnion', () => {
  it('returns a readonly array of strings', () => {
    const orig = ['a', 'b', 'c']
    const actual = makeStringUnion(...orig)
    for (const value of orig) expect(actual).toContain(value)
  })
})
