const fs = require('fs')
const path = require('path')

/**
 * Get usage instructions
 * @return {String} the instructions to run this thing
 */
module.exports.usage = function () {
  const u = []
  u.push('<%= description %>')
  u.push('usage: <%= project %> [options]')
  u.push('')
  u.push(' --help prints this message')
  u.push(' --version prints package version')
  u.push('')
  return u.join('\n')
}

/**
 * Get module version from the package.json file
 * @return {String} version number
 */
module.exports.version = function () {
  const data = fs.readFileSync(path.join(__dirname, '..', 'package.json'))
  return JSON.parse(data).version
}
