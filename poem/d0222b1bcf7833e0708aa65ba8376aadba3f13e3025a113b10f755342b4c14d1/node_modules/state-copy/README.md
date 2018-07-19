# state-copy

> takes an object as input then serializes it as JSON and copies it to your clipboard

Makes it easier to copy application state to your clipboard from the browser.

## Usage

```js
var stateCopy = require('state-copy')

stateCopy({wow: 'cool'})
```

what gets copied to clipboard

```
{"wow":"cool"}
```

## Notes

Must be called in response to a user gesture event, like click or keyup.

## Install

```
$ npm install state-copy
```

## Acknowledgments

state-copy was inspired by [@yoshuawuyts tweet](https://twitter.com/yoshuawuyts/status/882606862981615616)

## License

MIT

