var onPerformance = require('on-performance')
var scheduler = require('nanoscheduler')()
var assert = require('assert')

module.exports = ChooHooks

function ChooHooks (emitter) {
  if (!(this instanceof ChooHooks)) return new ChooHooks(emitter)

  assert.equal(typeof emitter, 'object')

  this.hasWindow = typeof window !== 'undefined'
  this.hasIdleCallback = this.hasWindow && window.requestIdleCallback
  this.hasPerformance = this.hasWindow &&
    window.performance &&
    window.performance.getEntriesByName

  this.emitter = emitter
  this.listeners = {}
  this.buffer = {
    use: [],
    render: {},
    events: {}
  }
}

ChooHooks.prototype.on = function (name, handler) {
  this.listeners[name] = handler
}

ChooHooks.prototype.start = function () {
  var self = this
  if (this.hasPerformance) {
    window.performance.onresourcetimingbufferfull = function () {
      var listener = self.listeners['resource-timing-buffer-full']
      if (listener) listener()
    }
  }

  // TODO also handle log events
  onPerformance(function (timing) {
    if (!timing) return
    if (timing.entryType !== 'measure') return

    var eventName = timing.name
    if (/choo\.morph/.test(eventName)) {
      self.buffer.render.morph = timing
    } else if (/choo\.route/.test(eventName)) {
      self.buffer.render.route = timing
    } else if (/choo\.render/.test(eventName)) {
      self.buffer.render.render = timing
    } else if (/choo\.use/.test(eventName)) {
      self.buffer.use.push(timing)
    } else if (/choo\.emit/.test(eventName) && !/log:/.test(eventName)) {
      var eventListener = self.listeners['event']
      if (eventListener) {
        var timingName = eventName.match(/choo\.emit\('(.*)'\)/)[1]
        if (timingName === 'render' || timingName === 'DOMContentLoaded') return

        var traceId = eventName.match(/\[(\d+)\]/)[1]
        var data = self.buffer.events[traceId]

        self.buffer.events[traceId] = null
        eventListener(timingName, data, timing)
      }
    }

    var rBuf = self.buffer.render
    if (rBuf.render && rBuf.route && rBuf.morph) {
      var renderListener = self.listeners['render']
      if (!renderListener) return
      var timings = {}
      while (self.buffer.render.length) {
        var _timing = self.buffer.render.pop()
        var name = _timing.name
        if (/choo\.render/.test(name)) timings.render = _timing
        else if (/choo\.morph/.test(name)) timings.morph = _timing
        else timings.route = _timing
      }
      rBuf.render = rBuf.route = rBuf.morph = void 0
      renderListener(timings)
    }
  })

  // Check if there's timings without any listeners
  // and trigger the DOMContentLoaded event.
  // If the timing API is not available, we handle all events here
  this.emitter.on('*', function (eventName, data, uuid) {
    var logLevel = /^log:(\w{4,5})/.exec(eventName)

    if (!self.hasPerformance && eventName === 'render') {
      // Render
      var renderListener = self.listeners['render']
      if (renderListener) renderListener()
    } else if (eventName === 'DOMContentLoaded') {
      // DOMContentLoaded
      self._emitLoaded()
    } else if (logLevel) {
      logLevel = logLevel[1]
      // Log:*
      var logListener = self.listeners['log:' + logLevel]
      if (logListener) logListener(eventName, data)
    } else if (!self.emitter.listeners(eventName).length) {
      // Unhandled
      var unhandledListener = self.listeners['unhandled']
      if (unhandledListener) unhandledListener(eventName, data)
    } else if (eventName !== 'render') {
      // *
      if (self.hasPerformance) self.buffer.events[uuid] = data
    }
  })
}

// compute and log time till interactive when DOMContentLoaded event fires
ChooHooks.prototype._emitLoaded = function () {
  var self = this
  scheduler.push(function clear () {
    var listener = self.listeners['DOMContentLoaded']
    var usesListener = self.listeners['use']

    var timing = self.hasWindow && window.performance && window.performance.timing

    if (listener && timing) {
      listener({
        interactive: timing.domInteractive - timing.navigationStart,
        loaded: timing.domContentLoadedEventEnd - timing.navigationStart
      })
    }

    if (self.hasPerformance) {
      var duration = sumDurations(self.buffer.use)
      if (usesListener) usesListener(self.buffer.use.length, duration)
    } else {
      usesListener()
    }
  })
}

function sumDurations (timings) {
  return timings.reduce(function (sum, timing) {
    return sum + timing.duration
  }, 0).toFixed()
}
