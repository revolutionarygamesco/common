import { describe, it, expectTypeOf } from 'vitest'
import { makeArrayGuard } from './array.ts'
import { isNumber } from './number.ts'

describe('makeArrayGuard', () => {
  it('creates a type guard for T[]', () => {
    const isNumberArr = makeArrayGuard(isNumber)
    expectTypeOf(isNumberArr).toEqualTypeOf<(candidate: unknown) => candidate is number[]>()
  })

  it('narrows unknown to T[]', () => {
    const isNumberArr = makeArrayGuard(isNumber)
    const candidate: unknown = [1, 2, 3]
    if (isNumberArr(candidate)) expectTypeOf(candidate).toEqualTypeOf<number[]>()
  })
})
