import { isString } from './string.ts'
import { makeArrayGuard } from './array.ts'

export const isStringArray: (
  candidate: unknown
) => candidate is string[] = makeArrayGuard<string>(isString)
