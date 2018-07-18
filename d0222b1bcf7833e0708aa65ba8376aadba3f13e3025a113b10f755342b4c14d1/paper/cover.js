const html = require('choo/html')
const icon = require('../aesthetic/assets/icons')

module.exports = (state, emit) => {
  if (state.coverImage) {
    state.index = 0 //If you get back to the cover, make sure the story starts over.
    var coverImage = `../aesthetic/cover-image/${state.coverImage}`
    var title = state.text.title

    return html`
    <body id='cover'>
	<a href='#text' title='continue to text'>
          <img src=${coverImage} alt='cover for ${title}'/> 
          <h1>${title}</h1>
	</a>
    </body>
    `
  }
}
