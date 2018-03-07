const is = require('../src/typa.js')

test('checks for a null value', () => {
  expect(is.nll(null)).toBe(true)
  expect(is.nll('abc')).toBe(false)
})