import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isString } from './string.ts'

describe('isString', () => {
  it.each([
    ...getPrimitivesExcept('a string')
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isString(candidate)).toBe(false)
  })

  it('accepts a string', () => {
    expect(isString('hello world')).toBe(true)
  })
})
