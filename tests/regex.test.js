import is from '../src/index.js'

test('checks for a regular expression', () => {
  expect(is.regex(/\W/i)).toBe(true)
  expect(is.regex('/W/i')).toBe(false)
})
