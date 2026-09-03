export const hasOnly = (
  obj: Record<string, unknown>,
  properties: string[]
): boolean => {
  return Object.keys(obj).every(prop => properties.includes(prop))
}
