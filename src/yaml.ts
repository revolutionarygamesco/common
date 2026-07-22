import { readFileSync } from 'node:fs'
import { parse } from 'yaml'

export const loadYaml = <T = unknown>(
  src: string | URL
): T => {
  const raw = readFileSync(src, 'utf8')
  return parse(raw) as T
}
