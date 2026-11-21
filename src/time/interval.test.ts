import { describe, it, expect } from 'vitest'
import { intervalToMS } from './interval.ts'

describe('intervalToMS', () => {
  it.each([
    ['1 second', 1000],
    ['2 seconds', 2 * 1000],
    ['10 seconds', 10* 1000],
    ['1 minute', 60 * 1000],
    ['2 minutes', 2 * 60 * 1000],
    ['10 minutes', 10 * 60 * 1000],
    ['1 hour', 60 * 60 * 1000],
    ['2 hours', 2 * 60 * 60 * 1000],
    ['10 hours', 10 * 60 * 60 * 1000],
    ['1 day', 24 * 60 * 60 * 1000],
    ['2 days', 2 * 24 * 60 * 60 * 1000],
    ['10 days', 10 * 24 * 60 * 60 * 1000],
    ['1 week', 7 * 24 * 60 * 60 * 1000],
    ['2 weeks', 2 * 7 * 24 * 60 * 60 * 1000],
    ['10 weeks', 10 * 7 * 24 * 60 * 60 * 1000]
  ] as Array<[string, number]>)('returns the number of milliseconds in %s', (interval, expected) => {
    expect(intervalToMS(interval)).toBe(expected)
  })

  it('returns -1 if the interval cannot be parsed', () => {
    expect(intervalToMS('lol')).toBe(-1)
  })

  it('can handle floats', () => {
    const est = 12 * 60 * 60
    expect(intervalToMS('0.5 days')).toBeGreaterThan((est - 30) * 1000)
    expect(intervalToMS('0.5 days')).toBeLessThan((est + 30) * 1000)
  })
})
