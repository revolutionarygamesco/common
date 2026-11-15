export const escapeJSONPointer = (
  pointer: PropertyKey
): string => {
  return pointer.toString()
    .replaceAll('~', '~0')
    .replaceAll('/', '~1')
}
