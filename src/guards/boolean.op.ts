import { isBoolean } from './boolean.ts'

export const isOptionalBoolean = (
  candidate: unknown
): candidate is boolean | undefined => {
  return candidate === undefined || isBoolean(candidate)
}
