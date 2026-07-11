//#region src/guards/array.ts
const makeArrayGuard = (singular) => {
	return (candidate) => {
		if (!Array.isArray(candidate)) return false;
		return candidate.every((item) => singular(item));
	};
};
//#endregion
//#region src/guards/number.ts
const isNumber = (candidate) => {
	if (typeof candidate !== "number") return false;
	return !isNaN(candidate);
};
//#endregion
//#region src/guards/number.arr.ts
const isNumberArray = makeArrayGuard(isNumber);
//#endregion
//#region src/guards/object.ts
const isObject = (candidate) => {
	if (candidate === null) return false;
	if (typeof candidate !== "object") return false;
	return !Array.isArray(candidate);
};
//#endregion
//#region src/guards/string.ts
const isString = (candidate) => {
	return typeof candidate === "string";
};
//#endregion
//#region src/guards/string.arr.ts
const isStringArray = makeArrayGuard(isString);
//#endregion
//#region src/guards/string-union.ts
const makeStringUnionGuard = (values) => {
	return (candidate) => {
		const ro = values;
		return isString(candidate) && ro.includes(candidate);
	};
};
//#endregion
//#region src/guards/tuple.ts
const makeTupleGuard = (...guards) => {
	return (candidate) => {
		if (!Array.isArray(candidate)) return false;
		if (candidate.length !== guards.length) return false;
		return guards.every((guard, i) => guard(candidate[i]));
	};
};
//#endregion
//#region src/numbers/clamp.ts
const clamp = (val, min, max) => {
	return Math.max(min, Math.min(val, max));
};
//#endregion
//#region src/numbers/deg-rad.ts
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
//#endregion
//#region src/numbers/rad-deg.ts
const radiansToDegrees = (radians) => radians * (180 / Math.PI);
//#endregion
//#region src/numbers/range.ts
const isWithinRange = (n, range, inclusive = true) => {
	const min = Math.min(...range);
	const max = Math.max(...range);
	return (inclusive ? n >= min : n > min) && (inclusive ? n <= max : n < max);
};
//#endregion
//#region src/randomizers/between.ts
const selectRandomBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
//#endregion
//#region src/randomizers/el.ts
const selectRandomElement = (arr) => {
	return arr[selectRandomBetween(0, arr.length - 1)];
};
//#endregion
//#region src/randomizers/shuffle.ts
const shuffleArray = (arr) => {
	const shuffled = [...arr];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = selectRandomBetween(0, i);
		const tmp = shuffled[i];
		shuffled[i] = shuffled[j];
		shuffled[j] = tmp;
	}
	return shuffled;
};
//#endregion
//#region src/strings/change-initial-case.ts
const changeInitialCase = (str, letterCase = "upper") => {
	const init = str.charAt(0);
	return (letterCase === "upper" ? init.toUpperCase() : init.toLowerCase()) + str.slice(1);
};
//#endregion
//#region src/strings/capital.ts
const capitalize = (orig) => changeInitialCase(orig);
//#endregion
//#region src/strings/decapital.ts
const decapitalize = (orig) => changeInitialCase(orig, "lower");
//#endregion
//#region src/strings/oxford.ts
const makeOxfordList = (items, conjunction = "and") => {
	if (!items || items.length === 0) return "";
	if (items.length === 1) return items[0];
	if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
	const rest = items.slice(0, items.length - 1);
	const last = items[items.length - 1];
	return `${rest.join(", ")}, ${conjunction} ${last}`;
};
//#endregion
//#region src/strings/union.ts
const makeStringUnion = (...values) => {
	return values;
};
//#endregion
//#region src/testing/primitives.ts
const primitives = [
	["null", null],
	["undefined", void 0],
	["a function", () => {}],
	["true", true],
	["false", false],
	["a string", "a string"],
	["a number", 42],
	["an empty array", []],
	["an empty object", {}]
];
const getPrimitivesExcept = (...exceptions) => {
	return primitives.filter(([label, _]) => {
		return !exceptions.includes(label);
	});
};
//#endregion
//#region src/stock.ts
const stockArray = (stock) => {
	const arr = [];
	for (const { n, item } of stock) for (let i = 0; i < n; i++) arr.push(item);
	return arr;
};
//#endregion
export { capitalize, clamp, decapitalize, degreesToRadians, getPrimitivesExcept, isNumber, isNumberArray, isObject, isString, isStringArray, isWithinRange, makeArrayGuard, makeOxfordList, makeStringUnion, makeStringUnionGuard, makeTupleGuard, primitives, radiansToDegrees, selectRandomBetween, selectRandomElement, shuffleArray, stockArray };

//# sourceMappingURL=index.mjs.map