import { describe, it, expect } from 'vitest'
import { dedupe } from './dedupe.ts'

describe('dedupe', () => {
  it.each([
    ['strings', ['a', 'a'], ['a']],
    ['numbers', [1, 1], [1]],
    ['booleans', [true, true], [true]]
  ] as Array<[string, Array<unknown>, Array<unknown>]>)('will dedupe an array of %s', (_type: string, orig: Array<unknown>, expected: Array<unknown>) => {
    const actual = dedupe(orig)
    expect(actual).toEqual(expected)
  })
})
