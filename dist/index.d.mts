//#region src/guards/array.d.ts
declare const makeArrayGuard: <T>(singular: (candidate: unknown) => candidate is T) => (candidate: unknown) => candidate is T[];
//#endregion
//#region src/guards/number.arr.d.ts
declare const isNumberArray: (candidate: unknown) => candidate is number[];
//#endregion
//#region src/guards/number.d.ts
declare const isNumber: (candidate: unknown) => candidate is number;
//#endregion
//#region src/guards/object.d.ts
declare const isObject: (candidate: unknown) => candidate is object;
//#endregion
//#region src/guards/string.arr.d.ts
declare const isStringArray: (candidate: unknown) => candidate is string[];
//#endregion
//#region src/guards/string.d.ts
declare const isString: (candidate: unknown) => candidate is string;
//#endregion
//#region src/guards/string-union.d.ts
declare const makeStringUnionGuard: <T extends string>(values: readonly T[]) => (candidate: unknown) => candidate is T;
//#endregion
//#region src/guards/tuple.d.ts
type Guards<T extends readonly unknown[]> = { [K in keyof T]: (candidate: unknown) => candidate is T[K]; };
declare const makeTupleGuard: <T extends readonly unknown[]>(...guards: Guards<T>) => (candidate: unknown) => candidate is T;
//#endregion
//#region src/numbers/clamp.d.ts
declare const clamp: (val: number, min: number, max: number) => number;
//#endregion
//#region src/numbers/deg-rad.d.ts
declare const degreesToRadians: (degrees: number) => number;
//#endregion
//#region src/numbers/rad-deg.d.ts
declare const radiansToDegrees: (radians: number) => number;
//#endregion
//#region src/numbers/range.d.ts
declare const isWithinRange: (n: number, range: number[], inclusive?: boolean) => boolean;
//#endregion
//#region src/randomizers/between.d.ts
declare const selectRandomBetween: (min: number, max: number) => number;
//#endregion
//#region src/randomizers/el.d.ts
declare const selectRandomElement: <T>(arr: T[]) => T;
//#endregion
//#region src/randomizers/shuffle.d.ts
declare const shuffleArray: <T>(arr: T[]) => T[];
//#endregion
//#region src/strings/capital.d.ts
declare const capitalize: (orig: string) => string;
//#endregion
//#region src/strings/decapital.d.ts
declare const decapitalize: (orig: string) => string;
//#endregion
//#region src/strings/oxford.d.ts
declare const makeOxfordList: (items?: string[], conjunction?: string) => string;
//#endregion
//#region src/strings/union.d.ts
declare const makeStringUnion: <T extends string>(...values: T[]) => readonly T[];
//#endregion
//#region src/testing/primitives.d.ts
declare const primitives: Array<[string, any]>;
declare const getPrimitivesExcept: (...exceptions: string[]) => Array<[string, any]>;
//#endregion
//#region src/stock.d.ts
declare const stockArray: <T>(stock: Array<{
  n: number;
  item: T;
}>) => T[];
//#endregion
export { Guards, capitalize, clamp, decapitalize, degreesToRadians, getPrimitivesExcept, isNumber, isNumberArray, isObject, isString, isStringArray, isWithinRange, makeArrayGuard, makeOxfordList, makeStringUnion, makeStringUnionGuard, makeTupleGuard, primitives, radiansToDegrees, selectRandomBetween, selectRandomElement, shuffleArray, stockArray };
//# sourceMappingURL=index.d.mts.map