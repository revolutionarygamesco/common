import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from './primitives.ts'
import { getObjectRecord } from './object-record.ts'

describe('getObjectRecord', () => {
  it.each(getPrimitivesExcept('an empty object'))('returns false if given %s', (_label, value) => {
    expect(getObjectRecord(value)).toBe(false)
  })

  it.each([
    ['an empty object', {}],
    ['an arbitrary object', { a: 1 }]
  ] as Array<[string, unknown]>)('returns a Record<string, unknown> if given %s', (_label, value) => {
    expect(getObjectRecord(value)).toEqual(value)
  })
})
