export const dedupe = (
  orig: Array<string | number | boolean>
): Array<string | number | boolean> => {
  return [...new Set(orig)]
}
