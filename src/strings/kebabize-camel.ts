import { splitCamel } from './split-camel.ts'
import { kebabize } from './kebabize.ts'

export const kebabizeCamel = (camel: string): string => {
  return kebabize(splitCamel(camel))
}
