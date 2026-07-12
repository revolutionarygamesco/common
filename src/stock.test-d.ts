import { describe, it, expectTypeOf } from 'vitest'
import { stockArray } from './stock.ts'

describe('stockArray', () => {
  it('infers T[] from the item type', () => {
    expectTypeOf(stockArray([{ n: 2, item: 'hello' }])).toEqualTypeOf<string[]>()
    expectTypeOf(stockArray([{ n: 3, item: 42 }])).toEqualTypeOf<number[]>()
  })
})
