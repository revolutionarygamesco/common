import { splitKebab } from './split-kebab.ts'
import { camelize } from './camelize.ts'

export const camelizeKebab = (kebab: string): string => {
  return camelize(splitKebab(kebab))
}
