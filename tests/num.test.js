const is = require('../src/typa.js')

test('checks for a number', () => {
  expect(is.num(12.5)).toBe(true)
  expect(is.num('12.5')).toBe(false)
})