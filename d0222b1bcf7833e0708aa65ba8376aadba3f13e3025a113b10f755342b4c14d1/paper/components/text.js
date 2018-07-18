const html = require('nanohtml')
const raw = require('nanohtml/raw')
const _ = require('lodash')
const md = require('markdown-it')()

const icon = require('../styles/assets/icons')

module.exports = view

function view (state, emit) {
  if (state.text.paragraphs) {
    var paragraphs = state.text.paragraphs
  } else {
    paragraphs = ['loading']
  }

  return html`
    <body>
    <div class='wrapper'>
    <h1 id='title'>read me</h1>
    <section id='text' class='paper'>
    ${renderParagraph(paragraphs[state.index])}
    </section>
    <footer id='track-buttons'>
    ${previous()}
  ${next()}
    </footer>
  <img id='illustration' src='paper/styles/assets/digi-eyes.gif' alt='digital eyes blinking' />
    </body>
    `
  //
  // Functions to render the track navigation buttons
  //

  function previous () {
    if (state.index > 0) {
      return html`
	<a href='javascript:void(0);' onclick=${prevPhrase}>
	${icon.previous('active')}
	</a>
	`
    } else {
      return html`
        <p>${icon.previous('grayed')} </p>
	`
    }
  }
  function next () {
    if ((state.index + 1) < paragraphs.length) {
      return html`
        <a href='javascript:void(0);' onclick=${nextPhrase}>
        ${icon.next('active')}
        </a>
      `
    } else {
      return html`
        <p>${icon.next('grayed')}</p>
      `
    }
  }

  // Functions to emit the right messages to our store, which will make magic happen.
  function nextPhrase () {
    emit('nextPhrase')
  }

  function prevPhrase () {
    emit('prevPhrase')
  }
}

function renderParagraph (paragraph) {
  var htmlFromMarkdown = md.render(paragraph)
  var content = raw(htmlFromMarkdown)
  return html`<article>${content}</article>`
}
