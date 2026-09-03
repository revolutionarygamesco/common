import { describe, it, expect } from 'vitest'
import { primitives } from '../testing/index.ts'
import { isDate } from './date.ts'

describe('isDate', () => {
  it.each(primitives)('rejects %s', (_label, candidate) => {
    expect(isDate(candidate)).toBe(false)
  })

  it('accepts a date', () => {
    expect(isDate(new Date())).toBe(true)
  })
})
