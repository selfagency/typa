// array
function arr (value) {
  return value && typeof value === 'object' && value.constructor === Array
}

// boolean
function bool (value) {
  return typeof value === 'boolean'
}

// empty
function empty (value) {
  return value === '' || value === [] || value === {}
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
  return typeof value === 'number' && isFinite(value)
}

// null
function nll (value) {
  return value == null
}

// null or undefined
function noru (value) {
  return value == null || typeof value === 'undefined'
}

// object
function obj (value) {
  return value && typeof value === 'object' && value.constructor === Object
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
  return typeof value === 'undefined'
}

// if type of $value is true, $fn1() else $fn2()
function typa (check, value, fn1, fn2) {
  if (fn(check) && fn(fn1) && fn(fn2)) {
    return check(value) ? fn1 : fn2
  } else {
    throw new Error('Invalid parameters.')
  }
}

const is = {
  arr,
  bool,
  date,
  empty,
  err,
  fn,
  int,
  json,
  nll,
  noru,
  obj,
  regex,
  str,
  sym,
  typa,
  undef
}

module.exports = is
