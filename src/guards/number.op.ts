import { isNumber } from './number.ts'
import { makeOptionalGuard } from './optional.ts'

export const isOptionalNumber: (candidate: unknown) => candidate is number | undefined = makeOptionalGuard(isNumber)
