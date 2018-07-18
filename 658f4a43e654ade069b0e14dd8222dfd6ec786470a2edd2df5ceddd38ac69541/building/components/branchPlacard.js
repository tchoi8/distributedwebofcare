const html = require('nanohtml')
const raw = require('nanohtml/raw')
const md = require('markdown-it')()

const button = require('./actionButtons')
const editForm = require('./branchPlacardForm')

module.exports = view

function view (state, emit) {
  if (state.branch.name) {
    var branch = state.branch
    return html`
      <section id='branch-placard'>
      <div id='placard' class='transition-left'>
      <h1>${branch.name} ${button.editDetails(state.identity)}</h1>
      ${render(branch.description)}
      <p>Want to start your own zine library?<span> ${button.makeBranch()}</span></p>
      </div>
      ${editForm(state, emit)}
      </section>
    `
  } else {
    return html`<h1>loading</h1>`
  }
}

function render (text) {
  var htmlFromMarkdown = md.render(text)
  var compatibleHTML = raw(htmlFromMarkdown)
  return html`<article>${compatibleHTML}</article>`
}
