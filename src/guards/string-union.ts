import { isString } from './string.ts'

export const makeStringUnionGuard = <T extends string>(
  values: readonly T[]
): (candidate: unknown) => candidate is T => {
  return (candidate: unknown): candidate is T => {
    const ro = values as readonly string[]
    return isString(candidate) && ro.includes(candidate)
  }
}
