import { describe, it, expect } from 'vitest'
import makeOxfordList from './oxford.ts'

describe('makeOxfordList', () => {
  it('returns a null string if not given any items', () => {
    expect(makeOxfordList()).toBe('')
  })

  it('returns a single item', () => {
    const actual = makeOxfordList(['vittles'])
    expect(actual).toBe('vittles')
  })

  it('ands two items', () => {
    const actual = makeOxfordList(['vittles', 'fresh water'])
    expect(actual).toBe('vittles and fresh water')
  })

  it('makes a list of three or more items with Oxford commas', () => {
    const actual = makeOxfordList(['vittles', 'fresh water', 'rum'])
    expect(actual).toBe('vittles, fresh water, and rum')
  })

  it('can use a different conjunction', () => {
    const actual = makeOxfordList(['vittles', 'fresh water', 'rum'], 'et')
    expect(actual).toBe('vittles, fresh water, et rum')
  })

  it('does not mutate the array passed in', () => {
    const items = ['vittles', 'fresh water', 'rum']
    makeOxfordList(items)
    expect(items).toEqual(['vittles', 'fresh water', 'rum'])
  })
})
