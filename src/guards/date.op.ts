import { isDate } from './date.ts'

export const isOptionalDate = (
  candidate: unknown
): candidate is Date | undefined => {
  return candidate === undefined || isDate(candidate)
}
