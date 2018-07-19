/* global MessageChannel Notification */
var mutate = require('xtend/mutable')
var assert = require('assert')

module.exports = serviceWorker

var events = serviceWorker.events = {
  INSTALLED: 'sw:installed',
  UPDATED: 'sw:updated',
  REDUNDANT: 'sw:redundant',
  POST_MESSAGE: 'sw:postMessage',
  MESSAGE: 'sw:message',
  SYNC: 'sw:sync',
  NOTIFICATION_REQUEST: 'sw:notificationRequest',
  ERROR: 'log:error'
}

function serviceWorker (name, opts) {
  name = name || '/sw.js'
  opts = opts || {}

  assert.equal(typeof name, 'string', 'choo-service-worker: name should be type string')
  assert.equal(typeof opts, 'object', 'choo-service-worker: opts should be type object')

  return function (state, emitter) {
    assert.equal(typeof state, 'object', 'choo-service-worker: state should be type object')
    assert.equal(typeof emitter, 'object', 'choo-service-worker: emitter should be type object')

    emitter.on(state.events.DOMCONTENTLOADED, function () {
      opts = mutate({ scope: '/' }, opts)
      // electron support
      if (opts.electron) {
        var path = require('path')
        var url = require('url')
        opts.scope = path.join(__dirname, opts.scope)
        name = url.format({
          pathname: path.join(__dirname, name.replace(/^\//, '')),
          protocol: 'file:',
          slashes: true
        })
        delete opts.electron
      }
      window.onmessage = function (event) {
        emitter.emit(events.MESSAGE, { data: event.data, channel: 'window', port: null })
      }
      if (window.MessageChannel) {
        var messageChannel = new MessageChannel()
        messageChannel.port1.onmessage = function (event) {
          emitter.emit(events.MESSAGE, { data: event.data, channel: 'messageChannel', port: 'port1' })
        }
        messageChannel.port2.onmessage = function (event) {
          emitter.emit(events.MESSAGE, { data: event.data, channel: 'messageChannel', port: 'port2' })
        }
      }
      emitter.on(events.NOTIFICATION_REQUEST, function (cb) {
        Notification.requestPermission(function (result) {
          if (typeof result === 'function') cb(result)
        })
      })
      if (navigator.serviceWorker && navigator.onLine) {
        navigator.serviceWorker.onmessage = function (event) {
          emitter.emit(events.MESSAGE, { data: event.data, channel: 'navigator.serviceWorker', port: null })
        }
        navigator.serviceWorker.register(name, opts)
          .then(function (registration) {
            registration.onupdatefound = function () {
              var installingWorker = registration.installing
              installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    emitter.emit(events.UPDATED, registration)
                  } else {
                    emitter.emit(events.INSTALLED, registration)
                  }
                } else if (installingWorker.state === 'redundant') {
                  emitter.emit(events.REDUNDANT, registration)
                }
              }
            }

            // Trigger the registration if it exists
            if (registration.sync) getTags(registration)
          }).catch(function (err) {
            emitter.emit(events.ERROR, err)
          })

        // sw ready
        navigator.serviceWorker.ready
          .then(function (registration) {
            new Promise(function (resolve) {
              var worker = registration.active
              if (worker.state === 'activated') {
                resolve()
                return
              }
              worker.addEventListener('statechange', resolve, { once: true })
              emitter.on(events.POST_MESSAGE, function (message) {
                worker.postMessage(message)
              })
            }).then(function () {
              if (registration.navigationPreload) {
                registration.navigationPreload.enable()
              }
            })
            emitter.on(events.SYNC, function (tag) {
              registration.sync.register(tag).then(function () {
                return registration.sync.getTags()
              }).then(function (tags) {
                state.syncTags = tags
              }).catch(function (err) {
                emitter.emit(events.ERROR, err)
              })
            })
          }).catch(function (err) {
            emitter.emit(events.ERROR, err)
          })
      }
    })

    function getTags (registration) {
      registration.sync.getTags()
        .then(function (tags) {
          state.syncTags = tags
        }).catch(function (err) {
          emitter.emit(events.ERROR, err)
        })
    }
  }
}
