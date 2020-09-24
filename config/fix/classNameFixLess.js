
const getPrefix = require('./getPrefix');

module.exports = function(source, a) {
  let prefix = getPrefix(this.resourcePath);
  return source.replace(/___/g, prefix);
}