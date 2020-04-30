import is from '../src/index.js'

test('checks for a json object', () => {
  expect(is.json('{ "key": "value" }')).toBe(true)
  expect(is.json({ key: 'value' })).toBe(false)
  expect(is.json('{ "key": "value" }', 'str')).toBe(true)
  expect(is.json({ key: 'value' }, 'obj')).toBe(true)
  expect(is.json('{ "key": "value" }', 'obj')).toBe(false)
})
