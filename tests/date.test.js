const is = require('../src/typa.js')

test('checks for a date', () => {
  expect(is.date(new Date())).toBe(true)
  expect(is.date('abc')).toBe(false)
})