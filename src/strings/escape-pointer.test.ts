import { describe, it, expect } from 'vitest'
import { escapeJSONPointer } from './escape-pointer.ts'

describe('escapeJSONPointer', () => {
  it.each([
    ['test', 'test'],
    [0, '0'],
    ['a/b', 'a~1b'],
    ['a~b', 'a~0b'],
    ['~/', '~0~1']
  ] as Array<[string, string]>)('escapes %s as %s', (pointer, expected) => {
    expect(escapeJSONPointer(pointer)).toBe(expected)
  })
})
