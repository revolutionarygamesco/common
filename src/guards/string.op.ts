import { isString } from './string.ts'
import { makeOptionalGuard } from './optional.ts'

export const isOptionalString: (candidate: unknown) => candidate is string | undefined = makeOptionalGuard(isString)
