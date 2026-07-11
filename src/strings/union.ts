export const makeStringUnion = <T extends string>(
  ...values: T[]
): readonly T[] => {
  return values
}
