var onChange = require('./')

var state = { foo: 'bar' }
state = onChange(state, function (attr, value, callsite) {
  console.log(`Property ${attr} changed to value ${value} at ${callsite}`)
})

console.log(state)

state.foo = 'hello'
state.bar = 'world'

console.log(state)
