[![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/iterable-some.svg?style=flat-square)
](https://coveralls.io/r/tomekwi/iterable-some)
 [![Travis – build status
](https://img.shields.io/travis/tomekwi/iterable-some/master.svg?style=flat-square)
](https://travis-ci.org/tomekwi/iterable-some)
 [![David – status of dependencies
](https://img.shields.io/david/tomekwi/iterable-some.svg?style=flat-square)
](https://david-dm.org/tomekwi/iterable-some)
 [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-yellow.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




::some()
========

**`Array.some` for iterables.**


**Heads up!** This is totally a work in progress. [Thoughts and ideas][] are very welcome.

[Thoughts and ideas]:  https://github.com/tomekwi/iterable-some/issues




<div                                             id="/installation">&nbsp;</div>

Installation
------------

```sh
$ npm install iterable-some
```




<div                                                    id="/usage">&nbsp;</div>

Usage
-----

```js
import some from 'iterable-some/module';

// or:
const some = require('iterable-some');
```

These are all `true`:

```js
[true]::some(function() { return this; });

[false, null, 0, 'truthy']::some(function() { return this; });

new Set([5])
  ::some(function() { return this > 4; })
;

new Map([2, 'nope'], [5, 'yup'])
  ::some(function() { return this === 'yup'; })
;
```

– and these are `false`:

```js
[false, false]::some(function() { return this; });

[]::some(function() { return this; });

new Set([3, 1, 0, 4])
  ::some(function() { return this > 4; })
;
```

`::some()` is lazy – just as `Array.some`. It stops executing the `condition` as soon as it finds one match:

```js
[0, 1, 'not checked']::some(function() {
  if (this > 0) return true;
  if (this === 'not checked') throw 'No worries, this won’t be thrown.'
});
```

It works great with **[trine](http://npm.im/trine)**-style libraries:

```js
import isTruthy from 'this-is-truthy/module';

[null, undefined, 0, NaN]::some(isTruthy);
//» false
```




<div                                                      id="/huh">&nbsp;</div>

Huh?
----

If you’re wondering what the `::` thing means, you’d better read [this excellent overview by @jussi-kalliokoski](https://github.com/jussi-kalliokoski/trine/blob/5b735cbfb6b28ae94bac0446d9ecd5ce51fb149b/README.md#why) or have a look at the [function bind syntax proposal](https://github.com/zenparsing/es-function-bind).




<div                                                  id="/license">&nbsp;</div>

License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
