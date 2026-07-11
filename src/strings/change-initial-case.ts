export const changeInitialCase = (
  str: string,
  letterCase: 'upper' | 'lower' = 'upper'
): string => {
  const init = str.charAt(0)
  const cased = letterCase === 'upper' ? init.toUpperCase() : init.toLowerCase()
  return cased + str.slice(1)
}

export default changeInitialCase
