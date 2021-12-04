import add from '../src/add'

test('Add two integers', () => {
    expect(add(123, 45)).toBe(168)
})

test('Add two negative integers', () => {
    expect(add(-123, -45)).toBe(-168)
})

test('Add two decimals', () => {
    expect(add(0.003, 0.21)).toBe(0.213)
})

test('Add two negative decimals', () => {
    expect(add(-0.003, -0.21)).toBe(-0.213)
})

test('Add zero to integer', () => {
    expect(add(0, 4)).toBe(4)
})

test('Add two zeros', () => {
    expect(add(0, 0)).toBe(0)
})

test('Add large integers', () => {
    expect(add(10000000000, 20000000000000)).toBe(20010000000000)
})