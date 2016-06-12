'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');
var path = require('path');

describe('npm-pasta:app', function () {

  before(function (done) {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ 'skip-install': true })
      .inTmpDir(function (dir) {
        var done = this.async();
        var templates = __dirname + '../generators/app/templates/';
        fs.copy(path.join(templates), dir, done);
      })
      .withPrompts({ project: 'npm-foo' })
      .on('end', done);
  });

  it('creates the project files', function () {
    assert.file([
      '.gitignore',
      '.npmignore',
      'LICENSE',
      'README.md',
      'lib/cli.js',
      'lib/index.js',
      'lib/utils.js',
      'package.json',
      'test/utils.test.js'
    ]);
  });

  it('updates templates correctly', function () {
    var content = new RegExp('function npmFoo');
    assert.fileContent('lib/index.js', content);
    content = new RegExp('usage: npmFoo');
    assert.fileContent('lib/utils.js', content);
  });

});
