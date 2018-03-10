// array
function arr (value) {
  return value && typeof value === 'object' && value.constructor === Array
}

// bad
function bad (value) {
  return nll(value) || undef(value) || empty(value) || err(value)
}

// boolean
function bool (value) {
  return typeof value === 'boolean'
}

// empty
function empty (value) {
  return (str(value) && value === '') || (arr(value) && value.length === 0) || (obj(value) && Object.keys(value).length === 0)
}

// date
function date (value) {
  return value instanceof Date
}

// error
function err (value) {
  return value instanceof Error && typeof value.message !== 'undefined'
}

// json
function json (value) {
  try {
    JSON.parse(value)
    return true
  } catch (e) {
    return false
  }
}

// function
function fn (value) {
  return typeof value === 'function'
}

// integer
function int (value) {
  return typeof value === 'number' && isFinite(value) && Number.isInteger(value)
}

// null
function nll (value) {
  return value == null
}

// null or undefined
function noru (value) {
  return value == null || typeof value === 'undefined'
}

// number
function num (value) {
  return typeof value === 'number' && isFinite(value)
}

// object
function obj (value) {
  return value && typeof value === 'object' && value.constructor === Object
}

// promise
function prom (value) {
  return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function'
}

// regex
function regex (value) {
  return value && typeof value === 'object' && value.constructor === RegExp
}

// string
function str (value) {
  return typeof value === 'string' || value instanceof String
}

// symbol
function sym (value) {
  return typeof value === 'symbol'
}

// undefined
function undef (value) {
  return value === undefined || typeof value === 'undefined'
}

// if type of $value is true, $fn1() else $fn2()
function typa (check, value, fn1, fn2) {
  if (!noru(check) && !noru(value) && !noru(fn1) && !noru(fn2)) {
    return is[check](value) ? fn1 : fn2
  } else {
    throw new Error('Invalid parameters.')
  }
}

const is = {
  arr, bad, bool, date, empty, err, fn, int, json, nll,
  noru, num, obj, prom, regex, str, sym, typa, undef
}

module.exports = is
