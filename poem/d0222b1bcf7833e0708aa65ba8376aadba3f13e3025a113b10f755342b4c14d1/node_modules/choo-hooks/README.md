# choo-hooks [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Hook into Choo's events and timings. Useful to create loggers, analytics and
more.

## Usage
```js
var Hooks = require('choo-hooks')
var choo = require('choo')

var app = choo()
app.use(function (state, emitter) {
  var hooks = Hooks(emitter)
  hook.on('event', function (eventName, timing, data) {
    console.log(eventName + ':', timing.duration + 'ms', data)
  })

  hook.on('unhandled', function (eventName, data) {
    console.error('No listeners for ' + eventName)
  })
})
```

## API
### hooks = Hooks(emitter)
Create a new Choo Hooks instance.

### `hook.on('log:trace', cb(…args))`
### `hook.on('log:debug', cb(…args))`
### `hook.on('log:info', cb(…args))`
### `hook.on('log:warn', cb(…args))`
### `hook.on('log:error', cb(…args))`
### `hook.on('log:fatal', cb(…args))`
Listen for log events.

### `hook.on('service-worker', cb(data))`
Listen for service worker event.

### `hook.on('event', cb(eventName, timing, data))`
Called for events implemented at the application layer.

### `hook.on('use', cb(count, duration))`
Called whenever `app.use()` is called.

### `hook.on('unhandled', cb(eventName, data))`
Called whenever an event is emitted, and there is no handler available.

### `hook.on('DOMContentLoaded', cb(timing))`
Called whenever the DOM has loaded. Returns the `window.performance.timing`
object.

### `hook.on('render', cb(timings))`
Called whenever Choo renders. Returns an object with the `render` and `morph`
properties.

### `hook.on('resourceTimingBufferFull', cb())`
Called whenever the browser's resource timing buffer has filled up.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-hooks.svg?style=flat-square
[3]: https://npmjs.org/package/choo-hooks
[4]: https://img.shields.io/travis/choojs/choo-hooks/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/choo-hooks
[6]: https://img.shields.io/codecov/c/github/choojs/choo-hooks/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/choo-hooks
[8]: http://img.shields.io/npm/dm/choo-hooks.svg?style=flat-square
[9]: https://npmjs.org/package/choo-hooks
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
