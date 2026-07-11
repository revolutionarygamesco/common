import changeInitialCase from './change-initial-case.ts'

const decapitalize = (orig: string): string => changeInitialCase(orig, 'lower')

export default decapitalize
