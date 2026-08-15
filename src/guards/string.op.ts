import { isString } from './string.ts'

export const isOptionalString = (
  candidate: unknown
): candidate is string | undefined => {
  return candidate === undefined || isString(candidate)
}
