import divide from '../src/divide'

test('Divide two integers', () => {
    expect(divide(6, 4)).toBe(1.5)
})

test('Divide two decimal numbers', () => {
    expect(divide(2.4, 0.8)).toBe(3)
})

test('Divide integer by decimal number', () => {
    expect(divide(5, 0.8)).toBe(6.25)
})

test('Divide decimal number by integer', () => {
    expect(divide(0.6, 2)).toBe(0.3)
})