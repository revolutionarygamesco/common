import { describe, it, expect } from 'vitest'
import { primitives } from '../testing/index.ts'
import { isOptionalBoolean } from './boolean.op.ts'
import { makeObjectGuard, type GuardShape } from './obj.ts'
import { isTest, testShape, type Test } from './obj.test-d.ts'

interface OptionalTest extends Test {
  other?: boolean
}

const optionalTestShape: GuardShape<OptionalTest> = {
  ...testShape,
  other: isOptionalBoolean
}

export const isOptionalTest: (candidate: unknown) => candidate is OptionalTest = makeObjectGuard<OptionalTest>(optionalTestShape)

describe('makeObjectGuard', () => {
  it.each([
    ...primitives,
    ['a partial', { n: 1 }],
    ['an object with additional properties', { n: 1, name: 'A', other: true }]
  ])('rejects %s', (_label, value) => {
    expect(isTest(value)).toBe(false)
  })

  it('accepts a valid object', () => {
    expect(isTest({ n: 1, name: 'A' })).toBe(true)
  })

  it('doesn’t require optional fields', () => {
    expect(isOptionalTest({ n: 1, name: 'A' })).toBe(true)
  })
})
