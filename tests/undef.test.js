const is = require('../src/typa.js')

test('checks for an undefined value', () => {
  expect(is.undef(undefined)).toBe(true)
  expect(is.undef('abc')).toBe(false)
})