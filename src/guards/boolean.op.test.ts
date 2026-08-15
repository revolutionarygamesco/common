import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isOptionalBoolean } from './boolean.op.ts'

describe('isOptionalBoolean', () => {
  it.each([
    ...getPrimitivesExcept('true', 'false', 'undefined'),
    ['NaN', NaN]
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isOptionalBoolean(candidate)).toBe(false)
  })

  it.each([true, false, undefined] as boolean[])('accepts %s', (candidate) => {
    expect(isOptionalBoolean(candidate)).toBe(true)
  })
})
