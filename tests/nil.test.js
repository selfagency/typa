import is from '../src/index.js'

test('checks for a null value', () => {
  expect(is.nil(null)).toBe(true)
  expect(is.nil('abc')).toBe(false)
})
