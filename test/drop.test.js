import drop from '../src/drop.js';

test('default number of elements to drop', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2,3]);
});

test('drop 2 elements', () => {
    expect(drop([1,2,3], 2)).toStrictEqual([3]);
});

test('drop more elements than size of array', () => {
    expect(drop([1,2,3], 5)).toStrictEqual([]);
});

test('drop zero elements', () => {
    expect(drop([1,2,3], 0)).toStrictEqual([1,2,3]);
});

test('drop on empty array', () => {
    expect(drop([])).toStrictEqual([]);
});

test('drop on object', () => {
    expect(drop({'1':1, '2':2})).toStrictEqual([]);
});

test('string representation of number as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], "4")).toStrictEqual([5]);
});

test('string as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], "asd")).toStrictEqual([1,2,3,4,5]);
});

test('array as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], [1,2])).toStrictEqual([1,2,3,4,5]);
});

test('array with one number as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], ["2"])).toStrictEqual([3,4,5]);
});