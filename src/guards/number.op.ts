import { isNumber } from './number.ts'

export const isOptionalNumber = (
  candidate: unknown
): candidate is number | undefined => {
  return candidate === undefined || isNumber(candidate)
}
