import { describe, it, expect } from 'vitest'
import primitives, { getPrimitivesExcept } from './primitives.ts'

describe('getPrimitivesExcept', () => {
  it.each(primitives)('can return all primitives except %s', (_label, value) => {
    const actual = getPrimitivesExcept(value)
    expect(actual).toHaveLength(primitives.length - 1)
    expect(actual.filter(p => p[1] === value)).toHaveLength(0)
  })
})
