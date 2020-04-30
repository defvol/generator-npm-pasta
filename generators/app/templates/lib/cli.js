#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const pack = require('./index')
const util = require('./utils')

if (argv.version || argv.v) {
  console.log(util.version())
} else if (argv.help || argv.h) {
  console.log(util.usage())
} else {
  console.log(pack())
}
