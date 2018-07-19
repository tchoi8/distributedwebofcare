# object-change-callsite
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Determine the callsite of an object change using Proxies.

## Usage
```js
var onChange = require('object-change-callsite')

var state = {}
state = onChange(state, function (attr, value, callsite) {
  console.log(`${attr} changed to ${value} at ${callsite}`)
})

state.foo = 'hello'
state.bar = 'world'
```

## API
### `onChange(target, callback(attribute, value, callsite))`
Detect changes on the target object.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/object-change-callsite.svg?style=flat-square
[3]: https://npmjs.org/package/object-change-callsite
[4]: https://img.shields.io/travis/yoshuawuyts/object-change-callsite/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/object-change-callsite
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/object-change-callsite/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/object-change-callsite
[8]: http://img.shields.io/npm/dm/object-change-callsite.svg?style=flat-square
[9]: https://npmjs.org/package/object-change-callsite
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
