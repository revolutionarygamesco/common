import { isObject } from '../guards/object.ts'

export const getObjectRecord = (
  candidate: unknown
): false | Record<string, unknown> => {
  if (!isObject(candidate)) return false
  return candidate as Record<string, unknown>
}
