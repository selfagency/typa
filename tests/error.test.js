const is = require('../src/typa.js')

test('checks for an error', () => {
  expect(is.err(new Error('This is an error'))).toBe(true)
  expect(is.err({})).toBe(false)
})