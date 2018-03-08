Typa
====

A super-simple JavaScript type checker. Mainly pilfered from [this blog post](https://www.webbjocke.com/javascript-check-data-types/) by [Webbjocke](https://github.com/webbjocke). No dependencies. 3.6K [GCC](https://github.com/google/closure-compiler-js) compiled, 2.0k uncompiled.

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

Typa Function
-------------

Checks if value matches the specified type, then returns the first function or value if true or the second function or value if false.

### Available Types
+   *arr*: Array
+   *bad*: Null, undefined, empty, or an error
+   *bool*: Boolean
+   *date*: Date
+   *empty*: Empty string, array, or object
+   *err*: Error
+   *fn*: Function
+   *int*: Integer
+   *json*: Serialized JSON object
+   *nll*: Null
+   *noru*: Null or undefined
+   *num*: Number
+   *obj*: Object
+   *regex*: Regular expression
+   *str*: String
+   *sym*: Symbol  
+   *undef*: Undefined

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

**Array**
Method:
```
  is.arr($value)
```
Example:
```
  const isArray = is.arr(['text', 12])
    // => true
```

**Boolean**
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

**Date**
Method:
```
  is.date($value)
```
Example:
```
  const isDate = is.date(new Date())
    // => true
```

**Empty**
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

**Error**
Method:
```
  is.err($value)
```
Example:
```
  const isErr = is.err(new Error('This is an error.'))
    // => true
```

**Function**
Method:
```
  is.fn($value)
```
Example:
```
  const isFn = is.fn(() => { console.log('Hi!') })
    // => true
```

**Integer**
Method:
```
  is.int($value)
```
Example:
```
  const isInt = is.int(12)
    // => true
```

**JSON**
Method:
```
  is.json($value)
```
Example:
```
  const isJson = is.json('{"key": "value"}')
    // => true
```

**Null**
Method:
```
  is.null($value)
```
Example:
```
  const isNll = is.nll(null)
    // => true
```

**Null or Undefined**
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

**Number**
Method:
```
  is.num($value)
```
Example:
```
  const isNum = is.num(28.2)
    // => true
```

**Object**
Method:
```
  is.obj($value)
```
Example:
```
  const isObj = is.obj({ key: 'value' })
    // => true
```

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
