import endsWith from '../src/endsWith'

test('String ends in given character', () => {
    expect(endsWith('abc', 'c')).toBe(true)
})

test('String does not end in given character', () => {
    expect(endsWith('abc', 'b')).toBe(false)
})

test('String ends in given character on given position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
})

test('String ends in given substring', () => {
    expect(endsWith('abcdefg', 'efg')).toBe(true)
})

test('String ends in given substring on given position', () => {
    expect(endsWith('abcdefg', 'cde', 5)).toBe(true)
})

test('Negative position', () => {
    expect(endsWith('abcdefg', 'cde', -7)).toBe(false)
})

test('Position greater than string length', () => {
    expect(endsWith('abcdefg', 'cde', 45)).toBe(false)
})