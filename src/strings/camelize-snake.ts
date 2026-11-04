import { splitSnake } from './split-snake.ts'
import { camelize } from './camelize.ts'

export const camelizeSnake = (snake: string): string => {
  return camelize(splitSnake(snake))
}
