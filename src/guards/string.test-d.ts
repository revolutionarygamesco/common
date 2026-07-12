import { describe, it, expectTypeOf } from 'vitest'
import { isString } from './string.ts'

describe('isString', () => {
  it('is a string type guard', () => {
    expectTypeOf(isString).toEqualTypeOf<(candidate: unknown) => candidate is string>()
  })

  it('narrows unknown to string', () => {
    const candidate: unknown = 'hello world'
    if (isString(candidate)) expectTypeOf(candidate).toEqualTypeOf<string>()
  })

  it('remains unknown if not matched', () => {
    const candidate: unknown = 42
    if (!isString(candidate)) expectTypeOf(candidate).toEqualTypeOf<unknown>()
  })
})
