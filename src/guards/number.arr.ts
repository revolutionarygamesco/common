import isNumber from './number.ts'
import makeArrayGuard from './array.ts'

const isNumberArray: (candidate: unknown) => candidate is number[] = makeArrayGuard<number>(isNumber)
export default isNumberArray
