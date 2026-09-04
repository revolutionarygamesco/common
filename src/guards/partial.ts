import { getObjectRecord } from '../object-record.ts'
import { hasOnly } from '../properties/only.ts'
import { type GuardShape } from './obj.ts'

export const makePartialGuard = <T extends object>(
  shape: GuardShape<T>
): (candidate: unknown) => candidate is Partial<T> => {
  const keys = Object.keys(shape)
  return (candidate: unknown): candidate is Partial<T> => {
    const obj = getObjectRecord(candidate)
    if (!obj) return false
    if (!hasOnly(obj, keys)) return false
    return keys.every(key => {
      const val = obj[key]
      return val === undefined || shape[key as keyof T](val)
    })
  }
}
