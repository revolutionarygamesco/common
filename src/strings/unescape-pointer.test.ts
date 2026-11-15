import { describe, it, expect } from 'vitest'
import { unescapeJSONPointer } from './unescape-pointer.ts'

describe('unescapeJSONPointer', () => {
  it.each([
    ['test', 'test'],
    ['0', '0'],
    ['a~1b', 'a/b'],
    ['a~0b', 'a~b'],
    ['~0~1', '~/']
  ] as Array<[string, string]>)('unescapes %s to %s', (escaped, expected) => {
    expect(unescapeJSONPointer(escaped)).toBe(expected)
  })
})
