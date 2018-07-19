var nanotiming = require('nanotiming')
var tape = require('tape')

var onPerformance = require('../')
var hasPerfHooks = (function () {
  try {
    require('perf_hooks')
    return true
  } catch (err) {
    return false
  }
}())

tape('should capture performance measures', { skip: !hasPerfHooks }, function (assert) {
  assert.plan(1)

  var stop = onPerformance(function (entry) {
    if (entry.entryType !== 'measure') return

    assert.ok(entry, 'entry was passed')
    stop()
  })

  nanotiming('test')()
})
