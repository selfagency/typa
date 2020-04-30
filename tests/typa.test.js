import is from '../src/index.js'

const a = () => true
const b = () => false

test('test typa function', () => {
  expect(is.typa('int', 123, a, b)).toBe(true)
  expect(is.typa('str', 123, a, b)).toBe(false)

  expect(is.typa('str', 'abc', a, b)).toBe(true)
  expect(is.typa('str', 123, a, b)).toBe(false)

  expect(is.typa('str', 'abc', 't', 'f')).toBe('t')
  expect(is.typa('str', 123, 't', 'f')).toBe('f')

  expect(is.typa('int', 123, 't', 'f')).toBe('t')
  expect(is.typa('int', 'abc', 't', 'f')).toBe('f')

  expect(() => is.typa('str')).toThrow()
  expect(() => is.typa('str', 123)).toThrow()
  expect(() => is.typa('str', 123, 'abc')).toThrow()
})
