import filter from '../src/filter.js';

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

test('Filter using lambda to access property', () => {
    expect(filter(users, (user) => {return !user.active})).toStrictEqual([{ 'user': 'fred',   'age': 40, 'active': false }])
})

test('Filter using lambda to access property', () => {
    expect(filter(users, (user) => {return user.age == 36 && user.active == true ;})).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
})

test('Null to filter', () => {
    expect(filter(null, () => {return true})).toStrictEqual([])
})

test('Undefined to filter', () => {
    expect(filter(undefined, () => {return true})).toStrictEqual([])
})

test('Basic num array to filter', () => {
    expect(filter([1,2,3], () => {return true})).toStrictEqual([1,2,3])
})