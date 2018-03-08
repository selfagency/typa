const is = require('../src/typa.js')

test('checks for an empty string, array, or object', () => {
  expect(is.empty('')).toBe(true)
  expect(is.empty([])).toBe(true)
  expect(is.empty({})).toBe(true)
  expect(is.empty('abc')).toBe(false)
  expect(is.empty(['a', 'b', 'c'])).toBe(false)
  expect(is.empty({ "key": "value" })).toBe(false) // eslint-ignore-line
})