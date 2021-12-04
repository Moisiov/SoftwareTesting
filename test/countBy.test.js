import countBy from "../src/countBy";

test('Tests array of numbers with floor function applied to keys', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({'4': 1, '6': 2});
});

test('Tests array of strings using property iteratee shorthand', () => {
    expect(countBy(['one', 'two', 'three'], str => str.length)).toStrictEqual({'3': 2, '5': 1});
});

test('Tests empty array', () => {
    expect(countBy([], value => value)).toStrictEqual({});
});

test('Tests array with empty strings', () => {
    expect(countBy(["", "", "test"]), value => value).toStrictEqual({"": 2, "test": 1})
});

//Loadash documentation specifies countBy to throw TypeError when 
test('Tests null value', () => {
    expect(countBy(null, value => value)).toStrictEqual({});
});

test('Tests empty string', () => {
    expect(countBy(null), value => value).toStrictEqual({});
});

test('Testing string input, with added undefined as input with Math.floor operator on iteree', () => {
    expect(countBy("123" + undefined), Math.floor).toStrictEqual({1: 1, 2: 1, 3: 1, NaN: 9})
});