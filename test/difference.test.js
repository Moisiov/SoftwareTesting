import difference from "../src/difference";

test('Tests array of integers', () => {
    expect(difference([2,1], [2,3])).toStrictEqual([1]);
});

test('Object as array to inspect', () => {
    expect(difference({"123":123}, [2, 3])).toStrictEqual([]);
});

test('array inside object as value to exclude', () => {
    expect(difference([2, 3], {"2":2, "3":[3]})).toStrictEqual([2,3]);
})

test('no value to inspect against', () => {
    expect(difference(null, [1,2,3])).toStrictEqual([]);
})

test('null and undefined in values to remove', () => {
    expect(difference([1,2,3], null, undefined, [1], {2:"2"})).toStrictEqual([2,3]);
})

test('strings & integers ', () => {
    expect(difference(["1", "3",4], [1,"3","4"])).toStrictEqual(["1", 4]);
})