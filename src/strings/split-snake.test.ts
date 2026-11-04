import { describe, it, expect } from 'vitest'
import { splitSnake } from './split-snake.ts'

describe('splitSnake', () => {
  it('splits a snake', () => {
    expect(splitSnake('test_string')).toEqual(['test', 'string'])
  })
})
