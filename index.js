var sorts = require("sorts"),
  log = console.log.bind(console);

module.exports = function(someArray, otherArray){
  var first = someArray.sort(sorts.alphabetical)
  var second = otherArray.sort(sorts.alphabetical)
  return JSON.stringify(first) === JSON.stringify(second);
}