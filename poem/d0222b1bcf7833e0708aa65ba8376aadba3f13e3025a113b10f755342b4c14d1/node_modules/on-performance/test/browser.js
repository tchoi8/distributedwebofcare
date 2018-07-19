var nanotiming = require('nanotiming')
var tape = require('tape')

var onPerformance = require('../browser')

tape('should flush already buffered events', function (assert) {
  var startLength = window.performance.getEntries().length
  var i = 0
  var stop = onPerformance(function (entry) {
    assert.ok(entry, 'entry passed')
    i++
    endMaybe()
  })

  endMaybe() // call once at the start to if startLength === 0
  function endMaybe () {
    assert.pass('endMaybe called')
    if (i < startLength) return
    if (stop) stop()
    assert.end()
  }
})

tape('should capture performance measures', function (assert) {
  assert.plan(2)

  var startLength = window.performance.getEntries().length

  var stop = onPerformance(function (entry) {
    if (entry.entryType !== 'measure') return

    assert.ok(entry, 'entry was passed')
    var newLength = window.performance.getEntries().length
    assert.equal(startLength, newLength, 'entries are cleared')
    stop()
  })

  nanotiming('test')()
})
