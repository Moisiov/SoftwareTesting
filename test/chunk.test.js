import chunk from '../src/chunk'

test('Split array of characters to even length chunks.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('Leave last chunk shorter.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']])
})

test('Split array with falsy values to chunks.', () => {
    expect(chunk(['', false, null, 'test', 5, 0], 2)).toStrictEqual([['', false], [null, 'test'], [5, 0]])
})

test('Split empty array.', () => {
    expect(chunk([], 5)).toStrictEqual([])
})

test('Call chunk with null parameter.', () => {
    expect(chunk(null)).toStrictEqual([])
})

test('Call chunk with 0 chunk size.', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toStrictEqual([])
})