import is from '../src/index.js'

test('checks for an undefined value', () => {
  expect(is.undef(undefined)).toBe(true)
  expect(is.undef('abc')).toBe(false)
})
