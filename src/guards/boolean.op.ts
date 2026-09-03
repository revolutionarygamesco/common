import { isBoolean } from './boolean.ts'
import { makeOptionalGuard } from './optional.ts'

export const isOptionalBoolean: (candidate: unknown) => candidate is boolean | undefined = makeOptionalGuard(isBoolean)
