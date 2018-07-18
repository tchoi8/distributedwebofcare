// Bring in our outdoor modules
const choo = require('choo')

// Bring in our indoor modules
const cover = require('./paper/cover')
const text = require('./paper/text')
const colophon = require('./paper/colophon')

// Initialize choo
const app = choo()

// if in dev mode, use choo-devtools, if in production, use the service worker
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./binding/assembleZine'))
app.use(require('./binding/textNavigation'))

app.mount('body')

app.route('/', cover)
app.route('#text', text)
app.route('#colophon', colophon)
