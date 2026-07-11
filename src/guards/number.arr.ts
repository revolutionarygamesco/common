import { isNumber } from './number.ts'
import { makeArrayGuard } from './array.ts'

export const isNumberArray: (
  candidate: unknown
) => candidate is number[] = makeArrayGuard<number>(isNumber)
