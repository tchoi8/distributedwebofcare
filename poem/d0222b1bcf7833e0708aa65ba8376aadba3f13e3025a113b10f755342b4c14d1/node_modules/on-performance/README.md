# on-performance [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Listen for performance timeline events and clears them after usage. Returns a
singleton. Can be used in both node and browser environments.

## Usage
```js
var onPerformance = require('on-performance')

onPerformance(function (entry) {
  console.log('entry: ', entry.entryType, entry)
})
```

## API
### `stop = onPerformance(callback(entry))`
Listen for performance events. Returns a singleton (e.g. multiple calls to this
method are registered on the same listener). If multiple instances are created
during the first tick, all initial events will be played back to all instances.

### `stop()`
Stop the observer.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/on-performance.svg?style=flat-square
[3]: https://npmjs.org/package/on-performance
[4]: https://img.shields.io/travis/choojs/on-performance/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/on-performance
[6]: https://img.shields.io/codecov/c/github/choojs/on-performance/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/on-performance
[8]: http://img.shields.io/npm/dm/on-performance.svg?style=flat-square
[9]: https://npmjs.org/package/on-performance
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
