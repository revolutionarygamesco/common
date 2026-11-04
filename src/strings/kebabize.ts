export const kebabize = (elems: string[]): string => {
  return elems.map(w => w.toLowerCase()).join('-')
}
