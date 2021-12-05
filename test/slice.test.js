import slice from "../src/slice.js"

test('Array of integers', () => {
    expect(slice([1,2,3], 1, 2)).toStrictEqual([2])
})

test('Empty array', () => {
    expect(slice([], 1, 2)).toStrictEqual([])
})

test('Undefined start position, null end', () => {
    expect(slice([1,2,3], undefined, null)).toStrictEqual([])
})

test('Undefined end position, null start', () => {
    expect(slice([1,2,3], null, undefined)).toStrictEqual([1,2,3])
})

test('Negative values for positions', () => {
    expect(slice([1,2,3], -2, -1)).toStrictEqual([2])
})

test('Object as array to slice', () => {
    expect(slice({"1":1,"2":2})).toStrictEqual([])
})

test('Undefined + empty string as value', () => {
    expect(slice(""+undefined)).toStrictEqual([
        "u",
        "n",
        "d",
        "e",
        "f",
        "i",
        "n",
        "e",
        "d"
     ]);
})

test('Null array', () => {
    expect(slice(null, -1)).toStrictEqual([])
})

test('Negative starting point with higher abs value than array length', () => {
    expect(slice([1,2,3], -4)).toStrictEqual([1,2,3])
})