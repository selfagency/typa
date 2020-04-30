import is from '../src/index.js'

test('checks for a boolean', () => {
  expect(is.bool(true)).toBe(true)
  expect(is.bool('abc')).toBe(false)
})
