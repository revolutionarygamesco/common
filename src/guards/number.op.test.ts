import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isOptionalNumber } from './number.op.ts'

describe('isOptionalNumber', () => {
  it.each([
    ...getPrimitivesExcept('a number', 'undefined'),
    ['NaN', NaN]
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isOptionalNumber(candidate)).toBe(false)
  })

  it.each([
    ['0', 0],
    ['a negative number', -1],
    ['a positive number', 1],
    ['undefined', undefined]
  ] as Array<[string, any]>)('accepts %s', (_label, candidate) => {
    expect(isOptionalNumber(candidate)).toBe(true)
  })
})
