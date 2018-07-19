# choo-service-worker [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Service worker loader for choo. Only runs in the browser, and emits events.
Does not include the worker code itself, you'll need to serve it using a tool
like `bankai`.

## Usage
```js
var choo = require('choo')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-service-worker/clear')())
}
app.use(require('choo-service-worker')())
app.mount('body')
```
The above example will install your service worker, and add the events and state 
properties documented below. For a complete example on how to use them check the 
[example.js](./example.js) file.

## Events
### `log:error` | `sw.events.ERROR`
Emitted if the worker fails to register.

### `sw:installed` | `sw.events.INSTALLED`
Emitted when the worker correctly registers for the first time.

### `sw:updated` | `sw.events.UPDATED`
Emitted when an already saved worker register or update its content.

### `sw:redundant` | `sw.events.REDUNDANT`
Emitted when an existing worker become redundant.

### `sw:postMessage` | `sw.events.POST_MESSAGE`
Emit this to post a message to the current service worker. This event is not 
meant to be handled by choo (or any client).

### `sw:message` | `sw.events.MESSAGE`
Listen to this event to hadle messages from the worker. This event is not meant 
to be sent by choo (or any client).

### `sw:sync` | `sw.events.SYNC`
Emit this to register a sync tag to the service worker. This event is not 
meant to be handled by choo (or any client).

### `sw:notificationRequest` | `sw.events.NOTIFICATION_REQUEST`
Emit this to ask for authorization to send notifications. This event is not 
meant to be handled by choo (or any client).

## API
### `plugin = sw([route], [opts])`
Register a new service worker if possible. Route defaults to `/sw.js`. 
An optional `opts` object can be passed, you can add a `electron` 
Boolean property to the options object, to enable registration in electron, 
the rest of the options are passed directly to the registration method of 
the service worker. Note that, if you enable electron with `opts.electron`, 
the scope property will be forced to  the root path of your app. Emits 
events when the worker is registered. The plugin also add a few properties 
to the app state.

- `state.syncTags`: `array` - an array of registered tags for background 
syncronization.

### `clear = sw/clear()`
Clear all service workers.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-service-worker.svg?style=flat-square
[3]: https://npmjs.org/package/choo-service-worker
[4]: https://img.shields.io/travis/yoshuawuyts/choo-service-worker/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/choo-service-worker
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/choo-service-worker/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/choo-service-worker
[8]: http://img.shields.io/npm/dm/choo-service-worker.svg?style=flat-square
[9]: https://npmjs.org/package/choo-service-worker
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
