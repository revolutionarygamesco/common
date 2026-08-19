import { getObjectRecord } from '../object-record.ts'
import { isString } from './string.ts'

export const makeRecordGuard = <T>(
  singular: (candidate: unknown) => candidate is T
): (candidate: unknown) => candidate is Record<string, T> => {
  return (candidate: unknown): candidate is Record<string, T> => {
    const obj = getObjectRecord(candidate)
    if (!obj) return false
    return Object.keys(obj).every(key => isString(key) && singular(obj[key]))
  }
}
