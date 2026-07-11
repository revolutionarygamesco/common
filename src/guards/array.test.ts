import { describe, beforeAll, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/primitives.ts'
import { isNumber } from './number.ts'
import { makeArrayGuard } from './array.ts'

describe('makeArrayGuard', () => {
  let isNumberArray: (candidate: unknown) => candidate is Number[]

  beforeAll(() => {
    isNumberArray = makeArrayGuard(isNumber)
  })

  it.each([
    ...getPrimitivesExcept('an empty array'),
    ['an array with things other than numbers', [1, 2, '3']]
  ])('rejects %s', (_label, value) => {
    expect(isNumberArray(value)).toBe(false)
  })

  it.each([
    ['an empty array', []],
    ['an array of numbers', [1, 2, 3]]
  ])('accepts %s', (_label, value) => {
    expect(isNumberArray(value)).toBe(true)
  })
})
