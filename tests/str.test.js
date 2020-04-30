import is from '../src/index.js'

test('checks for a string', () => {
  expect(is.str('abc')).toBe(true)
  expect(is.str({})).toBe(false)
})
