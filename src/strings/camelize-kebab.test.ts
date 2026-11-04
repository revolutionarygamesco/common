import { describe, it, expect } from 'vitest'
import { camelizeKebab } from './camelize-kebab.ts'

describe('camelizeKebab', () => {
  it('camelizes a kebab', () => {
    expect(camelizeKebab('test-string')).toBe('testString')
  })
})
