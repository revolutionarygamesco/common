import { capitalize } from './capital.ts'
import { splitKebab } from './split-kebab.ts'

export const camelizeKebab = (kebab: string): string => {
  const [first, ...rest] = splitKebab(kebab)
  return first + rest.map(w => capitalize(w)).join('')
}
