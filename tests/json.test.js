const is = require('../src/typa.js')

test('checks for a json object', () => {
  expect(is.json('{ "key": "value" }')).toBe(true) // eslint-disable-line
  expect(is.json({ 'key': 'value' })).toBe(false)
})