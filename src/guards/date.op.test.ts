import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isOptionalDate } from './date.op.ts'

describe('isOptionalDate', () => {
  it.each([
    ...getPrimitivesExcept('undefined')
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isOptionalDate(candidate)).toBe(false)
  })

  it.each([
    ['a date', new Date()],
    ['undefined', undefined]
  ] as Array<[string, any]>)('accepts %s', (_label, candidate) => {
    expect(isOptionalDate(candidate)).toBe(true)
  })
})
