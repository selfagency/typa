// array
const arr = value => {
  return typeof value === 'object' && value.constructor === Array
}

// bad
const bad = value => {
  return nil(value) || undef(value) || nullish(value) || empty(value) || err(value)
}

// boolean
const bool = value => {
  return typeof value === 'boolean'
}

// empty
const empty = value => {
  return (
    (str(value) && value.length === 0) ||
    (arr(value) && value.length === 0) ||
    (obj(value) && Object.keys(value).length === 0)
  )
}

// date
const date = value => {
  return value instanceof Date
}

// error
const err = value => {
  return value instanceof Error
}

// json
const json = (value, state) => {
  if (!!value) {
    if (state === 'obj') {
      if (str(value)) return false
      if (obj(value)) return true
    }

    try {
      JSON.parse(value)
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
  return typeof value === 'function'
}

// integer
const int = value => {
  return typeof value === 'number' && isFinite(value) && Number.isInteger(value)
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
  return typeof value === 'number' && isFinite(value)
}

// object
const obj = value => {
  return typeof value === 'object' && value.constructor === Object
}

// promise
const prom = value => {
  return value instanceof Promise
}

// regex
const regex = value => {
  return typeof value === 'object' && value.constructor === RegExp
}

// string
const str = value => {
  return typeof value === 'string' || value instanceof String
}

// symbol
const sym = value => {
  return typeof value === 'symbol'
}

// undefined
const undef = value => {
  return value === undefined || typeof value === 'undefined'
}

// if type of $value is true, $fn1() else $fn2()
const typa = (check, value, fn1, fn2) => {
  if (!!check && value && !!fn1 && !!fn2) return is[check](value) ? (fn(fn1) ? fn1() : fn1) : fn(fn2) ? fn2() : fn2
  throw new Error('typa(): Invalid input')
}

// return type(s) of $value
const what = value => {
  let what = []

  const nullChecks = [
    { fn: 'undef', name: 'undefined' },
    { fn: 'nil', name: 'null' },
  ]

  const checks = [
    { fn: 'arr', name: 'array' },
    { fn: 'bool', name: 'boolean' },
    { fn: 'date', name: 'date' },
    { fn: 'err', name: 'error' },
    { fn: 'fn', name: 'function' },
    { fn: 'int', name: 'integer' },
    { fn: 'json', name: 'json' },
    { fn: 'num', name: 'number' },
    { fn: 'obj', name: 'object' },
    { fn: 'prom', name: 'promise' },
    { fn: 'regex', name: 'regexp' },
    { fn: 'str', name: 'string' },
    { fn: 'sym', name: 'symbol' },
  ]

  nullChecks.forEach(check => {
    if (is[check.fn](value)) what.push(check.name)
  })

  if (!what.length) {
    checks.forEach(check => {
      if (is[check.fn](value)) what.push(check.name)
    })
  }

  return what.length === 1 ? what[0] : what
}

const is = {
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

export default is
