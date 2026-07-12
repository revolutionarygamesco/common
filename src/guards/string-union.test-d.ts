import { describe, it, expectTypeOf } from 'vitest'
import { makeStringUnionGuard } from './string-union.ts'

describe('makeStringUnionGuard', () => {
  it('narrows unknown to the literal union', () => {
    const isTest = makeStringUnionGuard(['a', 'b', 'c'])
    const candidate: unknown = 'a'
    if (isTest(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<'a' | 'b' | 'c'>()
    }
  })

  it('infers literals without `as const` (T extends string), and stays literal with it', () => {
    const isTest = makeStringUnionGuard(['a', 'b'] as const)
    const candidate: unknown = 'a'
    if (isTest(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<'a' | 'b'>()
      expectTypeOf(candidate).not.toEqualTypeOf<string>()
    }
  })
})
