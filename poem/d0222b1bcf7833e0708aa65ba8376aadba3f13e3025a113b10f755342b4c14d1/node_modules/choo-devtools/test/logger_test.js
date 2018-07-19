var test = require('tape')
var choo = require('choo')
var devtools = require('../')

test('Filtering out logs', function (t) {
  t.plan(1)

  var app = choo()
  app.use(devtools({
    filter: function (eventName, data, timing) {
      if (eventName === 'foo') {
        t.pass('Calls filter function')
        return false
      }

      return true
    }
  }))

  app.route('*', function () {
    return 'Need to call `toString*()` for the app to start so need a route.'
  })
  app.toString('/')

  app.emitter.emit('foo')
})
