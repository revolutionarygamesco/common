import { describe, it, expect } from 'vitest'
import { chance } from './chance.ts'

describe('chance', () => {
  it('returns true or false according to the chances', () => {
    expect([true, false]).toContain(chance(1, 2))
  })
})
