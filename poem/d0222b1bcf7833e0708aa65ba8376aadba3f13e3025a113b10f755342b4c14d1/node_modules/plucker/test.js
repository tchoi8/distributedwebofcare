var test = require('tape')
var pluck = require('./')

test('one level deep', function(t) {
  var object = { hello: 'world' }

  t.equal(pluck('hello')(object), 'world', 'using partial application')
  t.equal(pluck('hello', object), 'world', 'using quick application')
  t.end()
})

test('three levels deep', function(t) {
  var object = { hello: { world: { lorem: 'ipsum' } } }

  t.equal(pluck('hello.world.lorem')(object), 'ipsum', 'using partial application')
  t.equal(pluck('hello.world.lorem', object), 'ipsum', 'using quick application')
  t.end()
})

test('arrays as keys', function(t) {
  var object = { hello: { world: { lorem: 'ipsum' } } }
  var keys   = ['hello', 'world', 'lorem']

  t.equal(pluck(keys)(object), 'ipsum', 'using partial application')
  t.equal(pluck(keys, object), 'ipsum', 'using quick application')
  t.end()
})

test('unavailable properties', function(t) {
  var object = { hello: { world: { lorem: 'ipsum' } } }

  t.equal(pluck('check.world.lorem')(object), undefined, 'using partial application')
  t.equal(pluck('check.world.lorem', object), undefined, 'using quick application')
  t.end()
})

test('undefined objects', function(t) {
  var object = undefined

  t.equal(pluck('check.world.lorem')(object), undefined, 'using partial application')
  t.equal(pluck('check.world.lorem', object), undefined, 'using quick application')
  t.end()
})
