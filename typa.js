// super simple type checker, with code pilfered from https://www.webbjocke.com/javascript-check-data-types/

module.exports = {
  // string
  str (value) {
    return typeof value === 'string' || value instanceof String
  },

  // integer
  int (value) {
    return typeof value === 'number' && isFinite(value)
  },

  // array
  arr (value) {
    return value && typeof value === 'object' && value.constructor === Array
  },

  // function
  fn (value) {
    return typeof value === 'function'
  },

  // object
  obj (value) {
    return value && typeof value === 'object' && value.constructor === Object
  },

  // null
  null (value) {
    return value == null
  },

  // undefined
  undef (value) {
    return typeof value === 'undefined'
  },

  // null or undefined
  noru (value) {
    return value == null || typeof value === 'undefined'
  },

  // boolean
  bool (value) {
    return typeof value === 'boolean'
  },

  // regex
  regex (value) {
    return value && typeof value === 'object' && value.constructor === RegExp
  },

  // error
  err (value) {
    return value instanceof Error && typeof value.message !== 'undefined'
  },

  // date
  date (value) {
    return value instanceof Date
  },

  // symbol
  sym (value) {
    return typeof value === 'symbol'
  }
}
