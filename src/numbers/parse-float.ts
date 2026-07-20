export const parseFloatOr = (
  str: string,
  fallback: number
): number => {
  const parsed = parseFloat(str)
  return isNaN(parsed) ? fallback : parsed
}
