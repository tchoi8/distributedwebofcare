// Learn more about using JavaScript to interact with webpages:
// https://developer.mozilla.org/en-US/docs/Web/javascript

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('url').innerText = window.location
  document.getElementById('library-url').href = `beaker://library/${window.location}`

  // is this a Dat-supported website? If so, use a dat:// URL for the beakerbrowser.com link
  const beakerLink = document.getElementById('beaker-url')
  if (window.DatArchive) {
    beakerLink.href = 'dat://beakerbrowser.com'
  } else {
    beakerLink.href = 'https://beakerbrowser.com'
  }
});

var question = document.getElementById('question');
question.addEventListener('click', toggleAnswer);
var answerVisible = false;
var answer = document.getElementById('answer');

function toggleAnswer() {
  if (answerVisible) {
    answer.style.cssText = "display: none;";
  } else {
    answer.style.cssText = "display: block;";
  }
  answerVisible = !answerVisible;
}
