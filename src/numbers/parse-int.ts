export const parseIntOr = (
  str: string,
  fallback: number
): number => {
  const parsed = parseInt(str)
  return isNaN(parsed) ? fallback : parsed
}
