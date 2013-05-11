function lug (x) {
  console.log.apply(console, arguments)
  return x
}

lug.label = function (label) {
  return function (x) {
    var args = Array.prototype.slice.call(arguments)
    console.log.apply(console, [label+':'].concat(args))
    return x
  }
}

module.exports = lug