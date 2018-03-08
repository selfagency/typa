const is = require('../src/typa.js')

function oneArg () {
  is.typa('str')
}

function twoArgs () {
  is.typa('str', 123)
}

function threeArgs () {
  is.typa('str', 123, 'abc')
}

test('test typa function', () => {
  expect(is.typa('int', 123, 'abc', 123)).toBe('abc')
  expect(is.typa('int', 'abc', 'abc', 123)).toBe(123)
  expect(is.typa('str', 123, 'abc', 123)).toBe(123)
  expect(is.typa('str', 'abc', 'abc', 123)).toBe('abc')
  expect(oneArg).toThrowError('Invalid parameters.')
  expect(twoArgs).toThrowError('Invalid parameters.')
  expect(threeArgs).toThrowError('Invalid parameters.')
})