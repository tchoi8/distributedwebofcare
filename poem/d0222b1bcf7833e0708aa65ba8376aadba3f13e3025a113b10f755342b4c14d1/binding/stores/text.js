var smarkt = require('smarkt')
var _ = require('lodash')

var archive = new DatArchive(window.location.host)

function store (state, emitter) {
  state.text = {}
  emitter.on('DOMContentLoaded', function () {
    archive.readdir('text').then(files => mapToState(files))
  })
  function mapToState (textFiles) {
    console.log(textFiles)
    textFiles.map(text => {
      archive.readFile(`text/${text}`)
        .then(contents => {
          addToStateText(contents)
        })
    })
  }
  function addToStateText (text) {
    state.text = smarkt.parse(text)
    state.text.paragraphs = cleanedText(_.split(state.text.text, '~~*'))
    emitter.emit('pushState')
    console.log(state.text)
  }
}

function cleanedText (arr) {
  return arr.map(text => _.trim(text))
}

module.exports = store
