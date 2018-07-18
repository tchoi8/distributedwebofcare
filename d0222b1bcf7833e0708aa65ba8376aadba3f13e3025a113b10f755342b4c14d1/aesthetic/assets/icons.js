// This page creates the svg's that make up the navigation buttons on the
// individual text pages.  The svg code comes from font-awesome.

var html = require('choo/html')

function previous (onclick) {
  return html`
      <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"/></svg>
      `
}

function next (onclick) {
  return html`
      <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"/></svg>
      `
}

module.exports = {next, previous}
