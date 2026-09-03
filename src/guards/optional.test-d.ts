import { describe, it, expectTypeOf } from 'vitest'
import { isNumber } from './number.ts'
import { makeOptionalGuard } from './optional.ts'

describe('makeOptionalGuard', () => {
  it('creates a type guard for T | undefined', () => {
    const isOptionalNumber = makeOptionalGuard(isNumber)
    expectTypeOf(isOptionalNumber).toEqualTypeOf<(candidate: unknown) => candidate is number | undefined>()
  })

  it('narrows unknown to T | undefined', () => {
    const isOptionalNumber = makeOptionalGuard(isNumber)
    const candidate: unknown = 42
    if (isOptionalNumber(candidate)) expectTypeOf(candidate).toEqualTypeOf<number | undefined>()
  })
})
