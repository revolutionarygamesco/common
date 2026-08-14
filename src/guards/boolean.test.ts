import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isBoolean } from './boolean.ts'

describe('isBoolean', () => {
  it.each([
    ...getPrimitivesExcept('true', 'false'),
    ['NaN', NaN]
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isBoolean(candidate)).toBe(false)
  })

  it.each([true, false] as boolean[])('accepts %s', (candidate) => {
    expect(isBoolean(candidate)).toBe(true)
  })
})
