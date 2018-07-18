module.exports = {handle}

function handle (form) {
  var formData = new FormData(form)
  var data = {}
  for (var pair of formData.entries()) {
    data[pair[0]] = pair[1]
  }
  return data
}
