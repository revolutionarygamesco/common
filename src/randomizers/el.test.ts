import { describe, it, expect, expectTypeOf } from 'vitest'
import { selectRandomElement } from './el.ts'

describe('selectRandomElement', () => {
  it('selects a random element from an array', () => {
    const arr = ['a', 'b', 'c']
    const actual = selectRandomElement<string>(arr)
    expect(arr).toContain(actual)
    expectTypeOf(actual).toBeString()
  })

  it('handles generic types', () => {
    interface Test {
      str: string
    }
    const arr: Test[] = [{ str: 'a' }, { str: 'b' }, { str: 'c' }]
    const actual = selectRandomElement<Test>(arr)
    expectTypeOf(actual).toEqualTypeOf<Test>()
  })
})
