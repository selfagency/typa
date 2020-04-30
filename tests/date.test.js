import is from '../src/index.js'

test('checks for a date', () => {
  expect(is.date(new Date())).toBe(true)
  expect(is.date('abc')).toBe(false)
})
