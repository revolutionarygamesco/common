import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isOptionalObject } from './object.op.ts'

describe('isOptionalObject', () => {
  it.each([
    ...getPrimitivesExcept('an empty object', 'undefined')
  ] as Array<[string, any]>)('rejects %s', (_label, candidate) => {
    expect(isOptionalObject(candidate)).toBe(false)
  })

  it.each([
    ['an empty object', {}],
    ['an arbitrary object', { a: 1 }],
    ['undefined', undefined]
  ] as Array<[string, any]>)('accepts %s', (_label, candidate) => {
    expect(isOptionalObject(candidate)).toBe(true)
  })
})
