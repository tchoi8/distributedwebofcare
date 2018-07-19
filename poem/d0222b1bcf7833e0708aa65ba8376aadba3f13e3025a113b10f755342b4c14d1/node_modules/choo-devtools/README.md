# choo-devtools [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Console devtools for Choo. Useful for inspecting the state of applications,
tuning performance, and quick iteration. No installation needed means it works
in all browsers and Electron! :sparkles:

## Usage
```js
var choo = require('choo')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}
app.mount('body')
```

## API
### `var devtoolStore = require('choo-devtools')(opts)`
This module exposes a function that return a choo store. The function accept 
a single option argument, with the following properties:

- **filter**: A function to filter events for the devtools logger. The filter 
function accept three arguments `eventName, data, timing` and should return `true` 
(the event will be logged) or `false` (the event wont be logged).

## Commands
### `choo.help`
Print out information about all commands.
```txt
❯ choo.help
```

### `choo.state`
Log out the Choo state object.
```txt
❯ choo.state
```

### `choo.debug`
Log all state modificiations using
[object-change-callsite](https://github.com/yoshuawuyts/object-change-callsite/).
Logs out the key, value, and stack trace for the change. Useful when you're
dealing with unexpected values in your state. Especially useful when enabling
asynchronous stack traces in the devtools.
```txt
// Enable debugging
❯ choo.debug

// Disable debugging
❯ choo.debug = false
```

### `choo.storage`
Log out information about the browser's storage capabilities.
```txt
❯ choo.storage
```

### `choo.log`
Log out the last 150 events that occured in Choo. Useful during debugging to
quickly figure out which sequences of events were responsible for the current
state.
```txt
❯ choo.log
```

To enable `state` snapshots on each event, call `choo.debug`. Be warned that
this may severely impact performance – it's recommended to only use this for
debugging state.

### `choo.copy([selector])`
Serialize the current state to JSON and copy it to the clipboard. Can be passed
a selector (such as `href`) to do a partial copy. Useful if you want to create
a test based on the current application state.
```txt
// Copy all of state.
❯ choo.copy()

// Copy `state.href`.
❯ choo.copy('href')
```

### `choo.routes`
Get an array with the registered routes.
```txt
❯ choo.routes
```

### `choo.perf[type]`
Log out performance metrics for Choo. There are different types of entries we
can show:
- `choo.perf.all` Log out all data.
- `choo.perf.core` Only log out data about Choo's built-in methods.
- `choo.perf.events` Only log out information about the event bus.
- `choo.perf.components` Only log out information about components.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-devtools.svg?style=flat-square
[3]: https://npmjs.org/package/choo-devtools
[4]: https://img.shields.io/travis/choojs/choo-devtools/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/choo-devtools
[6]: https://img.shields.io/codecov/c/github/choojs/choo-devtools/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/choo-devtools
[8]: http://img.shields.io/npm/dm/choo-devtools.svg?style=flat-square
[9]: https://npmjs.org/package/choo-devtools
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
