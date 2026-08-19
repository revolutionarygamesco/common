import { describe, beforeAll, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { isNumber } from './number.ts'
import { makeRecordGuard } from './record.ts'

describe('makeRecordGuard', () => {
  let isNumberRecord: (candidate: unknown) => candidate is Record<string, number>

  beforeAll(() => {
    isNumberRecord = makeRecordGuard(isNumber)
  })

  it.each([
    ...getPrimitivesExcept('an empty object'),
    ['a record with things other than numbers', { a: 1, b: '2' }]
  ])('rejects %s', (_label, value) => {
    expect(isNumberRecord(value)).toBe(false)
  })

  it.each([
    ['an empty object', {}],
    ['a record of numbers', { a: 1, b: 2 }]
  ])('accepts %s', (_label, value) => {
    expect(isNumberRecord(value)).toBe(true)
  })
})
