import { describe, it, expect } from 'vitest'
import { changeInitialCase } from './change-initial-case.ts'

describe('changeInitialCase', () => {
  it('can capitalize the first letter in a string', () => {
    const actual = changeInitialCase('lorem ipsum', 'upper')
    expect(actual).toBe('Lorem ipsum')
  })

  it('can decapitalize the first letter in a string', () => {
    const actual = changeInitialCase('Lorem ipsum', 'lower')
    expect(actual).toBe('lorem ipsum')
  })

  it('defaults to capitalization', () => {
    const actual = changeInitialCase('lorem ipsum')
    expect(actual).toBe('Lorem ipsum')
  })
})
