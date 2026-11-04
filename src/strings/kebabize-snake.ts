import { splitSnake } from './split-snake.ts'
import { kebabize } from './kebabize.ts'

export const kebabizeSnake = (snake: string): string => {
  return kebabize(splitSnake(snake))
}
