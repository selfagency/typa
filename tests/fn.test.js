import is from '../src/index.js'

test('checks for a function', () => {
  expect(
    is.fn(() => {
      console.log('executing test function')
    })
  ).toBe(true)
  expect(is.fn({})).toBe(false)
})
