import { describe, it, expectTypeOf } from 'vitest'
import { makeEnum } from './enum.ts'

describe('makeEnum', () => {
  const options = ['a', 'b', 'c'] as const

  it('creates a type guard', () => {
    const { guard } = makeEnum(options)
    const candidate: unknown = 'a'
    if (guard(candidate)) {
      expectTypeOf(candidate).toEqualTypeOf<'a' | 'b' | 'c'>()
    }
  })

  it('creates a randomizer', () => {
    const { randomizer } = makeEnum(options)
    expectTypeOf(randomizer()).toEqualTypeOf<'a' | 'b' | 'c'>()
    expectTypeOf(randomizer()).not.toEqualTypeOf<string>()
  })
})
