import isString from './string.ts'

const makeStringUnionGuard = <T extends string>(
  values: readonly T[]
): (candidate: unknown) => candidate is T => {
  return (candidate: unknown): candidate is T => {
    const ro = values as readonly string[]
    return isString(candidate) && ro.includes(candidate)
  }
}

export default makeStringUnionGuard
