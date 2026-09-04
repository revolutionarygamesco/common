import { getObjectRecord } from '../object-record.ts'
import { hasOnly } from '../properties/only.ts'

export type GuardShape<T> = {
  [K in keyof T]-?: (candidate: unknown) => candidate is T[K]
}

export const makeObjectGuard = <T extends object>(
  shape: GuardShape<T>
): (candidate: unknown) => candidate is T => {
  const keys = Object.keys(shape)
  return (candidate: unknown): candidate is T => {
    const obj = getObjectRecord(candidate)
    if (!obj) return false
    if (!hasOnly(obj, keys)) return false
    return keys.every(key => shape[key as keyof T](obj[key]))
  }
}
