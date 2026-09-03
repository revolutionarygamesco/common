export const makeOptionalGuard = <T>(
  singular: (candidate: unknown) => candidate is T
): (candidate: unknown) => candidate is T | undefined => {
  return (candidate: unknown): candidate is T | undefined => {
    return candidate === undefined || singular(candidate)
  }
}
