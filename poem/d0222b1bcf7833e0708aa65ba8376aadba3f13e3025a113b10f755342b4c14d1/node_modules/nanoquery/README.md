# nanoquery [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Tiny querystring module for Node, Electron and browsers.

## Usage
```js
var nanoquery = require('nanoquery')

var kv = nanoquery(window.location.href)
console.log(kv)
```

## API
### `kv = nanoquery(url)`
Destructure a url to an object containing the querystring mapping

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanoquery.svg?style=flat-square
[3]: https://npmjs.org/package/nanoquery
[4]: https://img.shields.io/travis/choojs/nanoquery/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/nanoquery
[6]: https://img.shields.io/codecov/c/github/choojs/nanoquery/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/nanoquery
[8]: http://img.shields.io/npm/dm/nanoquery.svg?style=flat-square
[9]: https://npmjs.org/package/nanoquery
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
