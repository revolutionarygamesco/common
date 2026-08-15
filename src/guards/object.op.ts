import { isObject } from './object.ts'

export const isOptionalObject = (
  candidate: unknown
): candidate is boolean | undefined => {
  return candidate === undefined || isObject(candidate)
}
