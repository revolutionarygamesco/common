const isWithinRange = (
  n: number,
  range: number[],
  inclusive: boolean = true
): boolean => {
  const min = Math.min(...range)
  const max = Math.max(...range)

  const isGreaterThanMin = inclusive ? n >= min : n > min
  const isLessThanMax = inclusive ? n <= max : n < max
  return isGreaterThanMin && isLessThanMax
}

export default isWithinRange
