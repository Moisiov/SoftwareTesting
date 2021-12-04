import compact from '../src/compact'

test('Remove falsy values from array of integers', () => {
    expect(compact([0, 1, false, 2, '', 3])).toStrictEqual([1, 2, 3])
})

test('Remove falsy values from array of strings', () => {
    expect(compact(['foo', 'bar', '', undefined, 'test'])).toStrictEqual(['foo', 'bar', 'test'])
})

test('Call compact function with empty array', () => {
    expect(compact([])).toStrictEqual([])
})

test('Call compact function with array of falsy values', () => {
    expect(compact([false, 0, -0, 0n, '', "", null, undefined, NaN])).toStrictEqual([])
})