import { isDate } from './date.ts'
import { makeOptionalGuard } from './optional.ts'

export const isOptionalDate: (candidate: unknown) => candidate is Date | undefined = makeOptionalGuard(isDate)
