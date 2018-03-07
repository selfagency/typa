const is = require('../src/typa.js')

test('checks for an integer', () => {
  expect(is.int(12)).toBe(true)
  expect(is.int('12')).toBe(false)
})