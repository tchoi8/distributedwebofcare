const html = require('nanohtml')
const raw = require('nanohtml/raw')
const md = require('markdown-it')()

const icon = require('../aesthetic/assets/icons')

module.exports = view

function view (state, emit) {
  if (state.text.paragraphs) {
    var paragraphs = state.text.paragraphs
    var coverImage = `../aesthetic/cover-image/${state.coverImage}`
    var title = state.text.title

    return html`
    <body onkeydown=${hotKeys}>
      <section id='cover-stamp'>
      <img id='illustration' 
        src=${coverImage} 
        onclick=${backHome}
        alt='cover image' />
      <h1 id='title'>${title}</h1>
      </section>
      <section id='text'>
	${renderParagraph(paragraphs[state.index])}
      </section>
      <footer id='navigation-buttons'>
	${previous()}
	${next()}
      </footer>
    </body>
    `
  } else {
    return html`<h1>loading</h1>`
  }

  //
  // Functions to render the track navigation buttons
  //

  function prevPagesExist () {
    return state.index > 0
  }

  function morePagesExist () {
    return (state.index + 1) < paragraphs.length
  }


  function previous () {
      return html`
	<a href='javascript:void(0);' onclick=${prevPhrase}>
	${icon.previous('active')}
	</a>
	`
    }
  function next () {
      return html`
        <a href='javascript:void(0);' onclick=${nextPhrase}>
        ${icon.next('active')}
        </a>
      `
  }

  // Functions to emit the right messages to our store, which will make magic happen.
  function nextPhrase () {
      morePagesExist() ? emit('nextPhrase') : toColophon()
  }
  function prevPhrase () {
    prevPagesExist() ? emit('prevPhrase') : backHome()
  }
  function backHome () {
    emit('pushState', '/')
  }
  function toColophon () {
    emit('pushState', '#colophon')
  }

  function hotKeys (e) {
    var key = e.key
    if (key === 'l' || key === 'ArrowRight') {
      nextPhrase()
    }
    if (key === 'h' || key === 'ArrowLeft') {
      prevPhrase()
    }
  }
}

function renderParagraph (paragraph) {
  var htmlFromMarkdown = md.render(paragraph)
  var content = raw(htmlFromMarkdown)
  return html`<article class='paper'>${content}</article>`
}
