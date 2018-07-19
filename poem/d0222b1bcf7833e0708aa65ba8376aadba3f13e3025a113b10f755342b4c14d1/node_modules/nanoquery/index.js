var assert = require('assert')
var Url = require('url')

if (typeof window !== 'undefined') {
  module.exports = require('./browser')
} else {
  module.exports = nanoquery
}

function nanoquery (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')
  return Url.parse(url, true).query
}
