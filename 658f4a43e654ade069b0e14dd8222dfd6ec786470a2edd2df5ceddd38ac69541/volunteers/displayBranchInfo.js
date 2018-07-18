const smarkt = require('smarkt')

const formHandler = require('./formHandler')

var archive = new DatArchive(window.location)

function store (state, emitter) {
  state.branch = {}
  emitter.on('DOMContentLoaded', function () {
    mapInfoToState(state, emitter)
  })

  emitter.on('branch updated', function (form) {
    var infoAsObj = formHandler.handle(form)
    var infoAsTxt = smarkt.stringify(infoAsObj)

    state.branch = infoAsObj
    archive.writeFile('branch/info.txt', infoAsTxt)
      .then(emitter.emit('pushState'))
  })

  function mapInfoToState (state, emitter) {
    archive.readFile('branch/info.txt')
      .then(info => {
        var infoAsObj = smarkt.parse(info)
        state.branch = infoAsObj
        emitter.emit('pushState')
      })
  }
}

module.exports = store
