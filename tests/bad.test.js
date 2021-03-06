import is from '../src/index.js'

test('checks for a bad value', () => {
  expect(is.bad(null)).toBe(true)
  expect(is.bad(undefined)).toBe(true)
  expect(is.bad('')).toBe(true)
  expect(is.bad([])).toBe(true)
  expect(is.bad({})).toBe(true)
  expect(is.bad(new Error('This is an error'))).toBe(true)
  expect(is.bad()).toBe(true)
  expect(is.bad('hello')).toBe(false)
  expect(is.bad(['a', 'b', 'c'])).toBe(false)
  expect(is.bad({ key: 'value' })).toBe(false)
  expect(
    is.bad(() => {
      console.log('This is a test')
    })
  )
})
