import { describe, it, expect } from 'vitest'
import { splitKebab } from './split-kebab.ts'

describe('splitKebab', () => {
  it('splits a kebab', () => {
    expect(splitKebab('test-string')).toEqual(['test', 'string'])
  })
})
