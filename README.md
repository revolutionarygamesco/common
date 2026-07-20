# Revolutionary Games Common Library
![Latest Release](https://img.shields.io/github/v/release/revolutionarygamesco/common?label=Latest+release&style=for-the-badge)
![Test Status](https://img.shields.io/github/actions/workflow/status/revolutionarygamesco/common/test.yml?label=Test+status&style=for-the-badge)
![License](https://img.shields.io/github/license/revolutionarygamesco/common?style=for-the-badge)

A library of methods that we tend to use in all (or at least most) of our projects.

## Getting Started

To install the Revolutionary Games Common Library in your project, run:

```console
npm install @revolutionarygamesco/common --save
```

You can then add methods from the library and call them like this:

```typescript
import { isString } from '@revolutionarygamesco/common'

const x = 'Hello, world!'
if (isString(x)) console.log(x)
```

## Methods

### Type guards

* [isNumber](https://github.com/revolutionarygamesco/common/wiki/isNumber)
* [isNumberArray](https://github.com/revolutionarygamesco/common/wiki/isNumberArray)
* [isString](https://github.com/revolutionarygamesco/common/wiki/isString)
* [isStringArray](https://github.com/revolutionarygamesco/common/wiki/isStringArray)
* [isObject](https://github.com/revolutionarygamesco/common/wiki/isObject)
* [makeArrayGuard](https://github.com/revolutionarygamesco/common/wiki/makeArrayGuard)
* [makeStringUnionGuard](https://github.com/revolutionarygamesco/common/wiki/makeStringUnionGuard)
* [makeTupleGuard](https://github.com/revolutionarygamesco/common/wiki/makeTupleGuard)

### Number methods

* [clamp](https://github.com/revolutionarygamesco/common/wiki/clamp)
* [degreesToRadians](https://github.com/revolutionarygamesco/common/wiki/degreesToRadians)
* [isWithinRange](https://github.com/revolutionarygamesco/common/wiki/isWithinRange)
* [parseFloatOr](https://github.com/revolutionarygamesco/common/wiki/parseFloatOr)
* [parseIntOr](https://github.com/revolutionarygamesco/common/wiki/parseIntOr)
* [radiansToDegrees](https://github.com/revolutionarygamesco/common/wiki/radiansToDegrees)

### Randomizers

* [chance](https://github.com/revolutionarygamesco/common/wiki/chance)
* [selectRandomBetween](https://github.com/revolutionarygamesco/common/wiki/selectRandomBetween)
* [selectRandomElement](https://github.com/revolutionarygamesco/common/wiki/selectRandomElement)
* [selectRandomBand](https://github.com/revolutionarygamesco/common/wiki/selectRandomBand)
* [shuffleArray](https://github.com/revolutionarygamesco/common/wiki/shuffleArray)

### String methods

* [capitalize](https://github.com/revolutionarygamesco/common/wiki/capitalize)
* [decapitalize](https://github.com/revolutionarygamesco/common/wiki/decapitalize)
* [makeOxfordList](https://github.com/revolutionarygamesco/common/wiki/makeOxfordList)

### Testing methods

* [getObjectRecord](https://github.com/revolutionarygamesco/common/wiki/getObjectRecord)
* [getPrimitivesExcept](https://github.com/revolutionarygamesco/common/wiki/getPrimitivesExcept)

### Other methods

* [dedupe](https://github.com/revolutionarygamesco/common/wiki/dedupe)
* [makeEnum](https://github.com/revolutionarygamesco/common/wiki/makeEnum)
* [retryUntil](https://github.com/revolutionarygamesco/common/wiki/retryUntil)
* [stockArray](https://github.com/revolutionarygamesco/common/wiki/stockArray)
