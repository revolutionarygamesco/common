import { dedupe } from '../dedupe.ts'
import { getNestedValue } from '../nested.ts'
import { isString } from '../guards/string.ts'

export const interpolate = (
  str: string,
  dict: Record<string, unknown>
): string => {
  const matches = str.match(/\{(.*?)}/g)
  if (!matches) return str

  const tags = dedupe(matches)
  let interpolated = str
  for (const tag of tags) {
    const path = tag.slice(1, -1)
    const found = getNestedValue(dict, path)
    const value = isString(found) ? found : path
    interpolated = interpolated.replaceAll(tag, value)
  }

  return interpolated
}
