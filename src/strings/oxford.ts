export const makeOxfordList = (
  items?: string[],
  conjunction: string = 'and'
): string => {
  if (!items || items.length === 0) return ''
  if (items.length === 1) return items[0]
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`

  const rest = items.slice(0, items.length - 1)
  const last = items[items.length - 1]
  return `${rest.join(', ')}, ${conjunction} ${last}`
}
