// This page creates the svg's that make up the tracklist buttons on the
// individual song pages.  The svg code comes from font-awesome.

var html = require('choo/html')

function play () {
  return html`
  <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>
    `
}

function stop () {
  return html`
    <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/></svg>`
}

function previous (stats, onclick) {
  if (stats == 'active') {
    return html`
      <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"/></svg>
      `
  } else {
    return html`
      <svg fill='dimgray' width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"/></svg>
      `
  }
}

function next (stats) {
  if (stats == 'active') {
    return html`
      <svg width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"/></svg>
      `
  } else {
    return html`
      <svg fill='dimgray' width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"/></svg>
      `
  }
}

module.exports = {play, next, stop, previous}
