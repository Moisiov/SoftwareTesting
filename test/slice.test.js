import slice from "../src/slice.js"

test('array of integers', () => {
    expect(slice([1,2,3], 1, 2)).toStrictEqual([2]);
});

test('empty array', () => {
    expect(slice([], 1, 2)).toStrictEqual([]);
});

test('undefined start position, null end', () => {
    expect(slice([1,2,3], undefined, null)).toStrictEqual([]);
});

test('undefined end position, null start', () => {
    expect(slice([1,2,3], null, undefined)).toStrictEqual([1,2,3]);
});

test('negative values for positions', () => {
    expect(slice([1,2,3], -2, -1)).toStrictEqual([2]);
});

test('object as array to slice', () => {
    expect(slice({"1":1,"2":2})).toStrictEqual([]);
});

test('undefined + empty string as value', () => {
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
});

test('null array', () => {
    expect(slice(null, -1)).toStrictEqual([]);
});

test('negative starting point with higher abs value than array length', () => {
    expect(slice([1,2,3], -4)).toStrictEqual([1,2,3]);
});