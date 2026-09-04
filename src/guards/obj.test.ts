import { describe, beforeAll, it, expect } from 'vitest'
import { primitives } from '../testing/index.ts'
import { isTest } from './obj.test-d.ts'

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
})
