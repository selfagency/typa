import is from '../src/index.js'

test('checks for a promise', () => {
  expect(is.prom(new Promise(() => {}))).toBe(true)
  expect(is.prom(() => {})).toBe(false)
})
