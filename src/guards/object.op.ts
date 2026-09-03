import { isObject } from './object.ts'
import { makeOptionalGuard } from './optional.ts'

export const isOptionalObject: (candidate: unknown) => candidate is object | undefined = makeOptionalGuard(isObject)
