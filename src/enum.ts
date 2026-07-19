import { makeStringUnionGuard } from './guards/string-union.ts'
import { selectRandomElement } from './randomizers/el.ts'

export interface Enumerable<T extends readonly string[]> {
  guard: (candidate: unknown) => candidate is T[number]
  randomizer: () => T[number]
}

export const makeEnum = <const T extends readonly string[]>(
  values: T
): Enumerable<T> => ({
  guard: makeStringUnionGuard<T[number]>(values),
  randomizer: (): T[number] => selectRandomElement([...values])
})
