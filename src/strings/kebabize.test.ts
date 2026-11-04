import { describe, it, expect } from 'vitest'
import { kebabize } from './kebabize.ts'

describe('kebabize', () => {
  it('turns an array of strings into a kebab-case string', () => {
    expect(kebabize(['Test', 'String'])).toBe('test-string')
  })
})
