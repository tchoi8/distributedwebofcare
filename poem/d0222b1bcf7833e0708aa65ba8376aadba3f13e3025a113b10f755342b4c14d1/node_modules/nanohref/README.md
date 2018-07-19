# nanohref [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Tiny href click handler library.

## Usage
```js
var nanohref = require('nanohref')

// Handler automatically attached to window.document
nanohref(function (location) {
  console.log('new location is', location.pathname)
})

// Create DOM node
var el = document.createElement('a')
el.setAttribute('href', '/my-link')
el.innerText = 'Click me'
document.body.appendChild(el)

// Trigger click
el.click()
// => "new location is /my-link"
```

## Ignoring links
By default all href links are handled. The event is not handled under the
following conditions:
- the click event had `.preventDefault()` called on it
- the link has a `target="_blank"` attribute with `rel="noopener noreferrer"`
- a modifier key is enabled (e.g. `ctrl`, `alt`, `shift` or `meta`)
- the link's href starts with protocol handler such as `mailto:` or `dat:`
- the link points to a different host
- the link has a `download` attribute

:warn: Note that we only handle `target=_blank` if they also have
`rel="noopener noreferrer"` on them. This is needed to [properly sandbox web
pages](https://mathiasbynens.github.io/rel-noopener/). Once `noopener` [becomes
more widespread](http://caniuse.com/#feat=rel-noopener), we can drop
`noreferrer` too (currently just 60% of browsers in use support it).

## API
### `nanohref(handler(location), [rootNode])`
Create a new anchor click handler. The second argument is for the root node,
which defaults to `window.document`.

## See Also
- [MDN/link-types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)
- [caniuse/rel=noopener](http://caniuse.com/#feat=rel-noopener)
- [mapbox/link-hijacker](https://github.com/mapbox/link-hijacker)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanohref.svg?style=flat-square
[3]: https://npmjs.org/package/nanohref
[4]: https://img.shields.io/travis/yoshuawuyts/nanohref/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanohref
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanohref/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanohref
[8]: http://img.shields.io/npm/dm/nanohref.svg?style=flat-square
[9]: https://npmjs.org/package/nanohref
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
