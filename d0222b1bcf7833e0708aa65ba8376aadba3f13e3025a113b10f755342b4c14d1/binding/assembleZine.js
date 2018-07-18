var smarkt = require('smarkt')
var _ = require('lodash')

var archive = new DatArchive(window.location.host)

function store (state, emitter) {
  state.text = {}
  emitter.on('DOMContentLoaded', function () {
    assignText()
    assignCoverImage()
    assignZineInfo()
  })

  function assignCoverImage () {
    archive.readdir('aesthetic/cover-image')
      .then(images => {
	for (var image of images) {
          state.coverImage = image
        }
      })
  }

  function assignText () {
    archive.readdir('text')
      .then(files => mapToState(files))
  }

  function assignZineInfo () {
    archive.readFile('distro/info.txt')
      .then(info => {
        document.querySelector('title').textContent = info.title
	state.info = smarkt.parse(info)
	emitter.emit('pushState')
      })
  }

  function mapToState (textFiles) {
    textFiles.map(text => {
      if (fileExtension(text) === 'txt') {
        archive.readFile(`text/${text}`).then(contents => addToStateText(contents))
      }
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

function fileExtension (file) {
  return _.last(file.split('.'))
}

module.exports = store
