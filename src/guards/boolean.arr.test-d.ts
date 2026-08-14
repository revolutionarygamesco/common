import { describe, it, expectTypeOf } from 'vitest'
import { isBooleanArray } from './boolean.arr.ts'

describe('isBooleanArray', () => {
  it('narrows unknown to boolean[]', () => {
    const candidate: unknown = [true, false]
    if (isBooleanArray(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<boolean[]>()
      expectTypeOf(candidate).not.toEqualTypeOf<unknown[]>()
    }
  })
})
