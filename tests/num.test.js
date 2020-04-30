import is from '../src/index.js'

test('checks for a number', () => {
  expect(is.num(12.5)).toBe(true)
  expect(is.num('12.5')).toBe(false)
})
