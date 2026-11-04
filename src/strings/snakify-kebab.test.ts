import { describe, it, expect } from 'vitest'
import { snakifyKebab } from './snakify-kebab.ts'

describe('snakifyKebab', () => {
  it('snakifies a kebab', () => {
    expect(snakifyKebab('test-string')).toBe('test_string')
  })
})
