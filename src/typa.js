// array
const arr = value => {
  return !!value && typeof value === 'object' && value.constructor === Array
}

// bad
const bad = value => {
  return !!value && (nil(value) || undef(value) || nullish(value) || empty(value) || err(value))
}

// boolean
const bool = value => {
  return !!value && typeof value === 'boolean'
}

// empty
const empty = value => {
  return (
    !!value &&
    ((str(value) && value.length > 0) ||
      (arr(value) && value.length === 0) ||
      (obj(value) && Object.keys(value).length === 0))
  )
}

// date
const date = value => {
  return !!value && value instanceof Date
}

// error
const err = value => {
  return !!value && value instanceof Error
}

// json
const json = (value, state) => {
  if (!!value) {
    try {
      switch (state) {
        case 'obj':
          JSON.stringify(value)
          break
        case 'str':
        default:
          JSON.parse(value)
          break
      }
      return true
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}

// function
const fn = value => {
  return !!value && typeof value === 'function'
}

// integer
const int = value => {
  return !!value && typeof value === 'number' && isFinite(value) && Number.isInteger(value)
}

// null
const nil = value => {
  return value === null
}

// null or undefined
const nullish = value => {
  return value == null || value == undefined
}

// number
const num = value => {
  return !!value && typeof value === 'number' && isFinite(value)
}

// object
const obj = value => {
  return !!value && typeof value === 'object' && value.constructor === Object
}

// promise
const prom = value => {
  return (
    !!value &&
    (typeof value === 'object' || typeof value === 'function') &&
    value.then &&
    typeof value.then === 'function'
  )
}

// regex
const regex = value => {
  return !!value && typeof value === 'object' && value.constructor === RegExp
}

// string
const str = value => {
  return !!value && (typeof value === 'string' || value instanceof String)
}

// symbol
const sym = value => {
  return !!value && typeof value === 'symbol'
}

// undefined
const undef = value => {
  return value === undefined || typeof value === 'undefined'
}

// if type of $value is true, $fn1() else $fn2()
function typa(check, value, fn1, fn2) {
  if (!!check && !!value && !!fn1 && !!fn2) {
    return is[check](value) ? fn1 : fn2
  } else {
    throw new Error('Invalid parameters.')
  }
}

// return type(s) of $value
const what = value => {
  let what = []
  const checks = [
    { fn: 'arr', name: 'array' },
    { fn: 'bool', name: 'boolean' },
    { fn: 'date', name: 'date' },
    { fn: 'err', name: 'error' },
    { fn: 'fn', name: 'function' },
    { fn: 'int', name: 'integer' },
    { fn: 'json', name: 'json' },
    { fn: 'nil', name: 'null' },
    { fn: 'num', name: 'number' },
    { fn: 'obj', name: 'object' },
    { fn: 'prom', name: 'promise' },
    { fn: 'regex', name: 'regexp' },
    { fn: 'str', name: 'string' },
    { fn: 'sym', name: 'symbol' },
    { fn: 'undef', name: 'undefined' },
  ]
  checks.forEach(check => {
    if (is[check.fn](value)) what.push(check.name)
  })
  if (!value) throw new Error('Missing value to test.')
  return what.length === 1 ? what[0] : what
}

export default {
  arr,
  bad,
  bool,
  date,
  empty,
  err,
  fn,
  int,
  json,
  nil,
  nullish,
  num,
  obj,
  prom,
  regex,
  str,
  sym,
  typa,
  undef,
  what,
}
