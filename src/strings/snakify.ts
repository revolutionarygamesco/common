export const snakify = (elems: string[]): string => {
  return elems.map(w => w.toLowerCase()).join('_')
}
