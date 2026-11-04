import { describe, it, expect } from 'vitest'
import { snakify } from './snakify.ts'

describe('snakify', () => {
  it('turns an array of strings into a snake-case string', () => {
    expect(snakify(['Test', 'String'])).toBe('test_string')
  })
})
