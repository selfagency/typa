const is = require('../src/typa.js')

test('checks for a null or undefined value', () => {
  expect(is.noru(null)).toBe(true)
  expect(is.noru(undefined)).toBe(true)
  expect(is.int('abc')).toBe(false)
})