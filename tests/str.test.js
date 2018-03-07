const is = require('../src/typa.js')

test('checks for a string', () => {
  expect(is.str('abc')).toBe(true)
  expect(is.str({})).toBe(false)
})