var html = require('choo/html')
var log = require('choo-log')
var choo = require('choo')
var sw = require('.')
var clear = require('./clear')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(clear())
}
app.use(sw())
app.use(log())
app.use(ready)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>Choo service worker example</h1>
      <hr>
      <div>
        <p>syncTags: <b>${JSON.stringify(state.syncTags)}</b></p>
      </div>
      <p>To run this example, you must follow the next instructions (some of them will change some of the data above)</p>
      <ol>
        <li>Active notifications for this site <button onclick="${activeNotifications}">active notifications</button></li>
        <li>Post a message <input id="message" type="text"/> <button onclick="${postMessage}">send</button></li>
        <li>Get a message from worker <button onclick="${getMessage}">get message</button> <span id="worker-message"></span></li>
        <li>Activate background syncronization <button onclick="${activateSync}">activate</button></li>
      </ol>
    </body>
  `

  function activeNotifications (e) {
    e.preventDefault()
    emit('render')
    emit(sw.events.NOTIFICATION_REQUEST, function (result) {
      emit('log:info', result)
    })
  }
  function activateSync (e) {
    e.preventDefault()
    emit('render')
    emit(sw.events.SYNC, 'test-tag')
  }
  function postMessage (e) {
    e.preventDefault()
    emit('render')
    var message = document.getElementById('message').value
    emit(sw.events.POST_MESSAGE, message)
  }
  function getMessage (e) {
    e.preventDefault()
    emit('render')
    emit(sw.events.POST_MESSAGE, 'ping')
  }
}

function ready (state, emitter) {
  emitter.on(sw.events.MESSAGE, function (message) {
    var span = document.getElementById('worker-message')
    span.textContent = JSON.stringify(message)
    // the service worker say that we should re render
    if (message.data === 'render') {
      emitter.emit('log:info', 'Re render from the service worker')
      emitter.emit('render')
    }
  })
}
