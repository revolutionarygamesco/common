import { describe, it, expectTypeOf } from 'vitest'
import { isStringArray } from './string.arr.ts'

describe('isStringArray', () => {
  it('narrows unknown to string[]', () => {
    const candidate: unknown = ['a', 'b']
    if (isStringArray(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<string[]>()
      expectTypeOf(candidate).not.toEqualTypeOf<unknown[]>()
    }
  })
})
