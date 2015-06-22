var cuid = require('cuid');

module.exports = function cuid24() {
  return cuid().slice(1);
};
