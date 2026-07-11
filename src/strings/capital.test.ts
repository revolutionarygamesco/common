import { describe, it, expect } from 'vitest'
import { capitalize } from './capital.ts'

describe('capitalize', () => {
  it('capitalizes the first letter in a string', () => {
    const actual = capitalize('lorem ipsum')
    expect(actual).toBe('Lorem ipsum')
  })
})
