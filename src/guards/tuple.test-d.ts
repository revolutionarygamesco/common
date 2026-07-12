import { describe, it, expectTypeOf } from 'vitest'
import { makeTupleGuard } from './tuple.ts'
import { isString } from './string.ts'
import { isNumber } from './number.ts'

describe('makeTupleGuard', () => {
  it('infers the tuple type from its guards', () => {
    const isPair = makeTupleGuard(isString, isNumber)
    const candidate: unknown = ['a', 12]
    if (isPair(candidate)) expectTypeOf(candidate).toEqualTypeOf<[string, number]>()
  })

  it('is order-sensitive', () => {
    const isPair = makeTupleGuard(isNumber, isString)
    const candidate: unknown = [12, 'a']
    if (isPair(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<[number, string]>()
      expectTypeOf(candidate).not.toEqualTypeOf<[string, number]>()
    }
  })
})
