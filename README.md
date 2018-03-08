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
+   *json*: JSON object
+   *nll*: Null
+   *noru*: Null or undefined
+   *num*: Number
+   *obj*: Object
+   *regex*: Regular expression
+   *str*: String
+   *sym*: Symbol  
+   *undef*: Undefined

```
  $str = 'hello'
  $arr = 'hello'

  $fn1 = (() => console.log('hello'))
  $fn2 = (() => console.log('goodbye'))

  is.typa('str', $str, $fn1, $fn2)
    // => 'hello'

  is.typa('arr', $arr, $fn1, $fn2)
    // => 'goodbye'
```

Individual Checks
-----------------

**Array**
```
  is.arr(['text', 12])
    // => true
```

**Boolean**
```
  is.bool(true)
    // => true

  is.bool(false)
    // => true
```

**Date**
```
  is.date(new Date())
    // => true
```

**Empty**
```
  is.empty('')
    // => true

  is.empty([])
    // => true

  is.empty({})
    // => true
```

**Error**
```
  is.err(new Error('This is an error.'))
    // => true
```

**Function**
```
  is.fn(() => { console.log('Hi!') })
    // => true
```

**Integer**
```
  is.int(12)
    // => true
```

**JSON**
```
  is.json('{"key": "value"}')
    // => true
```

**Null**
```
  is.nll(null)
    // => true
```

**Null or Undefined**
```
  is.noru(null)
    // => true

  is.noru(undefined)
    // => true
```

**Number**
```
  is.num(28.2)
    // => true
```

**Object**
```
  is.obj({ key: 'value' })
    // => true
```

**Regex**
```
  is.regex(new Regex(/\W/))
    // => true
```

**String**
```
  is.str('text')
    // => true
```

**Symbol**
```
  is.sym(Symbol(42))
    // => true
```

**Undefined**
```
  is.undef(undefined)
    // => true
```
