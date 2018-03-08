const is = require('../src/typa.js')

const testProm = new Promise((resolve, reject) => {
  try {
    resolve()
  } catch(err) {
    reject(err)
  }
})

test('checks for a promise', () => {
  expect(is.prom(testProm)).toBe(true)
  expect(is.prom(() => { console.log('Just a function')} )).toBe(false)
})