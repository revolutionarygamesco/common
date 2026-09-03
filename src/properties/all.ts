export const hasAll = (
  obj: Record<string, unknown>,
  properties: string[]
): boolean => {
  return properties.every(prop => Object.keys(obj).includes(prop))
}
