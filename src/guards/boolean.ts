export const isBoolean = (
  candidate: unknown
): candidate is boolean => {
  return candidate === true || candidate === false
}
