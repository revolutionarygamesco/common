import { isDate } from './date.ts'
import { makeArrayGuard } from './array.ts'

export const isDateArray: (
  candidate: unknown
) => candidate is Date[] = makeArrayGuard<Date>(isDate)
