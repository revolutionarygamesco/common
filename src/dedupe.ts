export const dedupe = <T>(orig: T[]): T[] => {
  return [...new Set(orig)]
}
