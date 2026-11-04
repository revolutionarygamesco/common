import { describe, it, expect } from 'vitest'
import { camelize } from './camelize.ts'

describe('camelize', () => {
  it('turns an array of strings into a camel-case string', () => {
    expect(camelize(['test', 'string'])).toBe('testString')
  })
})
