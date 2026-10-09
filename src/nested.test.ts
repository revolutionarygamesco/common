import { describe, it, expect } from 'vitest'
import { getNestedValue } from './nested.ts'

describe('getNestedValue', () => {
  const object = { a: { b: { c: 1 } } }

  it('gets a nested value', () => {
    const actual = getNestedValue(object, 'a.b.c')
    expect(actual).toBe(1)
  })

  it.each([
    ['path does not exist', 'a.c'],
    ['first element does not exist', 'b'],
    ['no elements exist', 'b.b']
  ] as Array<[string, string]>)('returns undefined if %s', (_label, path) => {
    const actual = getNestedValue(object, path)
    expect(actual).toBe(undefined)
  })
})
