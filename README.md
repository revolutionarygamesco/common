# Revolutionary Games Common Library
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

* [isNumber](/revolutionarygamesco/common/wiki/isNumber)
* [isNumberArray](/revolutionarygamesco/common/wiki/isNumberArray)
* [isString](/revolutionarygamesco/common/wiki/isString)
* [isStringArray](/revolutionarygamesco/common/wiki/isStringArray)
* [isObject](/revolutionarygamesco/common/wiki/isObject)
* [makeArrayGuard](/revolutionarygamesco/common/wiki/makeArrayGuard)
* [makeStringUnionGuard](/revolutionarygamesco/common/wiki/makeStringUnionGuard)
* [makeTupleGuard](/revolutionarygamesco/common/wiki/makeTupleGuard)

### Number methods

* [clamp](/revolutionarygamesco/common/wiki/clamp)
* [degreesToRadians](/revolutionarygamesco/common/wiki/degreesToRadians)
* [radiansToDegrees](/revolutionarygamesco/common/wiki/radiansToDegrees)
* [isWithinRange](/revolutionarygamesco/common/wiki/isWithinRange)

### Randomizers

* [selectRandomBetween](/revolutionarygamesco/common/wiki/selectRandomBetween)
* [selectRandomElement](/revolutionarygamesco/common/wiki/selectRandomElement)
* [shuffleArray](/revolutionarygamesco/common/wiki/shuffleArray)

### String methods

* [capitalize](/revolutionarygamesco/common/wiki/capitalize)
* [decapitalize](/revolutionarygamesco/common/wiki/decapitalize)
* [makeOxfordList](/revolutionarygamesco/common/wiki/makeOxfordList)

### Testing methods

* [getObjectRecord](/revolutionarygamesco/common/wiki/getObjectRecord)
* [getPrimitivesExcept](/revolutionarygamesco/common/wiki/getPrimitivesExcept)

### Other methods

* [stockArray](/revolutionarygamesco/common/wiki/stockArray)