import isString from './string.ts'
import makeArrayGuard from './array.ts'

const isStringArray: (candidate: unknown) => candidate is string[] = makeArrayGuard<string>(isString)
export default isStringArray
