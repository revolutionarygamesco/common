export const LETTERS_LOWERCASE: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
export const LETTERS_UPPERCASE: string[] = LETTERS_LOWERCASE.map(letter => letter.toUpperCase())
export const DIGITS: string[] = '0123456789'.split('')
export const ALPHANUMERIC: string[] = [...LETTERS_UPPERCASE, ...LETTERS_LOWERCASE, ...DIGITS]
