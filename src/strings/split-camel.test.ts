import { describe, it, expect } from 'vitest'
import { splitCamel } from './split-camel.ts'

describe('splitCamel', () => {
  it('splits a camel', () => {
    expect(splitCamel('testString')).toEqual(['test', 'String'])
  })
})
