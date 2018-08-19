const crypto = require('crypto');


module.exports = function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}
