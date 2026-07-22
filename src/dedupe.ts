export const dedupe = <T extends string | number | boolean>(
  orig: readonly T[]
): T[] => {
  return [...new Set(orig)]
}
