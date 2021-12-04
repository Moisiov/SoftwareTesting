import chunk from '../src/chunk'

test('Split array of characters to even length chunks.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('Leave last chunk shorter.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']])
})