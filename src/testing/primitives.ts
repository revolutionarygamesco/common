const primitives = [
  ['null', null],
  ['undefined', undefined],
  ['a function', () => {}],
  ['true', true],
  ['false', false],
  ['a string', 'a string'],
  ['a number', 42],
  ['an array', []],
  ['an empty object', {}],
] as Array<[string, any]>

export const getPrimitivesExcept = (
  ...exceptions: any[]
): Array<[string, any]> => {
  return primitives.filter(([_, value]) => {
    return !exceptions.includes(value)
  })
}

export default primitives
