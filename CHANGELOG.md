### v1.2.5
* Move [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord)
  out of the testing package. It’s useful for making [type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html),
  and that’s often just as useful in production code as it is for tests.

### v1.2.4
* Move [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord),
  [getPrimitivesExcept](https://github.com/revolutionarygamesco/common/wiki/getPrimitivesExcept),
  and [loadYaml](https://github.com/revolutionarygamesco/common/wiki/loadYaml) into
  a new `testing` package. This is especially crucial for `loadYaml`, which can
  otherwise introduce a build-breaking `yaml` dependency.

### v1.2.3
* Fix the type signature on [dedupe](https://github.com/revolutionarygamesco/common/wiki/dedupe).

### v1.2.2
* Added a new method:
  * [loadYaml](https://github.com/revolutionarygamesco/common/wiki/loadYaml)

### v1.2.1
* Add two new methods:
  * [parseFloatOr](https://github.com/revolutionarygamesco/common/wiki/parseFloatOr)
  * [parseIntOr](https://github.com/revolutionarygamesco/common/wiki/parseIntOr)

### v1.2.0
* Add four new methods:
  * [chance](https://github.com/revolutionarygamesco/common/wiki/chance)
  * [retryUntil](https://github.com/revolutionarygamesco/common/wiki/retryUntil)
  * [selectRandomBand](https://github.com/revolutionarygamesco/common/wiki/selectRandomBand)
  * [makeEnum](https://github.com/revolutionarygamesco/common/wiki/makeEnum)

### v1.1.0
* Add new method: [dedupe](https://github.com/revolutionarygamesco/common/wiki/dedupe)

### v1.0.0
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