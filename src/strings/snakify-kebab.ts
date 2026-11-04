import { splitKebab } from './split-kebab.ts'
import { snakify } from './snakify.ts'

export const snakifyKebab = (kebab: string): string => {
  return snakify(splitKebab(kebab))
}
