import { describe, it, expectTypeOf } from 'vitest'
import { isNumber } from './number.ts'
import { isString } from './string.ts'
import { makeObjectGuard, type GuardShape } from './obj.ts'

export interface Test {
  n: number
  name: string
}

export const testShape: GuardShape<Test>  = {
  n: isNumber,
  name: isString
}

export const isTest: (candidate: unknown) => candidate is Test = makeObjectGuard<Test>(testShape)

describe('makeObjectGuard', () => {
  it('creates a type guard for T', () => {
    expectTypeOf(isTest).toEqualTypeOf<(candidate: unknown) => candidate is Test>()
  })

  it('narrows unknown to T', () => {
    const candidate: unknown = { n: 1, name: 'A' }
    if (isTest(candidate)) expectTypeOf(candidate).toEqualTypeOf<Test>()
  })
})
