import { describe, it, expect } from 'vitest'
import { dedupe } from './dedupe.ts'

type DedupableArray = Array<string | number | boolean>

describe('dedupe', () => {
  it.each([
    ['strings', ['a', 'a'], ['a']],
    ['numbers', [1, 1], [1]],
    ['booleans', [true, true], [true]]
  ] as Array<[string, DedupableArray, DedupableArray]>)('will dedupe an array of %s', (_type: string, orig: DedupableArray, expected: DedupableArray) => {
    const actual = dedupe(orig)
    expect(actual).toEqual(expected)
  })
})
