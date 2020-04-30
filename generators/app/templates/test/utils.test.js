/* eslint-env mocha */

const assert = require('assert')
const utils = require('../lib/utils')

describe('utils', function () {
  it('#usage', function () {
    const got = utils.usage()
    assert(got.match(/usage/), 'returns some instructions')
    assert(got.length > 50, 'lots of instructions')
  })

  it('#version', function () {
    const got = utils.version()
    assert(got.match(/^\d+\.\d+\.\d+$/), 'finds basic semver in package.json')
  })
})
