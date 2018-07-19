var scheduler = require('nanoscheduler')()
var nanologger = require('nanologger')
var Hooks = require('choo-hooks')

module.exports = logger

function logger (state, emitter, opts) {
  var initialRender = true
  var hooks = Hooks(emitter)
  var log = nanologger('choo')

  hooks.on('log:debug', logger('debug'))
  hooks.on('log:info', logger('info'))
  hooks.on('log:warn', logger('warn'))
  hooks.on('log:error', logger('error'))
  hooks.on('log:fatal', logger('fatal'))

  hooks.on('event', function (eventName, data, timing) {
    if (opts.filter && !opts.filter(eventName, data, timing)) return

    if (timing) {
      var duration = timing.duration.toFixed()
      var level = duration < 50 ? 'info' : 'warn'
      if (data !== undefined) logger(level)(eventName, data, duration + 'ms')
      else logger(level)(eventName, duration + 'ms')
    } else {
      if (data !== undefined) logger('info')(eventName, data)
      else logger('info')(eventName)
    }
  })

  hooks.on('use', function (count, duration) {
    logger('debug')('use', { count: count }, duration + 'ms')
  })

  hooks.on('unhandled', function (eventName, data) {
    logger('error')('No listeners for ' + eventName)
  })

  hooks.on('DOMContentLoaded', function (timing) {
    if (!timing) return logger('info')('DOMContentLoaded')
    var level = timing.interactive < 1000 ? 'info' : 'warn'
    logger(level)('DOMContentLoaded', timing.interactive + 'ms to interactive')
  })

  hooks.on('render', function (timings) {
    if (!timings || !timings.render) return logger('info')('render')
    var duration = timings.render.duration.toFixed()
    var msg = 'render'

    if (initialRender) {
      initialRender = false
      msg = 'initial ' + msg
    }

    // each frame has 10ms available for userland stuff
    var fps = Math.min((600 / duration).toFixed(), 60)

    if (fps === 60) {
      logger('info')(msg, fps + 'fps', duration + 'ms')
    } else {
      var times = {
        render: timings.render.duration.toFixed() + 'ms'
      }
      if (timings.morph) times.morph = timings.morph.duration.toFixed() + 'ms'
      logger('warn')(msg, fps + 'fps', duration + 'ms', times)
    }
  })

  hooks.on('resource-timing-buffer-full', function () {
    logger('error')("The browser's Resource Resource timing buffer is full. Cannot store any more timing information")
  })

  hooks.start()

  function logger (level) {
    return function () {
      var args = []
      for (var i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i])
      }
      scheduler.push(function () {
        log[level].apply(log, args)
      })
    }
  }
}
