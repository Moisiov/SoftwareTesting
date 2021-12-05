import drop from '../src/drop.js'

test('Default number of elements to drop', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2,3])
})

test('Drop 2 elements', () => {
    expect(drop([1,2,3], 2)).toStrictEqual([3])
});

test('Drop more elements than size of array', () => {
    expect(drop([1,2,3], 5)).toStrictEqual([])
});

test('Drop zero elements', () => {
    expect(drop([1,2,3], 0)).toStrictEqual([1,2,3])
})

test('Drop on empty array', () => {
    expect(drop([])).toStrictEqual([])
})

test('Drop on object', () => {
    expect(drop({'1':1, '2':2})).toStrictEqual([])
})

test('String representation of number as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], "4")).toStrictEqual([5])
})

test('String as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], "asd")).toStrictEqual([1,2,3,4,5])
})

test('Array as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], [1,2])).toStrictEqual([1,2,3,4,5])
})

test('Array with one number as number of elements dropped', () => {
    expect(drop([1,2,3,4,5], ["2"])).toStrictEqual([3,4,5])
})

test('Null parameter', () => {
    expect(drop(null)).toStrictEqual([])
})

test('Negative parameter', () => {
    expect(drop([4,3,2,1], -3)).toStrictEqual([4,3,2,1])
})