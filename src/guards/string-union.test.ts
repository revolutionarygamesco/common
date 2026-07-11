import { describe, it, expect } from 'vitest'
import { primitives } from '../testing/primitives.ts'
import { makeStringUnionGuard } from './string-union.ts'

describe('makeStringUnionGuard', () => {
  const items = ['a', 'b', 'c'] as const
  const isTest = makeStringUnionGuard(items)

  it.each(primitives)('rejects %s', (_label, value) => {
    expect(isTest(value)).toBe(false)
  })

  it.each(items)('accepts %s', (item) => {
    expect(isTest(item)).toBe(true)
  })
})
