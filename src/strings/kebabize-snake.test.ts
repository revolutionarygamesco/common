import { describe, it, expect } from 'vitest'
import { kebabizeSnake } from './kebabize-snake.ts'

describe('kebabizeSnake', () => {
  it('kebabize a snake', () => {
    expect(kebabizeSnake('test_string')).toBe('test-string')
  })
})
