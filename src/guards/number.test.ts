import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/primitives.ts'
import isNumber from './number.ts'

describe('isNumber', () => {
  it.each([
    ...getPrimitivesExcept('a number'),
    ['NaN', NaN]
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isNumber(candidate)).toBe(false)
  })

  it.each([
    ['0', 0],
    ['a negative number', -1],
    ['a positive number', 1]
  ] as Array<[string, any]>)('accepts %s', (_label, candidate) => {
    expect(isNumber(candidate)).toBe(true)
  })
})
