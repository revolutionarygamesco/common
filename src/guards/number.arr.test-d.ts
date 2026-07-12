import { describe, it, expectTypeOf } from 'vitest'
import { isNumberArray } from './number.arr.ts'

describe('isNumberArray', () => {
  it('narrows unknown to number[]', () => {
    const candidate: unknown = [1, 2]
    if (isNumberArray(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<number[]>()
      expectTypeOf(candidate).not.toEqualTypeOf<unknown[]>()
    }
  })
})
