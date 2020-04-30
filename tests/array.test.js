import is from '../src/index.js'

test('checks for an array', () => {
  expect(is.arr(['a', 'b', 'c'])).toBe(true)
  expect(is.arr('abc')).toBe(false)
})
