import { describe, beforeAll, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isNumber } from './number.ts'
import { makeOptionalGuard } from './optional.ts'

describe('makeOptionalGuard', () => {
  let isOptionalNumber: (candidate: unknown) => candidate is Number | undefined

  beforeAll(() => {
    isOptionalNumber = makeOptionalGuard(isNumber)
  })

  it.each([
    ...getPrimitivesExcept('undefined', 'a number')
  ])('rejects %s', (_label, value) => {
    expect(isOptionalNumber(value)).toBe(false)
  })

  it.each([
    ['a number', 42],
    ['undefined', undefined]
  ])('accepts %s', (_label, value) => {
    expect(isOptionalNumber(value)).toBe(true)
  })
})
