# scroll-to-anchor [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Scroll to an anchor if possible.

## Usage
```js
var scrollToAnchor = require('scroll-to-anchor')
scrollToAnchor(window.location.hash)
scrollToAnchor(window.location.hash, { behavior: 'smooth' })
```

## API
### `scrollToAnchor(anchor, options)`
Scroll to an anchor if possible. Does nothing if no anchor is provided or if the
anchor doesn't exist on the page.

You can also specify the same options as the [scrollIntoView](https://developer.mozilla.org/en/docs/Web/API/Element/scrollIntoView#Parameters) method which allows for more positioning options and scroll behaviour changes.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/scroll-to-anchor.svg?style=flat-square
[3]: https://npmjs.org/package/scroll-to-anchor
[4]: https://img.shields.io/travis/yoshuawuyts/scroll-to-anchor/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/scroll-to-anchor
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/scroll-to-anchor/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/scroll-to-anchor
[8]: http://img.shields.io/npm/dm/scroll-to-anchor.svg?style=flat-square
[9]: https://npmjs.org/package/scroll-to-anchor
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
