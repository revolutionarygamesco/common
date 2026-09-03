import { describe, it, expectTypeOf } from 'vitest'
import { isDateArray } from './date.arr.ts'

describe('isDateArray', () => {
  it('narrows unknown to Date[]', () => {
    const candidate: unknown = [new Date()]
    if (isDateArray(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<Date[]>()
      expectTypeOf(candidate).not.toEqualTypeOf<unknown[]>()
    }
  })
})
