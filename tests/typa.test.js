const is = require('../src/typa.js')

test('test typa function', () => {
  expect(is.typa('int', 123, 'abc', 123)).toBe('abc')
  expect(is.typa('int', 'abc', 'abc', 123)).toBe(123)
  expect(is.typa('str', 123, 'abc', 123)).toBe(123)
  expect(is.typa('str', 'abc', 'abc', 123)).toBe('abc')
})