import { changeInitialCase } from './change-initial-case.ts'

export const decapitalize = (
  orig: string
): string => changeInitialCase(orig, 'lower')
