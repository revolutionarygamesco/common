import { describe, it, expect } from 'vitest'
import { selectRandomVariation } from './variation.ts'

describe('selectRandomVariation', () => {
  it('selects one of the variations', () => {
    const valid = ['a', 'b', 'c']
    expect(valid).toContain(selectRandomVariation('a / b / c'))
  })

  it('isn’t thrown off by spaces', () => {
    const valid = ['hello darkness', 'my old friend']
    expect(valid).toContain(selectRandomVariation('hello darkness / my old friend'))
  })

  it('returns the only variation if that’s all there is', () => {
    expect(selectRandomVariation('a')).toBe('a')
  })
})
