const html = require('nanohtml')

const button = require('./actionButtons')

module.exports = (state, emit) => {
  var branch = state.branch
  if (state.branch.name) {
    return html`
        <div id='placard-form' class='form-card'>
        <h1>Library Details</h1>
          <p id='placard-form-close' onclick=${button.placardClose}>close</p>
          <form onsubmit=${updateBranch}>
          <label for='branch name'>Branch Name:<input type='text' name='name' value=${branch.name} /></label>
          <label for='branch description'>description:</label><textarea name='description' value=${branch.description}/>${branch.description}</textarea>
          <input type='submit' />
          </form>
        </div>
    `
  }

  function updateBranch (e) {
    e.preventDefault()
    var form = e.currentTarget
    emit('branch updated', form)
  }
}
