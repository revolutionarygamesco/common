const primitiveLabels = [
  'null', 'undefined', 'a function', 'true', 'false', 'a string', 'a number',
  'a symbol', 'an empty array', 'an empty object',
] as const
export type PrimitiveLabel = typeof primitiveLabels[number]

export const primitives = [
  ['null', null],
  ['undefined', undefined],
  ['a function', () => {}],
  ['true', true],
  ['false', false],
  ['a string', 'a string'],
  ['a number', 42],
  ['a symbol', Symbol()],
  ['an empty array', []],
  ['an empty object', {}],
] as Array<[PrimitiveLabel, any]>

export const getPrimitivesExcept = (
  ...exceptions: PrimitiveLabel[]
): Array<[string, any]> => {
  return primitives.filter(([label, _]) => {
    return !exceptions.includes(label)
  })
}
