# nanolru [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

**A simple LRU cache supporting O(1) set, get and eviction of old keys**

Fork of [`lru`](https://github.com/chriso/lru) to remove dependency on `events`.

## Installation

```bash
$ npm install nanolru
```

### Example

```javascript
var LRU = require('nanolru');

var cache = new LRU(2)

cache.set('foo', 'bar');
cache.get('foo'); //=> bar

cache.set('foo2', 'bar2');
cache.get('foo2'); //=> bar2

cache.set('foo3', 'bar3'); // 'foo' evicted
cache.get('foo3');         // => 'bar3'
cache.remove('foo2')       // => 'bar2'
cache.remove('foo4')       // => undefined
cache.length               // => 1
cache.keys                 // => ['foo3']

cache.clear()
cache.length               // => 0
cache.keys                 // => []
```

### API

#### `LRU( length )`
Create a new LRU cache that stores `length` elements before evicting the least recently used.
Optionally you can pass an options map with additional options:

```js
{
  max: maxElementsToStore,
  maxAge: maxAgeInMilliseconds
}
```

If you pass `maxAge` items will be evicted if they are older than `maxAge` when you access them.

**Returns**: the newly created LRU cache


#### Properties
##### `.length`
The number of keys currently in the cache.

##### `.keys`
Array of all the keys currently in the cache.

#### Methods

##### `.set( key, value )`
Set the value of the key and mark the key as most recently used.

**Returns**: `value`

##### `.get( key )`
Query the value of the key and mark the key as most recently used.

**Returns**: value of key if found; `undefined` otherwise.

##### `.peek( key )`
Query the value of the key without marking the key as most recently used.

**Returns**: value of key if found; `undefined` otherwise.

##### `.remove( key )`
Remove the value from the cache.


**Returns**: value of key if found; `undefined` otherwise.

##### `.clear()`
Clear the cache.

### Credits

Original library by [Chris O'Hara](https://github.com/chriso). A big thanks to [Dusty Leary](https://github.com/dustyleary) who
finished the library.

### License

MIT

[0]: https://img.shields.io/badge/stability-stable-green.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanolru.svg?style=flat-square
[3]: https://npmjs.org/package/nanolru
[4]: https://img.shields.io/travis/s3ththompson/nanolru/master.svg?style=flat-square
[5]: https://travis-ci.org/s3ththompson/nanolru
[8]: http://img.shields.io/npm/dm/nanolru.svg?style=flat-square
[9]: https://npmjs.org/package/nanolru
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
