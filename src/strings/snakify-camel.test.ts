import { describe, it, expect } from 'vitest'
import { snakifyCamel } from './snakify-camel.ts'

describe('snakifyCamel', () => {
  it('snakifies a camel', () => {
    expect(snakifyCamel('testString')).toBe('test_string')
  })
})
