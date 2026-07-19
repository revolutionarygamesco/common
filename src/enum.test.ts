import { describe, it, expect } from 'vitest'
import { primitives } from './testing/primitives.ts'
import { makeEnum } from './enum.ts'

describe('makeEnum', () => {
  const options = ['a', 'b', 'c'] as const
  const { guard, randomizer } = makeEnum(options)

  it.each(primitives)('creates a type guard that rejects %s', (_label, value) => {
    expect(guard(value)).toBe(false)
  })

  it.each([...options] as string[])('creates a type guard that accepts %s', (value) => {
    expect(guard(value)).toBe(true)
  })

  it('creates a randomizer', () => {
    expect(options).toContain(randomizer())
  })
})
