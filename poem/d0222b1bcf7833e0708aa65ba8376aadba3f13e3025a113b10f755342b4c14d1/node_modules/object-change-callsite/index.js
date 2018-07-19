var assert = require('assert')

module.exports = objectChangeCallsite

function objectChangeCallsite (target, callback) {
  assert.equal(typeof target, 'object', 'object-change-callsite: target should be type object')
  assert.equal(typeof callback, 'function', 'object-change-callsite: callback should be type function')

  return new Proxy(target, {
    set: function (obj, prop, value) {
      var err = new Error()
      var trace = strip(err.stack)
      callback(prop, value, trace)
      obj[prop] = value
      return true
    },
    deleteProperty: function (target, prop) {
      var err = new Error()
      var trace = strip(err.stack)
      callback(prop, undefined, trace)
      if (prop in target) {
        delete target[prop]
        return true
      }
      return false
    }
  })
}

function strip (str) {
  var arr = str.split('\n')
  arr = arr.length > 2 ? arr.slice(2) : arr
  arr[0] = arr[0].replace(/^ {4}at /, '')
  return '\n' + arr.join('\n')
}
