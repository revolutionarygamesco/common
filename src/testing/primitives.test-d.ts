import { describe, it, expectTypeOf } from 'vitest'
import { getPrimitivesExcept, primitives, type PrimitiveLabel } from './primitives.ts'

describe('PrimitiveLabel', () => {
  it('accepts every known label', () => {
    expectTypeOf(getPrimitivesExcept).toBeCallableWith('a string', 'a number', 'null')
  })

  it('exposes the whole array', () => {
    expectTypeOf(primitives).toEqualTypeOf<Array<[PrimitiveLabel, any]>>()
  })
})
