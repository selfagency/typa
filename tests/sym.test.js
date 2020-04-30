import is from '../src/index.js'

test('checks for a symbol', () => {
  expect(is.sym(Symbol(12))).toBe(true)
  expect(is.sym('Symbol')).toBe(false)
})
