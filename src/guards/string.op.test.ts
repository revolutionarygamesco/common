import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isOptionalString } from './string.op.ts'

describe('isOptionalString', () => {
  it.each([
    ...getPrimitivesExcept('a string', 'undefined')
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isOptionalString(candidate)).toBe(false)
  })

  it('accepts undefined', () => {
    expect(isOptionalString(undefined)).toBe(true)
  })

  it('accepts a string', () => {
    expect(isOptionalString('hello world')).toBe(true)
  })
})
