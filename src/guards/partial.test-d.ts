import { describe, it, expectTypeOf } from 'vitest'
import { testShape, type Test } from './obj.test-d.ts'
import { makePartialGuard } from './partial.ts'

export const isTestPartial: (candidate: unknown) => candidate is Partial<Test> = makePartialGuard<Test>(testShape)

describe('makePartialGuard', () => {
  it('creates a type guard for Partial<T>', () => {
    expectTypeOf(isTestPartial).toEqualTypeOf<(candidate: unknown) => candidate is Partial<Test>>()
  })

  it('narrows unknown to Partial<T>', () => {
    const candidate: unknown = { n: 1 }
    if (isTestPartial(candidate)) expectTypeOf(candidate).toEqualTypeOf<Partial<Test>>()
  })
})
