import { capitalize } from './capital.ts'

export const camelize = ([first, ...rest]: string[]): string => {
  return first + rest.map(w => capitalize(w)).join('')
}
