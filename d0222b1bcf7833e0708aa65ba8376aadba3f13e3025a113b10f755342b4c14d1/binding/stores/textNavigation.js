module.exports = store

function store (state, emitter) {
  state.index = 0
  state.lastSong = ''

  emitter.on('DOMContentLoaded', function () {
    emitter.on('nextPhrase', function () {
      state.index += 1
      emitter.emit('render')
    })
    emitter.on('prevPhrase', function () {
      state.index -= 1
      emitter.emit('render')
    })
    emitter.on('clearIndex', function () {
      state.index = 0
      emitter.emit('render')
    })
    emitter.on('close', function (song) {
      state.lastSong = song
      emitter.emit('pushState', '/#songbook')
    })
  })
}
