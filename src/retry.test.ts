import { describe, it, expect } from 'vitest'
import { retryUntil } from './retry.ts'

describe('retryUntil', () => {
  const validFn = async () => true
  const invalidFn = async () => false
  const validator = (value: boolean) => value
  const options = { attempts: 10, fallback: false }

  it('returns a valid item', async () => {
    const actual = await retryUntil<boolean>(validFn, validator, options)
    expect(actual).toBe(true)
  })

  it('returns the fallback if attempts run out', async () => {
    const actual = await retryUntil<boolean>(invalidFn, validator, options)
    expect(actual).toBe(false)
  })
})
