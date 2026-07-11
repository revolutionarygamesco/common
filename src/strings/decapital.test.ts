import { describe, it, expect } from 'vitest'
import decapitalize from './decapital.ts'

describe('decapitalize', () => {
  it('decapitalizes the first letter in a string', () => {
    const actual = decapitalize('Lorem ipsum')
    expect(actual).toBe('lorem ipsum')
  })
})
