var scheduler = require('nanoscheduler')()
var assert = require('assert')

var entryTypes = [
  'frame',
  'measure',
  'navigation',
  'resource',
  'longtask'
]

module.exports = onPerformance

function onPerformance (cb) {
  assert.equal(typeof cb, 'function', 'on-performance: cb should be type function')

  var PerformanceObserver = typeof window !== 'undefined' && window.PerformanceObserver
  if (!PerformanceObserver) return

  // Enable singleton.
  if (window._onperformance) {
    window._onperformance.push(cb)
    return stop
  }

  window._onperformance = [cb]
  var observer = new PerformanceObserver(parseEntries)
  setTimeout(function () {
    parseEntries(window.performance)
    observer.observe({ entryTypes: entryTypes })
  }, 0)

  return stop

  function stop () {
    window._onperformance.splice(window._onperformance.indexOf(cb), 1)
  }

  function parseEntries (list) {
    list.getEntries().forEach(function (entry) {
      scheduler.push(function () {
        clear(entry)
        window._onperformance.forEach(function (cb) {
          cb(entry)
        })
      })
    })
  }

  // Navigation, longtask and frame don't have a clear method (yet)
  // Resource timings can only be cleared in bulk
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures
  function clear (entry) {
    var type = entry.entryType
    if (type === 'measure') window.performance.clearMeasures(entry.name)
    else if (type === 'resource') window.performance.clearResourceTimings()
  }
}
