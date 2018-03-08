Typa
====

A super-simple JavaScript type checker. Mainly pilfered from [this blog post](https://www.webbjocke.com/javascript-check-data-types/) by [Webbjocke](https://github.com/webbjocke). No dependencies. 3.6K [GCC](https://github.com/google/closure-compiler-js) compiled, 2.0K uncompiled.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c14912365bf14b74a778862a50d72860)](https://www.codacy.com/app/Self_Agency/typa?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=selfagency/typa&amp;utm_campaign=Badge_Grade)

**Install**
```
  npm install typa
```

**Import**
```
  import {is} from 'typa'

  // or

  const is = require('typa')
```

Available Types
---------------
+   <a href="#array">*arr*</a>: Array
+   <a href="#bad">*bad*</a>: Null, undefined, empty, or an error
+   <a href="#boolean">*bool*</a>: Boolean
+   <a href="#date">*date*</a>: Date
+   <a href="#empty">*empty*</a>: Empty string, array, or object
+   <a href="#error">*err*</a>: Error
+   <a href="#function">*fn*</a>: Function
+   <a href="#integer">*int*</a>: Integer
+   <a href="#json">*json*</a>: Serialized JSON object
+   <a href="#null">*nll*</a>: Null
+   <a href="#noru">*noru*</a>: Null or undefined
+   <a href="#number">*num*</a>: Number
+   <a href="#object">*obj*</a>: Object
+   <a href="#promise">*prom*</a>: Promise
+   <a href="#regex">*regex*</a>: Regular expression
+   <a href="#string">*str*</a>: String
+   <a href="#symbol">*sym*</a>: Symbol  
+   <a href="#undefined">*undef*</a>: Undefined

Typa Function
-------------

Checks if value matches the specified type, then returns the first function (or value) if true or the second function (or value) if false.

Method:
```
  is.typa($type, $value, $fn1, $fn2)
```

Example:
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

Individual Checks
-----------------

<a name="array"></a>**Array**
Method:
```
  is.arr($value)
```
Example:
```
  const isArray = is.arr(['text', 12])
    // => true
```

<a name="bad"></a>**Bad**
Method:
```
  is.bad($value)
```
Example:
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

<a name="boolean"></a>**Boolean**
Method:
```
  is.bool($value)
```
Example:
```
  let isBool = is.bool(true)
    // => true

  isBool = is.bool(false)
    // => true
```

<a name="date"></a>**Date**
Method:
```
  is.date($value)
```
Example:
```
  const isDate = is.date(new Date())
    // => true
```

<a name="empty"></a>**Empty**
Method:
```
  is.empty($value)
```
Example:
```
  let isEmpty = is.empty('')
    // => true

  isEmpty = is.empty([])
    // => true

  isEmpty = is.empty({})
    // => true
```

<a name="error"></a>**Error**
Method:
```
  is.err($value)
```
Example:
```
  const isErr = is.err(new Error('This is an error.'))
    // => true
```

<a name="function"></a>**Function**
Method:
```
  is.fn($value)
```
Example:
```
  const isFn = is.fn(() => { console.log('Hi!') })
    // => true
```

<a name="integer"></a>**Integer**
Method:
```
  is.int($value)
```
Example:
```
  const isInt = is.int(12)
    // => true
```

<a name="json"></a>**JSON**
Method:
```
  is.json($value)
```
Example:
```
  const isJson = is.json('{"key": "value"}')
    // => true
```

<a name="null"></a>**Null**
Method:
```
  is.null($value)
```
Example:
```
  const isNll = is.nll(null)
    // => true
```

<a name="noru"></a>**Null or Undefined**
Method:
```
  is.noru($value)
```
Example:
```
  let isNoru = is.noru(null)
    // => true

  isNoru = is.noru(undefined)
    // => true
```

<a name="number"></a>**Number**
Method:
```
  is.num($value)
```
Example:
```
  const isNum = is.num(28.2)
    // => true
```

<a name="object"></a>**Object**
Method:
```
  is.obj($value)
```
Example:
```
  const isObj = is.obj({ key: 'value' })
    // => true
```

<a name="promise"></a>
**Promise**
Method:
```
  is.prom($value)
```
Example:
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

<a name="regex"></a>
**Regex**
Method:
```
  is.regex($value)
```
Example:
```
  const isRegex = is.regex(new Regex(/\W/))
    // => true
```

<a name="string"></a>
**String**
Method:
```
  is.str($value)
```
Example:
```
  const isStr = is.str('text')
    // => true
```

<a name="symbol"></a>
**Symbol**
Method:
```
  is.sym($value)
```
Example:
```
  const isSym = is.sym(Symbol(42))
    // => true
```

<a name="undefined"></a>
**Undefined**
Method:
```
  is.undef($value)
```
Example:
```
  const isUndef = is.undef(undefined)
    // => true
```
