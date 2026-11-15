export const unescapeJSONPointer = (
  escaped: string
): PropertyKey => {
  return escaped
    .replaceAll('~1', '/')
    .replaceAll('~0', '~')
}
