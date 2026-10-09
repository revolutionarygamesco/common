import { getObjectRecord } from './object-record.ts'

export const getNestedValue = (
  obj: Record<string, unknown>,
  path: string
): unknown => {
  const [next, ...rest] = path.split('.')
  if (rest.length === 0) return obj[next]
  const sub = getObjectRecord(obj[next])
  if (!sub) return undefined
  return getNestedValue(sub, [...rest].join('.'))
}
