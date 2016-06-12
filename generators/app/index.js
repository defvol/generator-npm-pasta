var generators = require('yeoman-generator');
var camelize = require('camelize');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  /**
   * Prompt user.
   * Project name defaults to current folder.
   * Author's name is saved.
   */
  prompting: function () {
    var questions = [
      {
        type    : 'input',
        name    : 'project',
        message : 'Project name',
        default : this.appname
      },
      {
        type    : 'input',
        name    : 'description',
        message : 'Project description',
      },
      {
        type    : 'input',
        name    : 'author',
        message : 'Author name',
        store   : true
      }
    ];
    var done = this.async();

    return this.prompt(questions, function (answers) {
      this.project = answers.project;
      this.description = answers.description;
      this.author = answers.author;

      this.appname = camelize(this.project);
      this.year = (new Date()).getYear() + 1900;

      done();
    }.bind(this));
  },
  writing: function () {
    this.log('Writing some copypasta');

    this.destinationRoot(this.appname);

    this.template('lib/index.js');
    this.template('lib/utils.js');
    this.template('LICENSE');
    this.template('package.json');
    this.template('README.md');

    this.copy('lib/cli.js');
    this.copy('gitignore', '.gitignore');
    this.copy('npmignore', '.npmignore');
    this.directory('test');
  },
  installing: function () {
    this.log('Installing dependencies');
    this.npmInstall(['minimist'], { 'save': true });
    this.npmInstall(['tape'], { 'saveDev': true });
  }
});
