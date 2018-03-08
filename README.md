Typa
====

A super-simple JavaScript type checker. Mainly pilfered from [this blog post](https://www.webbjocke.com/javascript-check-data-types/) by [Webbjocke](https://github.com/webbjocke). No dependencies. 3.6K [GCC](https://github.com/google/closure-compiler-js) compiled, 2.0K uncompiled.

[![Codacy grade](https://img.shields.io/codacy/grade/c14912365bf14b74a778862a50d72860.svg)](https://www.codacy.com/app/Self_Agency/typa?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=selfagency/typa&amp;utm_campaign=Badge_Grade) [![Codacy coverage](https://img.shields.io/codacy/coverage/c14912365bf14b74a778862a50d72860.svg)](https://www.codacy.com/app/Self_Agency/typa?utm_source=github.com&utm_medium=referral&utm_content=selfagency/typa&utm_campaign=Badge_Coverage) [![CircleCI](https://img.shields.io/circleci/project/github/selfagency/typa.svg)](https://circleci.com/gh/selfagency/typa) [![GitHub issues](https://img.shields.io/github/issues/selfagency/typa.svg)](https://github.com/selfagency/typa/issues) [![npm](https://img.shields.io/npm/dt/typa.svg)](https://www.npmjs.com/package/typa) [![npm](https://img.shields.io/npm/v/typa.svg)](https://www.npmjs.com/package/typa)

**Install**
```
npm install typa
```

**Import**
```
import {is} from 'typa'

/* or */

const is = require('typa')
```

**Quick Start**
```
const hello = 'Hello!'
const goodbye = ['Goodbye!', 'Adios!', 'Au revoir!']

if (is.str(hello)) console.log(hello)
  // => 'Hello!'

if (is.str(goodbye)) console.log(hello)
  // => no result
```

API
---
+   <a href="#array">*arr*</a> → Array
+   <a href="#bad">*bad*</a> → Null, undefined, empty, or an error
+   <a href="#boolean">*bool*</a> → Boolean
+   <a href="#date">*date*</a> → Date
+   <a href="#empty">*empty*</a> → Empty string, array, or object
+   <a href="#error">*err*</a> → Error
+   <a href="#function">*fn*</a> → Function
+   <a href="#integer">*int*</a> → Integer
+   <a href="#json">*json*</a> → Serialized JSON object
+   <a href="#null">*nll*</a> → Null
+   <a href="#noru">*noru*</a> → Null or undefined
+   <a href="#number">*num*</a> → Number
+   <a href="#object">*obj*</a> → Object
+   <a href="#promise">*prom*</a> → Promise
+   <a href="#regex">*regex*</a> → Regular expression
+   <a href="#string">*str*</a> → String
+   <a href="#symbol">*sym*</a> → Symbol  
+   <a href="#undefined">*undef*</a> → Undefined

Typa Method
-----------

Ternary function that checks if the supplied value matches the specified type, then returns the first function (or value) if true or the second function (or value) if false.

**.typa**($type, $value, $fn1, $fn2)
```
const myString = 'this is a string'
const myArray = 'this is also a string, not an array'

const fn1 = (() => console.log('hello'))
const fn2 = (() => console.log('goodbye'))

is.typa('str', myString, fn1, fn2)
  // => 'hello'

is.typa('arr', myArray, fn1, fn2)
  // => 'goodbye'
```

Individual Methods
------------------

<a name="array"></a>**.arr**($value) — Array
```
const isArray = is.arr(['text', 12])
  // => true
```

<a name="bad"></a>**.bad**($value) — Null, undefined, empty, or an error
```
let isBad = is.bad(null)
  // => true

isBad = is.bad(undefined)
  // => true

isBad = is.bad({})
  // => true

isBad = is.bad(new Error('This is an error'))
  // => true
```

<a name="boolean"></a>**.bool**($value) — Boolean
```
let isBool = is.bool(true)
  // => true

isBool = is.bool(false)
  // => true
```

<a name="date"></a>**.date**($value) — Date
```
const isDate = is.date(new Date())
  // => true
```

<a name="empty"></a>**.empty**($value) — Empty string, array, or object
```
let isEmpty = is.empty('')
  // => true

isEmpty = is.empty([])
  // => true

isEmpty = is.empty({})
  // => true
```

<a name="error"></a>**.err**($value) — Error
```
const isErr = is.err(new Error('This is an error.'))
  // => true
```

<a name="function"></a>**.fn**($value) — Function
```
const isFn = is.fn(() => { console.log('Hi!') })
  // => true
```

<a name="integer"></a>**.int**($value) — Integer
```
const isInt = is.int(12)
  // => true
```

<a name="json"></a>**.json**($value) — Serialized JSON object
```
const isJson = is.json('{"key": "value"}')
  // => true
```

<a name="null"></a>**.nll**($value) — Null
```
const isNll = is.nll(null)
  // => true
```

<a name="noru"></a>**.noru**($value) — Null or Undefined
```
let isNoru = is.noru(null)
  // => true

isNoru = is.noru(undefined)
  // => true
```

<a name="number"></a>**.num**($value) — Number
```
const isNum = is.num(28.2)
  // => true
```

<a name="object"></a>**.obj**($value) — Object
```
const isObj = is.obj({ key: 'value' })
  // => true
```

<a name="promise"></a>**.prom**($value) — Promise
```
const myPromise = new Promise((resolve, reject) => {
  try {
    console.log('I make a promise to you')
    resolve()
  } catch(err) {
    reject(err)
  }
})

const isProm = is.prom(myPromise)
  // => true
```

<a name="regex"></a>**.regex**($value) — Regular Expression
```
const isRegex = is.regex(new Regex(/\W/))
  // => true
```

<a name="string"></a>**.str**($value) — String
```
const isStr = is.str('text')
  // => true
```

<a name="symbol"></a>**.sym**($value) — Symbol
```
const isSym = is.sym(Symbol(42))
  // => true
```

<a name="undefined"></a>**.undef**($value) — Undefined
```
const isUndef = is.undef(undefined)
  // => true
```
