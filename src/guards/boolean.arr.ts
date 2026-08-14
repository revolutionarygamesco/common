import { isBoolean } from './boolean.ts'
import { makeArrayGuard } from './array.ts'

export const isBooleanArray: (
  candidate: unknown
) => candidate is boolean[] = makeArrayGuard<boolean>(isBoolean)
