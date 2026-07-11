import { describe, it, expect } from 'vitest'
import { primitives, getPrimitivesExcept } from './primitives.ts'

describe('getPrimitivesExcept', () => {
  it.each(primitives)('can return all primitives except %s', (label, _) => {
    const actual = getPrimitivesExcept(label)
    expect(actual).toHaveLength(primitives.length - 1)
    expect(actual.filter(p => p[0] === label)).toHaveLength(0)
  })
})
