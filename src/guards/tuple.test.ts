import { describe, beforeAll, it, expect } from 'vitest'
import primitives from '../testing/primitives.ts'
import isNumber from './number.ts'
import isString from './string.ts'
import makeTupleGuard from './tuple.ts'

describe('makeTupleGuard', () => {
  let isNumberStringTuple: (candidate: unknown) => candidate is [Number, String]

  beforeAll(() => {
    isNumberStringTuple = makeTupleGuard(isNumber, isString)
  })

  it.each([
    ...primitives,
    ['a tuple of two numbers', [1, 2]],
    ['a tuple of two strings', ['1', '2']],
    ['a tuple of a string and then a number', ['1', 2]],
    ['a valid tuple with extra elements', [1, '2', 3]]
  ])('rejects %s', (_label, value) => {
    expect(isNumberStringTuple(value)).toBe(false)
  })

  it('accepts a tuple of a number and then a string', () => {
    expect(isNumberStringTuple([1, '2'])).toBe(true)
  })
})
