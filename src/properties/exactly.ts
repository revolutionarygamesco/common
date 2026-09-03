import { hasAll } from './all.ts'
import { hasOnly } from './only.ts'

export const hasExactly = (
  obj: Record<string, unknown>,
  properties: string[]
): boolean => {
  return hasAll(obj, properties) && hasOnly(obj, properties)
}
