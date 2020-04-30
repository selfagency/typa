import is from '../src/index.js'

test('checks for a null or undefined value', () => {
  expect(is.nullish(null)).toBe(true)
  expect(is.nullish(undefined)).toBe(true)
  expect(is.nullish('abc')).toBe(false)
})
