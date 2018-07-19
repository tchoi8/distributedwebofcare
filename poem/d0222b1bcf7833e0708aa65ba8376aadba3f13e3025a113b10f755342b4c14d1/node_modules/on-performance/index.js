var assert = require('assert')

var entryTypes = [
  'node',
  'mark',
  'measure',
  'gc',
  'function'
]

module.exports = onPerformance

function onPerformance (cb) {
  if (typeof window !== 'undefined') return require('./browser.js')(cb) // electron support

  assert.equal(typeof cb, 'function', 'on-performance: cb should be type function')

  var PerformanceObserver
  var performance
  try {
    PerformanceObserver = require('perf_hooks').PerformanceObserver
    performance = require('perf_hooks').performance
  } catch (e) {
    return cb(new Error('on-performance: PerformanceObserver is unavailable. Use Node v8.5.0 or higher.'))
  }

  // Enable singleton.
  if (global._onperformance) {
    global._onperformance.push(cb)
    return stop
  }

  global._onperformance = [cb]
  var observer = new PerformanceObserver(parseEntries)
  // Only necessary in Node >=8.5 <10, Node 10+ doesn't have a global buffer
  if (performance.getEntries) {
    setTimeout(function () {
      parseEntries(performance)
      observer.observe({ entryTypes: entryTypes })
    }, 0)
  } else {
    observer.observe({ entryTypes: entryTypes })
  }

  return stop

  function stop () {
    global._onperformance.splice(global._onperformance.indexOf(cb), 1)
  }

  function parseEntries (list) {
    list.getEntries().forEach(function (entry) {
      clear(entry)
      global._onperformance.forEach(function (cb) {
        cb(entry)
      })
    })
  }

  function clear (entry) {
    var type = entry.entryType
    // Only necessary in Node >=8.5 <10, Node 10+ doesn't have a global buffer
    if (type === 'measure' && performance.clearMeasures) performance.clearMeasures(entry.name)
    else if (type === 'function' && performance.clearFunctions) performance.clearFunctions(entry.name)
  }
}
