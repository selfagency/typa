const is = require('../src/typa.js')

test('checks for an object', () => {
  expect(is.obj({ test: 123 })).toBe(true)
  expect(is.obj('abc')).toBe(false)
})