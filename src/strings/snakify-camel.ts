import { splitCamel } from './split-camel.ts'
import { snakify } from './snakify.ts'

export const snakifyCamel = (camel: string): string => {
  return snakify(splitCamel(camel))
}
