var html = require('nanohtml')
var choo = require('choo')

module.exports = view

function view (emit) {
//I would like this to be form validated, but cannot figure out how to
// Do so, the regEx pattern matching doesn't seem to work...
  return html`
      <div id='new-branch-form' class='form-card transition'>
      <h1>Make a New Branch</h1>
      <p>You can make your own copy of this library by clicking the button below.  This will open your library in a new tab.</p>
      <p>It's best to read the README first, as it guides you through setting up your own zines and customizing the site and such.  To get to the README on your new branch, click the three dots in the address bar and then click 'view files'.</p>
    <p>Thanks for doing this and have fun!</p>
      <input type='submit' value='Make a Branch!' onclick=${makeBranch}/>
      </div>
    `
  async function makeBranch () {
    document.querySelector('#new-branch-form').classList.toggle('revealed')
    var branchButton = document.querySelector('#branch-button')
    branchButton.textContent = 'Make a New Branch!'

    var self = new DatArchive(window.location)
    var branch = await DatArchive.fork(self, {title: 'name your branch!', description: 'this description is for beaker, add a longer one in yr distro/ folder'})
    window.open(branch.url)
  }
}
