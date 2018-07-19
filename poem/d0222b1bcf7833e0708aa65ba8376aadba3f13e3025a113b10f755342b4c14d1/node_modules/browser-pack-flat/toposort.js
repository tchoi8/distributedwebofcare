var through = require('through2')

/**
 * @andreypopp's deps-topo-sort, but taking into account the `row.order`
 * property.
 * This ensures that entry points are evaluated in the correct order in
 * a flat bundle.
 */

module.exports = function () {
  var index = {}
  var isEmpty = true

  function resolve (id) {
    return index[id]
  }

  return through.obj(
    function (mod, enc, cb) {
      isEmpty = false
      index[mod.id] = mod
      cb()
    },
    function (cb) {
      if (isEmpty) return this.push(null)

      var self = this
      var modules = values(index).sort(cmp)
      var seen = {}

      function visit (mod) {
        if (seen[mod.id]) return
        seen[mod.id] = true
        if (hasDeps(mod)) {
          var deps = values(mod.deps).map(resolve).filter(Boolean)
          deps.sort(cmp)
          deps.forEach(visit)
        }
        self.push(mod)
      }

      modules.forEach(visit)
      cb()
    }
  )
}

function values (obj) {
  var result = []
  for (var k in obj) { result.push(obj[k]) }
  return result
}

function hasDeps (mod) {
  return mod.deps && Object.keys(mod.deps).length > 0
}

function cmp (a, b) {
  // Float entry modules to the top.
  if (a.entry && !b.entry) return -1
  if (!a.entry && b.entry) return 1
  // Sort entry modules by their `.order`.
  var ao = typeof a.order === 'number'
  var bo = typeof b.order === 'number'
  if (ao && bo) {
    return a.order < b.order ? -1 : 1
  }
  // Modules that have an `.order` go before modules that do not.
  if (ao && !bo) return -1
  if (!ao && bo) return 1

  // Else sort by ID, so that output is stable.
  return a.id < b.id ? -1 : 1
}
