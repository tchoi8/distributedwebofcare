const html = require('choo/html')
const icon = require('../styles/assets/icons')

var TITLE = 'r e a d m e'

module.exports = (state, emit) => {
  return html`
  <body>
    <div class='wrapper'>
	  <a href='#readme'><h1>read me</h1></a>
    </div>
  </body>
  `
}
