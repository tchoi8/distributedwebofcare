const html = require('nanohtml')
const _ = require('lodash')

module.exports = view

function view (state, emit) {
  if (state.info) {
    var info = state.info
    return html`
    <body>
    <div id='colophon'>
    <a href='/'><h1>${info.title}: a dat zine</h1></a>
    <section id='zine-info'>
      ${renderInfo(info)}
    </section>
    <section id='invite-to-copy'>
      <p>Wanna Make your own zine?  You can copy this one to use its structure, then  adjust it to match yr heart!</p>
      <button onclick=${makeCopy}>Make yr Own Copy!</button>
      </section>
    </div>
    </body>
      `
  } else {
    return html`<body><p>loading</p></body>`
  }

  function renderInfo (info) {
    var infoArray = _.entries(info)
    return infoArray.map(pair => {
      if (pair[0] !== 'title') {
	return html`<p><strong>${pair[0]}:</strong> ${pair[1]}</p>`
      }
    })
  }

  async function makeCopy () {
  var self = new DatArchive(window.location)
  var branch = await DatArchive.fork(self, {title: 'name of your zine', description: 'make sure to read the README.  It helps!'})
  window.open(branch.url)
  }
}
