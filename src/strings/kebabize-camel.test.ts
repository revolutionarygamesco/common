import { describe, it, expect } from 'vitest'
import { kebabizeCamel } from './kebabize-camel.ts'

describe('kebabizeCamel', () => {
  it('kebabize a camel', () => {
    expect(kebabizeCamel('testString')).toBe('test-string')
  })
})
