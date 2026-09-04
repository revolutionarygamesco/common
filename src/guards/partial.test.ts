import { describe, it, expect } from 'vitest'
import { getPrimitivesExcept } from '../testing/index.ts'
import { getAllPartials } from '../properties/partials.ts'
import { isTestPartial } from './partial.test-d.ts'

describe('makePartialGuard', () => {
  const partials: Array<[string, unknown]> = getAllPartials({ n: 1, name: 'A' })
    .map(partial => {
      const keys = Object.keys(partial)
      if (keys.length === 0) return ['an empty object', {}]
      return [keys.join(', '), partial]
    })

  it.each([
    ...getPrimitivesExcept('an empty object'),
    ['an object with additional properties', { n: 1, name: 'A', other: true }]
  ])('rejects %s', (_label, value) => {
    expect(isTestPartial(value)).toBe(false)
  })

  it.each(partials)('accepts %s', (_label, value) => {
    expect(isTestPartial(value)).toBe(true)
  })
})
