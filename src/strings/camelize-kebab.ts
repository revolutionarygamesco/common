import { capitalize } from './capital.ts'

const camelizeKebab = (kebab: string): string => {
  const [first, ...rest] = kebab.split('-')
  return first + rest.map(w => capitalize(w)).join('')
}

export default camelizeKebab
