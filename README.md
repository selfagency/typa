# Typa: Zero-dep JS type checker 🧐

[![npm](https://img.shields.io/npm/dt/typa.svg)](https://www.npmjs.com/package/typa) [![npm](https://img.shields.io/npm/v/typa.svg)](https://www.npmjs.com/package/typa) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Twitter: @selfagency_llc](https://img.shields.io/twitter/follow/selfagency_llc.svg?style=social)](https://twitter.com/selfagency_llc)

The easy-peasy zero-dependency JavaScript type checker that asks, "What typa input is that?" Minified packaged version is 2 entire KB.

**Notice:** Breaking changes in v0.3.0. New bundler, plus `nll` is now `nil` and `noru` is now `nullish`.

## Install

```sh
yarn add typa || npm install typa
```

## Run tests

```sh
yarn test
```

## Basic Usage

```js
import is from 'typa' || const is = require('typa')

const hello = 'Hello!'
const goodbye = ['Goodbye!', 'Adios!', 'Au revoir!']

if (is.str(hello)) console.log(hello)
  // => 'Hello!'

if (is.str(goodbye)) console.log(hello)
  // => no result
```

## API

- <a href="#array">_arr_</a> → Array
- <a href="#bad">_bad_</a> → Null, undefined, empty, or an error
- <a href="#boolean">_bool_</a> → Boolean
- <a href="#date">_date_</a> → Date
- <a href="#empty">_empty_</a> → Empty string, array, or object
- <a href="#error">_err_</a> → Error
- <a href="#function">_fn_</a> → Function
- <a href="#integer">_int_</a> → Integer
- <a href="#json">_json_</a> → Serialized JSON object
- <a href="#nil">_nil_</a> → Null
- <a href="#nullish">_nullish_</a> → Null or undefined
- <a href="#number">_num_</a> → Number
- <a href="#object">_obj_</a> → Object
- <a href="#promise">_prom_</a> → Promise
- <a href="#regex">_regex_</a> → Regular expression
- <a href="#string">_str_</a> → String
- <a href="#symbol">_sym_</a> → Symbol
- <a href="#undefined">_undef_</a> → Undefined

## Typa Method

Ternary operator that checks if the supplied value matches the specified type, then returns the first callback function (or value) if true or the second callback function (or value) if false.

**.typa**($type, $value, $fn1, $fn2)

```js
const isStr = () => console.log('I am a string')
const aintStr = () => console.log('I am not a string')

is.typa('str', 'Am I a string?', isStr, aintStr)
// => 'I am a string'

is.typa('str', ['Am', 'I', 'a', 'string', '?'], isStr, aintStr)
// => 'I am not a string'
```

## What Method

Returns a string or an array of strings matching the type of the supplied value.

**.what**(\$value)

```js
is.what('This is a string')
// => 'string'

is.what(['This', 'is', 'an', 'array'])
// => ['array', 'object']
```

## Individual Type Methods

<a name="array"></a>**.arr**(\$value) — Array

```js
const isArray = is.arr(['text', 12])
// => true
```

<a name="bad"></a>**.bad**(\$value) — Null, undefined, empty, or an error

```js
let isBad = is.bad(null)
// => true

isBad = is.bad(undefined)
// => true

isBad = is.bad({})
// => true

isBad = is.bad(new Error('This is an error'))
// => true
```

<a name="boolean"></a>**.bool**(\$value) — Boolean

```js
let isBool = is.bool(true)
// => true

isBool = is.bool(false)
// => true
```

<a name="date"></a>**.date**(\$value) — Date

```js
const isDate = is.date(new Date())
// => true
```

<a name="empty"></a>**.empty**(\$value) — Empty string, array, or object

```js
let isEmpty = is.empty('')
// => true

isEmpty = is.empty([])
// => true

isEmpty = is.empty({})
// => true
```

<a name="error"></a>**.err**(\$value) — Error

```js
const isErr = is.err(new Error('This is an error.'))
// => true
```

<a name="function"></a>**.fn**(\$value) — Function

```js
const isFn = is.fn(() => {
  console.log('Hi!')
})
// => true
```

<a name="integer"></a>**.int**(\$value) — Integer

```js
const isInt = is.int(12)
// => true
```

<a name="json"></a>**.json**(\$value) — Serialized JSON object

```js
const isJson = is.json('{"key": "value"}')
// => true
```

<a name="nil"></a>**.nil**(\$value) — Null

```js
const isNil = is.nil(null)
// => true
```

<a name="nullish"></a>**.nullish**(\$value) — Null or Undefined

```js
let isNullish = is.nullish(null)
// => true

isNullish = is.nullish(undefined)
// => true
```

<a name="number"></a>**.num**(\$value) — Number

```js
const isNum = is.num(28.2)
// => true
```

<a name="object"></a>**.obj**(\$value) — Object

```js
const isObj = is.obj({ key: 'value' })
// => true
```

<a name="promise"></a>**.prom**(\$value) — Promise

```js
const myPromise = new Promise((resolve, reject) => {
  try {
    console.log('I make a promise to you')
    resolve()
  } catch (err) {
    reject(err)
  }
})

const isProm = is.prom(myPromise)
// => true
```

<a name="regex"></a>**.regex**(\$value) — Regular Expression

```js
const isRegex = is.regex(new Regex(/\W/))
// => true
```

<a name="string"></a>**.str**(\$value) — String

```js
const isStr = is.str('text')
// => true
```

<a name="symbol"></a>**.sym**(\$value) — Symbol

```js
const isSym = is.sym(Symbol(42))
// => true
```

<a name="undefined"></a>**.undef**(\$value) — Undefined

```js
const isUndef = is.undef(undefined)
// => true
```

## Author

👤 **Daniel Sieradski <hello@self.agency>**

- Website: [self.agency](https://self.agency)
- Twitter: [@selfagency_llc](https://twitter.com/selfagency_llc)
- GitLab: [@selfagency](https://gitlab.com/selfagency)

## Acknowledgements

Most of the checks comprising this library were pilfered from [this blog post](https://www.webbjocke.com/javascript-check-data-types/) by [Webbjocke](https://github.com/webbjocke).

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://gitlab.com/selfagency/utfu/issues).

## Show your support

Give a ⭐️ if this project helped you!
