import is from '../src/index.js'

test('test what function', () => {
  expect(is.what('abcdefg')).toBe('string')
  expect(is.what(['abc', 'def'])).toBe('array')
  expect(is.what({})).toBe('object')
  expect(is.what(null)).toBe('null')
})
