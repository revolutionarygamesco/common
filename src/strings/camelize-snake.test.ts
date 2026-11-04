import { describe, it, expect } from 'vitest'
import { camelizeSnake } from './camelize-snake.ts'

describe('camelizeSnake', () => {
  it('camelizes a snake', () => {
    expect(camelizeSnake('test_string')).toBe('testString')
  })
})
