# lug
functional console logging

## usage

    var lug = require('lug')
    lug('foo')
    // console:
    //   foo
    // => 'foo'

    [1,2,3].map(lug.label('Num'))
    // console:
    //   Num: 1 0 [ 1, 2, 3 ]
    //   Num: 2 1 [ 1, 2, 3 ]
    //   Num: 3 2 [ 1, 2, 3 ]
    // => [1,2,3]

## api

### `lug(...Value) => Value`
Has the same logging behavior as console.log, but does not rely on a specific `this` value, and returns the first argument. This means you can pass it to `Array.prototype.map`, for example, to peek into the value.


### `lug.label(String) => (...Value) => Value`
A factory function to create an instance of `lug` that prefixes logged output with a label.


## installation

    $ npm install lug


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md
