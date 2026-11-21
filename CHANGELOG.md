# Changelog

## [1.5.1] - 2026-11-20
### Added
- [Time constants](https://github.com/revolutionarygamesco/common/wiki/time)
- [intervalToMs](https://github.com/revolutionarygamesco/common/wiki/intervalToMs)

## [1.5.0] - 2026-11-18

### Changed
- This changelog from an idiosyncratic format to the format recommended by [keepachangelog.com](https://keepachangelog.com/en/1.1.0/).

### Removed
- HTTP status constants. You should use [http-status-codes](https://www.npmjs.com/package/http-status-codes) instead.

## [1.4.3] - 2026-11-15
### Added
- [escapeJSONPointer](https://github.com/revolutionarygamesco/common/wiki/escapeJSONPointer)
- [unescapeJSONPointer](https://github.com/revolutionarygamesco/common/wiki/unescapeJSONPointer)

## [1.4.2] - 2026-11-04
### Added
* [splitCamel](https://github.com/revolutionarygamesco/common/wiki/splitCamel)
* [splitKebab](https://github.com/revolutionarygamesco/common/wiki/splitKebab)
* [splitSnake](https://github.com/revolutionarygamesco/common/wiki/splitSnake)
* [camelize](https://github.com/revolutionarygamesco/common/wiki/camelize)
* [camelizeKebab](https://github.com/revolutionarygamesco/common/wiki/camelizeKebab)
* [camelizeSnake](https://github.com/revolutionarygamesco/common/wiki/camelizeSnake)
* [kebabize](https://github.com/revolutionarygamesco/common/wiki/kebabize)
* [kebabizeCamel](https://github.com/revolutionarygamesco/common/wiki/kebabizeCamel)
* [kebabizeSnake](https://github.com/revolutionarygamesco/common/wiki/kebabizeSnake)
* [snakify](https://github.com/revolutionarygamesco/common/wiki/snakify)
* [snakifyCamel](https://github.com/revolutionarygamesco/common/wiki/snakifyCamel)
* [snakifyKebab](https://github.com/revolutionarygamesco/common/wiki/snakifyKebab)

## [1.4.1] - 2026-10-17
### Fixed
* Fixed an export error with HTTP status code constants.

## [1.4.0] - 2026-10-17
### Added
* [Alphanumeric Characters](https://github.com/revolutionarygamesco/common/wiki/alphanumeric)
* [HTTP Status Codes](https://github.com/revolutionarygamesco/common/wiki/http-status-codes)

## [1.3.4] - 2026-10-09
### Added
* [interpolate](https://github.com/revolutionarygamesco/common/wiki/interpolate)

## [1.3.3] - 2026-10-09
### Added
* [getNestedValue](https://github.com/revolutionarygamesco/common/wiki/getNestedValue)

## [1.3.2] - 2026-09-04
### Fixed
* Fixed a bug in [makeObjectGuard](https://github.com/revolutionarygamesco/common/wiki/makeObjectGuard)
  that caused it to incorrectly reject objects that lack optional fields.

## [1.3.1] - 2026-09-04
### Added
* [makeObjectGuard](https://github.com/revolutionarygamesco/common/wiki/makeObjectGuard)
* [makePartialGuard](https://github.com/revolutionarygamesco/common/wiki/makePartialGuard)

## [1.3.0] - 2026-09-03
### Added
* New type guards:
  * [isDate](https://github.com/revolutionarygamesco/common/wiki/isDate)
  * [isOptionalDate](https://github.com/revolutionarygamesco/common/wiki/isOptionalDate)
  * [isDateArray](https://github.com/revolutionarygamesco/common/wiki/isDateArray)
  * [makeOptionalGuard](https://github.com/revolutionarygamesco/common/wiki/makeOptionalGuard)
* New object property inspection methods
  * [getAllPartials](https://github.com/revolutionarygamesco/common/wiki/getAllPartials)
  * [hasAll](https://github.com/revolutionarygamesco/common/wiki/hasAll)
  * [hasOnly](https://github.com/revolutionarygamesco/common/wiki/hasOnly)
  * [hasExactly](https://github.com/revolutionarygamesco/common/wiki/hasExactly)

### [1.2.10] - 2026-08-19
### Added
* [makeRecordGuard](https://github.com/revolutionarygamesco/common/wiki/makeRecordGuard)

## [1.2.9] - 2026-08-18
### Added
* [isWithinBounds](https://github.com/revolutionarygamesco/common/wiki/isWithinBounds)

## [1.2.8] - 2026-08-15
### Added
* [isOptionalBoolean](https://github.com/revolutionarygamesco/common/wiki/isOptionalBoolean)
* [isOptionalNumber](https://github.com/revolutionarygamesco/common/wiki/isOptionalNumber)
* [isOptionalString](https://github.com/revolutionarygamesco/common/wiki/isOptionalString)
* [isOptionalObject](https://github.com/revolutionarygamesco/common/wiki/isOptionalObject)

## [1.2.7] - 2026-08-14
### Added
* [isBoolean](https://github.com/revolutionarygamesco/common/wiki/isBoolean)
* [isBooleanArray](https://github.com/revolutionarygamesco/common/wiki/isBooleanArray)

## [1.2.6] - 2026-07-24
### Added
* [selectRandomVariation](https://github.com/revolutionarygamesco/common/wiki/selectRandomVariation)

## [1.2.5] - 2026-07-23
### Changed
* Move [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord)
  out of the testing package. It’s useful for making [type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html),
  and that’s often just as useful in production code as it is for tests.

## [1.2.4] - 2026-07-22
### Changed
* Move [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord),
  [getPrimitivesExcept](https://github.com/revolutionarygamesco/common/wiki/getPrimitivesExcept),
  and [loadYaml](https://github.com/revolutionarygamesco/common/wiki/loadYaml) into
  a new `testing` package. This is especially crucial for `loadYaml`, which can
  otherwise introduce a build-breaking `yaml` dependency.

## [1.2.3] - 2026-07-22
### Fixed
* Fix the type signature on [dedupe](https://github.com/revolutionarygamesco/common/wiki/dedupe).

### [1.2.2] - 2026-07-22
### Added
* [loadYaml](https://github.com/revolutionarygamesco/common/wiki/loadYaml)

### [1.2.1] - 2026-07-20
### Added
* [parseFloatOr](https://github.com/revolutionarygamesco/common/wiki/parseFloatOr)
* [parseIntOr](https://github.com/revolutionarygamesco/common/wiki/parseIntOr)

## [1.2.0] - 2026-07-18
### Added
* [chance](https://github.com/revolutionarygamesco/common/wiki/chance)
* [retryUntil](https://github.com/revolutionarygamesco/common/wiki/retryUntil)
* [selectRandomBand](https://github.com/revolutionarygamesco/common/wiki/selectRandomBand)
* [makeEnum](https://github.com/revolutionarygamesco/common/wiki/makeEnum)

## [1.1.0] - 2026-07-17
### Added
* [dedupe](https://github.com/revolutionarygamesco/common/wiki/dedupe)

## [1.0.0] - 2027-07-12
### Added
* Methods
  * Type guards
    * [isNumber](https://github.com/revolutionarygamesco/common/wiki/isNumber)
    * [isNumberArray](https://github.com/revolutionarygamesco/common/wiki/isNumberArray)
    * [isString](https://github.com/revolutionarygamesco/common/wiki/isString)
    * [isStringArray](https://github.com/revolutionarygamesco/common/wiki/isStringArray)
    * [isObject](https://github.com/revolutionarygamesco/common/wiki/isObject)
    * [makeArrayGuard](https://github.com/revolutionarygamesco/common/wiki/makeArrayGuard)
    * [makeStringUnionGuard](https://github.com/revolutionarygamesco/common/wiki/makeStringUnionGuard)
    * [makeTupleGuard](https://github.com/revolutionarygamesco/common/wiki/makeTupleGuard)
  * Number methods
    * [clamp](https://github.com/revolutionarygamesco/common/wiki/clamp)
    * [degreesToRadians](https://github.com/revolutionarygamesco/common/wiki/degreesToRadians)
    * [radiansToDegrees](https://github.com/revolutionarygamesco/common/wiki/radiansToDegrees)
    * [isWithinRange](https://github.com/revolutionarygamesco/common/wiki/isWithinRange)
  * Randomizers
    * [selectRandomBetween](https://github.com/revolutionarygamesco/common/wiki/selectRandomBetween)
    * [selectRandomElement](https://github.com/revolutionarygamesco/common/wiki/selectRandomElement)
    * [shuffleArray](https://github.com/revolutionarygamesco/common/wiki/shuffleArray)
  * String methods
    * [capitalize](https://github.com/revolutionarygamesco/common/wiki/capitalize)
    * [decapitalize](https://github.com/revolutionarygamesco/common/wiki/decapitalize)
    * [makeOxfordList](https://github.com/revolutionarygamesco/common/wiki/makeOxfordList)
  * Testing methods
    * [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord)
    * [getPrimitivesExcept](https://github.com/revolutionarygamesco/common/wiki/getPrimitivesExcept)
  * Other methods
    * [stockArray](https://github.com/revolutionarygamesco/common/wiki/stockArray)
* Types
  * `PrimitiveLabel`
* Objects
  * `primitives`